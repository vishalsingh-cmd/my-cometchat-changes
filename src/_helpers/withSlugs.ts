export const isTemplatesPage = (path: string) => {
  const isTemplatesPage = path.split('/').find((slug) => slug === 'templates');
  return isTemplatesPage !== undefined;
};
