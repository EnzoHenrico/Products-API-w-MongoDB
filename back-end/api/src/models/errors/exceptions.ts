class DatabaseError extends Error { 
  public name: string;
  public message: string;
  constructor(message: string) {
    super(message)
    this.name = "Database Error"
    this.message = message;
  }
}

export { DatabaseError }