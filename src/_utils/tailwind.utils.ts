import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { createTV } from 'tailwind-variants';
import { tailwindMergeConfig } from '../_configs/tailwindMerge.config';

const twMerge = extendTailwindMerge(tailwindMergeConfig);
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const tv = createTV({
  twMergeConfig: tailwindMergeConfig
});
