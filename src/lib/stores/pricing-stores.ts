import { writable } from 'svelte/store';

export const activePricingTab = writable<number>(0);
export const activateTable = writable<boolean>(true);
