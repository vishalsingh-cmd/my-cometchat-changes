<script lang="ts">
  import type { DoneForYouCardStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Button from '$components/buttons/button.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import { cn } from '$lib/utils';

  export let block: DoneForYouCardStoryblok;

  // Block structure:
  // block.title
  // block.description
  // block.cta_text
  // block.cta_link
  // block.background_image (optional)
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'p-5 md:p-6',
      'relative w-full overflow-hidden',
      'flex h-full w-full flex-col justify-between',
      'rounded-3xl border border-[#6853d6]/[0.4] bg-[#6853D60F]',
      'm-0 backdrop-blur-[32px] lg:ml-[32px]'
    )}
  >
    <div class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <!-- Background Glow Effect -->
      <div
        class="pointer-events-none absolute right-0 top-0 w-[400px] rounded-full bg-brand-9/20 opacity-30 blur-[120px]"
      />

      <!-- Content -->
      <div class="relative z-10 flex flex-col">
        <!-- Title -->
        {#if block.title}
          <h2
            class="mb-3 font-sans font-semibold leading-tighter text-white lg:text-xl lg:leading-[1.2]"
          >
            {block.title}
          </h2>
        {/if}

        <!-- Description -->
        {#if block.description}
          <p class="mb-10 text-[14px] leading-snug tracking-[0.07px] text-gray-11 opacity-80">
            {block.description}
          </p>
        {/if}

        <!-- CTA Button -->
        {#if block.cta_link}
          {@const { href } = getAnchorFromCmsLink(block.cta_link)}
          <div>
            <Button as="a" {href} variant="primary">
              {block.cta_text || 'Contact us'}
            </Button>
          </div>
        {/if}
      </div>
    </div>
    <!-- Bottom Gradient -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="304"
      height="189"
      viewBox="0 0 304 189"
      fill="none"
      class="absolute inset-x-0 bottom-0"
    >
      <g filter="url(#filter0_f_2746_2059)">
        <path
          d="M144.5 50.6477C118 45.6477 56 71.6477 0.5 58.6477H-13V256.148H289C288.333 246.981 286.6 164.948 285 150.148C283 131.648 229 109.648 209.5 104.648C190 99.6477 171 55.6477 144.5 50.6477Z"
          fill="#6953D5"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2746_2059"
          x="-63"
          y="0"
          width="402"
          height="306.148"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2746_2059" />
        </filter>
      </defs>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="294"
      height="143"
      viewBox="0 0 294 143"
      fill="none"
      class="absolute inset-x-0 bottom-0"
    >
      <g style="mix-blend-mode:plus-lighter" opacity="0.1" filter="url(#filter0_f_2746_2060)">
        <path
          d="M11.5 50C-13 50 -28 115 -28 115V155H227C262.5 115 235.645 117.481 183.5 108C167 105 163.5 72.5 143.5 72.5C111.5 72.5 114.5 115 82.5 115C72.6667 110.5 36 50 11.5 50Z"
          fill="#FAFAFF"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2746_2060"
          x="-78"
          y="0"
          width="371.145"
          height="205"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2746_2060" />
        </filter>
      </defs>
    </svg>

    <!-- top gradient -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="119"
      height="119"
      viewBox="0 0 119 119"
      fill="none"
      class="absolute right-0 top-0"
    >
      <g filter="url(#filter0_f_2746_2183)">
        <rect
          x="37.661"
          y="-51.8345"
          width="115.924"
          height="84.712"
          transform="rotate(15 37.661 -51.8345)"
          fill="url(#paint0_linear_2746_2183)"
          fill-opacity="0.2"
        />
      </g>
      <g filter="url(#filter1_f_2746_2183)">
        <rect
          x="60.7664"
          y="-45.6431"
          width="68.0822"
          height="120.347"
          transform="rotate(15 60.7664 -45.6431)"
          fill="url(#paint1_linear_2746_2183)"
          fill-opacity="0.3"
        />
      </g>
      <g filter="url(#filter2_f_2746_2183)">
        <rect
          x="83.7019"
          y="-39.4973"
          width="20.5936"
          height="145.51"
          transform="rotate(15 83.7019 -39.4973)"
          fill="url(#paint2_linear_2746_2183)"
          fill-opacity="0.9"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2746_2183"
          x="9.73593"
          y="-57.8345"
          width="145.899"
          height="123.829"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_2746_2183" />
        </filter>
        <filter
          id="filter1_f_2746_2183"
          x="23.6183"
          y="-51.6431"
          width="108.911"
          height="145.867"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_2746_2183" />
        </filter>
        <filter
          id="filter2_f_2746_2183"
          x="38.041"
          y="-47.4973"
          width="73.5527"
          height="161.882"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_2746_2183" />
        </filter>
        <linearGradient
          id="paint0_linear_2746_2183"
          x1="95.623"
          y1="-51.8345"
          x2="95.623"
          y2="32.8775"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6953D5" />
          <stop offset="1" stop-color="#6953D5" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2746_2183"
          x1="94.8076"
          y1="-45.6431"
          x2="94.8076"
          y2="74.7039"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6953D5" />
          <stop offset="1" stop-color="#6953D5" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2746_2183"
          x1="93.9986"
          y1="-39.4973"
          x2="93.9986"
          y2="106.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6953D5" />
          <stop offset="1" stop-color="#6953D5" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
{/if}
