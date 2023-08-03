import type { ISbStoryData } from '@storyblok/js';
import { writable } from 'svelte/store';

import type { IndustryStoryblok } from '$types/bloks';

export const industries = writable([] as ISbStoryData<IndustryStoryblok>[]);
