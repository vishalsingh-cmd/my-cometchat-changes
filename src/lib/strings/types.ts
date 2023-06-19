export const StringKeys = ['seo_title', 'seo_description', 'back'] as const;

export type StringKey = (typeof StringKeys)[number];
export function isStringKey(key: string | StringKey): key is StringKey {
  return StringKeys.includes(key as StringKey);
}
