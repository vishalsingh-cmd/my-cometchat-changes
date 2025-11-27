<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { SideStaticBannerStoryblok } from '$types/bloks';
  import { cn } from '$lib/utils';
  import Button from './buttons/button.svelte';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  export let block: SideStaticBannerStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'wrap sticky top-[80px] mb-44 hidden h-[420px] w-full max-w-[500px] flex-col gap-[32px] overflow-clip rounded-3xl border border-gray-1/20  p-5 text-black shadow-sm lg:block'
    )}
    style="box-shadow: 0 4px 20px 0 rgba(20, 19, 29, 0.06); backdrop-filter: blur(20px);"
  >
    <div class="flex flex-col gap-4">
      <h3 class="text-[28px] font-semibold leading-tight text-gray-1">{block.title}</h3>
      <p class="text-lg font-normal leading-snug tracking-[0.09px] text-[#FAFAFF] opacity-75">
        {block.description}
      </p>
    </div>

    {#if block.cta_slot}
      <div class=" mt-[32px] flex gap-3">
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
      width="125"
      height="149"
      viewBox="0 0 125 149"
      fill="none"
      class="absolute right-0 top-0"
    >
      <g filter="url(#filter0_f_2925_30281)">
        <rect
          x="37.661"
          y="-21.8345"
          width="115.924"
          height="84.712"
          transform="rotate(15 37.661 -21.8345)"
          fill="url(#paint0_linear_2925_30281)"
          fill-opacity="0.2"
        />
      </g>
      <g filter="url(#filter1_f_2925_30281)">
        <rect
          x="60.7664"
          y="-15.6431"
          width="68.0822"
          height="120.347"
          transform="rotate(15 60.7664 -15.6431)"
          fill="url(#paint1_linear_2925_30281)"
          fill-opacity="0.3"
        />
      </g>
      <g filter="url(#filter2_f_2925_30281)">
        <rect
          x="83.702"
          y="-9.49707"
          width="20.5936"
          height="145.51"
          transform="rotate(15 83.702 -9.49707)"
          fill="url(#paint2_linear_2925_30281)"
          fill-opacity="0.9"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2925_30281"
          x="9.73569"
          y="-27.8345"
          width="145.899"
          height="123.829"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_2925_30281" />
        </filter>
        <filter
          id="filter1_f_2925_30281"
          x="23.6185"
          y="-21.6431"
          width="108.91"
          height="145.867"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_2925_30281" />
        </filter>
        <filter
          id="filter2_f_2925_30281"
          x="38.0413"
          y="-17.4971"
          width="73.5527"
          height="161.882"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_2925_30281" />
        </filter>
        <linearGradient
          id="paint0_linear_2925_30281"
          x1="95.623"
          y1="-21.8345"
          x2="95.623"
          y2="62.8775"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6953D5" />
          <stop offset="1" stop-color="#6953D5" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2925_30281"
          x1="94.8076"
          y1="-15.6431"
          x2="94.8076"
          y2="104.704"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6953D5" />
          <stop offset="1" stop-color="#6953D5" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2925_30281"
          x1="93.9988"
          y1="-9.49707"
          x2="93.9988"
          y2="136.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6953D5" />
          <stop offset="1" stop-color="#6953D5" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 304 196"
      fill="none"
      class="pointer-events-none absolute inset-x-0 bottom-0"
    >
      <g filter="url(#filter0_f_2925_30276)">
        <path
          d="M138 134C81 151.5 9 122 -6.5 96V197.5L319.5 190V122C319.5 103.5 304 60 256 60C199 60 199 115.272 138 134Z"
          fill="#6953D5"
          fill-opacity="0.7"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2925_30276"
          x="-66.5"
          y="0"
          width="446"
          height="257.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_2925_30276" />
        </filter>
      </defs>
    </svg>

    <!-- {#if block.image}
      <img src={block.image} alt="Comet Chat" class="absolute -right-12 top-[200px] w-44" />
    {/if} -->
  </div>
{/if}
