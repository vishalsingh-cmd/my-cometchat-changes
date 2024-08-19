import { cva } from 'class-variance-authority';

export const paragraph = cva([
  'mt-2 mb-6',
  'md:mt-3 md:mb-6',

  'font-medium',
  'text-gray-12',
  'leading-snug',
  'tracking-wide',

  '[&_a]:text-brand-9',
  '[&_a:hover]:text-brand-11',
  '[&_a:active]:text-brand-11',
  '[&_a]:transition-colors',
  '[&_a]:rounded',
  '[&_a]:outline-none',
  '[&_a]:outline-brand-7/0',
  '[&_a:focus-visible]:outline-1',
  '[&_a:focus-visible]:outline-brand-7/100',

  '[&_img]:my-6',
  '[&_img]:md:my-10',
  '[&_img]:rounded-[20px]'
]);
