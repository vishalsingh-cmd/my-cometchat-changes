export const StringKeys = [
  'default_seo_title',
  'default_seo_description',
  'back',
  'coming_soon',
  'blog.share',
  'blog.facebook',
  'blog.twitter',
  'blog.linkedin',
  'customer_stories',
  'related_stories',
  'directory.show_filters',
  'directory.hide_filters',
  'directory.reset_filters',
  'directory.input_placeholder',
  'directory.did_not_match_any',
  'directory.customer_stories',
  'directory.tutorials',
  'directory.blog_posts',
  'directory.please_try_again',
  'directory.clear_search',
  'directory.apply',
  'directory.filters',
  'a11y.author',
  'a11y.published',
  'a11y.role',
  'directory.no_results_found',
  'reviews.g2_text',
  'directory.filter.tutorial_type.label',
  'directory.filter.industries.label',
  'directory.filter.integration_tool.label',
  'directory.filter.products.label',
  'directory.filter.platforms.label',
  'directory.filter.features.label',
  'directory.filter.languages.label',
  'directory.filter.frameworks.label',
  'not_found.message',
  'not_found.cta.label'
] as const;

export type StringKey = (typeof StringKeys)[number];
export function isStringKey(key: string | StringKey): key is StringKey {
  return StringKeys.includes(key as StringKey);
}
