export default class ReadableError extends Error {
  userMessage: string

  constructor(
    message: string,
    userMessage: string,
    options?: { cause?: unknown },
  ) {
    super(message, options)
    this.name = 'ReadableError'
    this.userMessage = userMessage

    // Remove constructor frames from stack trace:
    // Readable error
    //     at construct (native)
    //     at apply (native)
    //     at _construct
    //     ...
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}
