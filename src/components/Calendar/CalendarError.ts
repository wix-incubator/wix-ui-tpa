export class CalendarError extends Error {
  constructor(message) {
    super(`[Calendar TPA Component] ${message}`);
  }
}
