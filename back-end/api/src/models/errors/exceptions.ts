class ValidationException extends Error {
  public status: number
  public message: string
  constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.message = message
  }
}

class DatabaseError extends Error { 
  public status: number
  public message: string
  constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.message = message
  }
}

export { ValidationException, DatabaseError }