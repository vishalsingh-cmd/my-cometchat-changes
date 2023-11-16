import { writable } from 'svelte/store';

const pricingTiersCurrentPrice = writable<number[]>([]);

export default pricingTiersCurrentPrice;
