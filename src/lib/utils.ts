import type { Cookies } from '@sveltejs/kit/types/internal';
import { PREVIEW_COOKIE_KEY } from './constants';

import { browser } from '$app/environment';

import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
export const twMergeCustom = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: ['xxs'] }]
  }
});

const icons = ['yes', 'no', 'addon'];
export function cn(...inputs: ClassValue[]) {
  return twMergeCustom(clsx(inputs));
}

export function slugify(string: string) {
  return string
    .toLowerCase()
    .trim()
    .replace(/[^\w-]/g, '-')
    .replace(/-+/g, '-');
}

export const scrollLock = (condition: boolean) => {
  if (browser) {
    document.body.style.overflow = condition ? 'hidden' : 'auto';
  }
};

export const getLabelInfo = (label: string | undefined, color: 'orange' | 'brand') => {
  if (!label) {
    return undefined;
  }

  return {
    content: label,
    color: color
  };
};

export const getStoryVersion = (cookies: Cookies) =>
  cookies.get(PREVIEW_COOKIE_KEY) ? 'draft' : 'published';

const typeIcon = (icon: string | number) => {
  return icon as string;
};

export const getPricingIcon = (pricingType: 'included' | 'paid-add-on' | 'none') => {
  switch (pricingType) {
    case 'included':
      return { icon: typeIcon('check-verified-01'), color: 'text-brand-9' };
    case 'paid-add-on':
      return { icon: typeIcon('coins'), color: 'text-brand-11' };
    case 'none':
      return { icon: typeIcon('x-circle'), color: 'text-gray-5' };
    default:
      return { icon: typeIcon('x-circle'), color: 'text-gray-5' };
  }
};

export const getPricingIconV2 = (pricingType: 'yes' | 'addon' | 'no') => {
  switch (pricingType) {
    case 'yes':
      return { icon: typeIcon('check-verified-01'), color: 'text-brand-9' };
    case 'addon':
      return { icon: typeIcon('add-on-V2'), color: 'text-brand-9' };
    case 'no':
      return { icon: typeIcon('x-circle-V2'), color: 'text-gray-5' };
    default:
      return { icon: typeIcon('x-circle'), color: 'text-gray-5' };
  }
};

export function isValidIconType(text: string): text is 'yes' | 'addon' | 'no' {
  return icons.includes(text);
}
// truncate a string to a certain length
export const truncateString = (str: string, length: number) => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};
