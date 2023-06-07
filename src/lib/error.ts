export const isStatusError = (error: unknown): error is { status: number; message: string } => {
  return typeof error === 'object' && error !== null && 'status' in error && 'message' in error;
};
