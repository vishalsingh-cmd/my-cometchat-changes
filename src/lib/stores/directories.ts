import type { SbBlokData } from '@storyblok/js';
import { writable } from 'svelte/store';

export const directories = writable([] as SbBlokData[]);
