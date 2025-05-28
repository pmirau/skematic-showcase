#!/bin/bash

# This script creates a file with spacing values based on Tailwind CSS v3.
# You can change the base spacing size to adjust all values.
#
# Example output:
# export default {
#   0: 0,
#   'px': 1,
#   0.5: 2,
#   1: 4,
#   1.5: 6,
#   2: 8,
#   // ...
# }

# Ask user for output filename (default to SpacingScale.ts if empty)
read -p "Enter output filename (default: SpacingScale.ts): " OUTPUT_FILE
OUTPUT_FILE=${OUTPUT_FILE:-SpacingScale.ts}

# Base spacing unit in pixels (adjust to change scaling factor)
BASE_SPACING=4

# Spacing data: key and pixel value
read -r -d '' DATA << EOM
0 0
px 1
0.5 2
1 4
1.5 6
2 8
2.5 10
3 12
3.5 14
4 16
5 20
6 24
7 28
8 32
9 36
10 40
11 44
12 48
14 56
16 64
20 80
24 96
28 112
32 128
36 144
40 160
44 176
48 192
52 208
56 224
60 240
64 256
72 288
80 320
96 384
EOM

echo "// Auto-generated spacing file" > "$OUTPUT_FILE"
echo "export default {" >> "$OUTPUT_FILE"

while read -r key px; do
  [[ -z "$key" || -z "$px" ]] && continue

  # Scale pixel value according to BASE_SPACING
  scaled_px=$(echo "scale=0; $px * $BASE_SPACING / 4" | bc)

  # Format the key: quote if non-numeric
  if [[ "$key" == "px" ]]; then
    key="px"
  elif [[ "$key" =~ ^[0-9]+(\.[0-9]+)?$ ]]; then
    :
  else
    key="'$key'"
  fi

  echo "  $key: $scaled_px," >> "$OUTPUT_FILE"
done <<< "$DATA"

echo "}" >> "$OUTPUT_FILE"

echo "File '$OUTPUT_FILE' generated with base spacing $BASE_SPACING px"
