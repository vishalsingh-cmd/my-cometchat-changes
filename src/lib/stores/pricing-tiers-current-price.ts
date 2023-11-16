import { writable } from 'svelte/store';

const pricingTiersCurrentPrice = writable([] as number[]);

export default pricingTiersCurrentPrice;
