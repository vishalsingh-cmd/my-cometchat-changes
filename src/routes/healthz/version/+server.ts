import { text } from '@sveltejs/kit';

export const GET = async () => {
  return text(process.env.npm_package_version || 'unknown version');
};
