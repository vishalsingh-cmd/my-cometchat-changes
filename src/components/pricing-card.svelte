<script lang="ts">
  import type { ButtonLinkStoryblok, TextStoryblok } from '$types/bloks';
  import Button from './buttons/button.svelte';
  import Icon from './icon/icon.svelte';

  export let name: string;
  export let price: number;
  export let highlights: TextStoryblok[];
  export let cta: ButtonLinkStoryblok;
</script>

<div class="w-full max-w-[304px] rounded-3xl border border-brand-12/2 bg-brand-12/[0.03] p-6">
  <div class="flex flex-col gap-3 text-gray-12">
    <p class="text-xl/tighter font-semibold opacity-74">{name}</p>
    <p class="text-2xl/tighter font-semibold">{price}</p>
  </div>

  <div class="mt-16 flex flex-col gap-3">
    <p class="text-lg/tight font-semibold">Highlights</p>
    <div class="flex flex-col gap-2">
      {#each highlights as highlight}
        <div class="flex items-center gap-2">
          <Icon icon="star-04" class="h-3.5 w-3.5 text-brand-9" />
          <p class="text-lg/snug font-medium tracking-wide">{highlight.value}</p>
        </div>
      {/each}
    </div>
  </div>

  <Button variant={cta.variant} href={cta.link} as="a" class="mt-6 self-start">{cta.label}</Button>
</div>
