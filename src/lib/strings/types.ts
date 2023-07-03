export const StringKeys = [
  'default_seo_title',
  'default_seo_description',
  'back',
  'coming_soon'
] as const;

export type StringKey = (typeof StringKeys)[number];
export function isStringKey(key: string | StringKey): key is StringKey {
  return StringKeys.includes(key as StringKey);
}
