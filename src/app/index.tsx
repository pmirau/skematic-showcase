import { HomeListRowProps } from '@/src/components/homelist/HomeListRow'
import HomeList from '@/src/components/homelist/HomeList'

export type HomeScreenProps = {}

export default function HomeScreen({}: HomeScreenProps) {
  // return <HomeList data={[]} />
  return <HomeList data={listRowsSample} />
}

const listRowsSample: HomeListRowProps[] = [
  {
    customerName: 'Emma Schneider',
    city: 'Berlin',
    lastSaved: new Date('2025-05-25'),
  },
  {
    customerName: 'Maximilian Bauer',
    city: 'Hamburg',
    lastSaved: new Date('2025-05-20'),
  },
  {
    customerName: 'Leonie Vogel',
    city: 'Dresden',
    lastSaved: new Date('2025-05-18'),
  },
  {
    customerName: 'Jonas Keller',
    city: 'Leipzig',
    lastSaved: new Date('2025-04-30'),
  },
  {
    customerName: 'Sophia Braun',
    city: 'Nürnberg',
    lastSaved: new Date('2025-05-10'),
  },
  {
    customerName: 'Felix Hoffmann',
    city: 'Bremen',
    lastSaved: new Date('2025-05-22'),
  },
  {
    customerName: 'Charlotte Meier',
    city: 'Frankfurt',
    lastSaved: new Date('2025-05-15'),
  },
  {
    customerName: 'Lukas Fischer',
    city: 'Munich',
    lastSaved: new Date('2025-05-12'),
  },
  {
    customerName: 'Hannah Weber',
    city: 'Stuttgart',
    lastSaved: new Date('2025-05-05'),
  },
  {
    customerName: 'Mia Hartmann',
    city: 'Cologne',
    lastSaved: new Date('2025-05-30'),
  },
  {
    customerName: 'Noah Schmidt',
    city: 'Düsseldorf',
    lastSaved: new Date('2025-05-08'),
  },
  {
    customerName: 'Lina Wagner',
    city: 'Bonn',
    lastSaved: new Date('2025-05-14'),
  },
  {
    customerName: 'Paul Neumann',
    city: 'Essen',
    lastSaved: new Date('2025-05-29'),
  },
  {
    customerName: 'Amelie Schulz',
    city: 'Aachen',
    lastSaved: new Date('2025-05-18'),
  },
  {
    customerName: 'Elias Becker',
    city: 'Dortmund',
    lastSaved: new Date('2025-05-11'),
  },
  {
    customerName: 'Clara Brandt',
    city: 'Freiburg',
    lastSaved: new Date('2025-05-23'),
  },
]
