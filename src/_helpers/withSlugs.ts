export const isTemplatesPage = (path: string) => {
  const isTemplatesPage = path.split('/').find((slug) => slug === 'templates');
  return isTemplatesPage !== undefined;
};

export const isTemplatesInnerPage = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const templateSubpageRegex = /^\/pages\/templates\/(?!$)[^/]+\/?.*$/;
  return templateSubpageRegex.test(normalizedPath);
};
