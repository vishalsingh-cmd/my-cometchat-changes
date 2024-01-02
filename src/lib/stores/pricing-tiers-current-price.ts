import { writable } from 'svelte/store';

const pricingTiersCurrentPrice = writable<(string | number)[]>([]);

export default pricingTiersCurrentPrice;
