import { browser } from '$app/environment';
import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

export const twMergeCustom = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: ['xxs'] }]
  }
});

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
