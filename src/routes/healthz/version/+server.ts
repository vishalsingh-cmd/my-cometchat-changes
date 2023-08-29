import { text } from '@sveltejs/kit';
import { version } from '../../../../package.json';

export const GET = async () => {
  return text(version || process.env.npm_package_version || 'unknown version');
};
