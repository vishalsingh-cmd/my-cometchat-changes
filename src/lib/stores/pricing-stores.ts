import type { PricingValues } from '$types/bloks';
import { writable } from 'svelte/store';

export const activePricingTab = writable<number>(0);
export const activateTable = writable<boolean>(true);

export const pricingValues = writable<PricingValues>({
  Build: { price: '$0', isBilledAnnually: true },
  Basic: { price: '$', isBilledAnnually: true },
  Advanced: { price: '$', isBilledAnnually: true },
  Enterprise: { price: '$', isBilledAnnually: true }
});

export const maus = writable<string[]>([]);

export const lastSelectedMAUIndex = writable<number>(1);

export const isBilledAnnualy = writable<boolean>(true);
