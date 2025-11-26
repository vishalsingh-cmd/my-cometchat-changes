<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { CenterStaticBannerV02Storyblok } from '$types/bloks';
  import { cn } from '$lib/utils';
  import Button from './buttons/button.svelte';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  export let block: CenterStaticBannerV02Storyblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'relative flex h-auto w-full gap-3 overflow-clip rounded-3xl bg-gradient-to-r p-8 text-white shadow-md',
      'flex-col ', // Flex direction is column on responsive screens
      'sm:flex-row lg:flex-row', // Flex direction is row on large screens
      'border border-gray-1/20'
    )}
  >
    <h3 class="w-full text-start text-xl font-semibold leading-tight">{block.title}</h3>
    {#if block.cta_slot}
      <div class="ml-8 flex gap-3">
        {#each block.cta_slot as button}
          {@const { href, target, rel } = getAnchorFromCmsLink(button.link)}
          <Button variant={'primary'} as="a" {href} {target} {rel}>
            {button.label}
          </Button>
        {/each}
      </div>
    {/if}

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="640"
      height="100"
      viewBox="0 0 640 100"
      class="pointer-events-none absolute bottom-0 left-0"
      fill="none"
    >
      <g opacity="0.6" filter="url(#filter0_f_3037_20126)">
        <path
          d="M301.017 65.3466C247.232 59.3481 139.661 17.847 -15.3669 55.8466V114.347L650.938 114.347C650.938 114.347 613.076 91.1492 591.458 83.3473C569.84 75.5453 523.119 59.3472 459.209 59.3472C413.65 59.3472 339.307 69.617 301.017 65.3466Z"
          fill="#6953D5"
          fill-opacity="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_3037_20126"
          x="-55.3669"
          y="0"
          width="746.305"
          height="154.348"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_3037_20126" />
        </filter>
      </defs>
    </svg>
  </div>
{/if}
