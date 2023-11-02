export function removeMultipleSlashes(str: string) {
  return str.replace(/\/{2,}/gim, '/');
}

export function removeTrailingSlash(str: string) {
  return str.replace(/\/+$/gim, '');
}

export function removeLeadingSlash(str: string) {
  return str.replace(/^\/+/gim, '');
}
