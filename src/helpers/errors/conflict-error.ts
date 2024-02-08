export class ConflictError extends Error {
  constructor() {
    super("Resource existed!")
  }
}
