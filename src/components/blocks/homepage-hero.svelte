<script lang="ts">
  import Button from '$components/buttons/button.svelte';
  import Stars from '$components/stars.svelte';

  import Noise from '$components/homepage/hero/noise.svg';
  import OrbitMedium from '$components/homepage/hero/assets/orbit-medium.svg';
  import OrbitThin from '$components/homepage/hero/assets/orbit-thin.svg';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink, getImageAttributes } from '$lib/storyblok';

  import type { HomepageHeroStoryblok } from '$types/bloks';

  export let block: HomepageHeroStoryblok;
</script>

{#if block}
  <section
    data-theme="dark"
    use:storyblokEditable={block}
    class="relative overflow-hidden bg-brand-1 px-5 pb-20 pt-24 md:px-20 md:pt-[188px]"
  >
    <div class="absolute left-[calc(50vw-700px)] top-[80px] hidden md:block">
      <img src={OrbitMedium} alt="" />
    </div>
    <div class="relative left-1/2 top-[-200px] w-full max-w-[1389px] translate-x-[-50%] transform">
      <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-orange-8', 'bg-brand-7']} />
    </div>
    <div class="relative isolate z-10 mx-auto max-w-[528px]">
      {#if block.title && block.title.content && block.title.content[0].content}
        <h1
          class="text-4xl font-semibold leading-tighter text-gray-12 text-opacity-[.54] md:text-[60px]"
        >
          {#each block.title.content[0].content as part}
            {#if part.marks && part.marks.some((mark) => mark.type === 'italic')}
              <span class="text-gray-12 text-opacity-100">{part.text}</span>
            {:else if part.text === ' '}
              <br />
            {:else}
              {part.text}
            {/if}
          {/each}
        </h1>
      {/if}
      {#if block.links.length > 0}
        <div class="mt-6 flex gap-3 md:mt-10">
          {#each block.links as link}
            {@const { href, rel, target } = getAnchorFromCmsLink(link.link)}
            <Button variant={link.variant} as="a" {href} {rel} {target}>
              {link.label}
            </Button>
          {/each}
        </div>
      {/if}
    </div>
    <div class="relative h-full xl:h-[762px]">
      <img class="absolute left-0 right-0 top-[-300px]" src={Noise} alt="" />
      <div
        class="absolute left-[calc(50vw-400px)] top-[0px] w-full max-w-[1389px] rotate-[30deg] transform"
      >
        <Stars amount={40} backgroundColours={['bg-white']} />
      </div>
      <div class="absolute left-1/2 h-full w-full -scale-50 md:-scale-75 lg:left-auto lg:scale-100">
        <div
          class="absolute left-[calc(50%-371.43px)] top-[167.11px] h-[301px] w-[903px] origin-center rotate-[-19.77deg] transform rounded-1/2 bg-[#944E6E]/80 blur-[75px]"
        />

        <div
          class="ellipse2 absolute left-[calc(50%-456.97px)] top-[18.63px] h-[371.2px] w-[1435.66px] origin-center rotate-[-19.97deg] transform rounded-1/2 blur-[75px]"
        />
        <div
          class="ellipse3 absolute right-[calc(50%-612.54px)] top-[35px] h-[371.2px] w-[1258.4px] origin-center rotate-[-13.96deg] transform rounded-1/2 blur-[75px]"
        />
        <div
          class="ellipse4 absolute top-[237.27px] h-[315.1px] w-[1245.75px] origin-center rotate-[-20.77deg] transform rounded-1/2 mix-blend-screen blur-[75px]"
        />
        <div
          class="ellipse5 absolute left-1/2 top-0 h-[476.94px] w-[844.1px] origin-center rotate-[-20.77deg] transform rounded-1/2 bg-[#172365] mix-blend-soft-light blur-[100px]"
        />
        <div
          class="ellipse6 absolute left-[calc(50%-433.8px)] top-[-80.32px] h-[390.84px] w-[1274.01px] origin-center rotate-[-20.77deg] transform rounded-1/2 bg-[#1D1765] opacity-30 mix-blend-normal blur-[100px]"
        />
      </div>
      <div class="absolute left-1/2 h-[295.93px] w-[1378.41px] translate-x-[-50%] transform">
        <img src={OrbitThin} alt="" />
      </div>
      <div class="absolute right-[calc(50vw-430px)] top-[180px]">
        <div
          class="absolute h-[91px] w-[91px] rounded-full bg-[#FFC1A1] shadow-[inset_31.9123px_15.9561px_79.7807px_0_rgba(252,255,215,0.79),inset_-31.9123px_-31.9123px_95.7368px_#CB798D]"
        />
        <div
          class="absolute left-[-11px] top-[20px] h-[87px] w-[87px] rounded-full bg-gradient-to-l from-[#E185C6] to-[#807CE0] blur-[25px]"
        />
      </div>
      {#if block.illustration}
        {@const { src, alt, width, height } = getImageAttributes(block.illustration)}
        <img class="isolate z-10 mx-auto" {src} {alt} {width} {height} />
      {/if}
    </div>
  </section>
{/if}

<style lang="postcss">
  .ellipse2 {
    background: radial-gradient(
      45.9% 125.25% at 49.44% 54.05%,
      rgba(232, 200, 254, 0.8) 0%,
      rgba(232, 200, 254, 0) 76.91%
    );
  }

  .ellipse3 {
    background: linear-gradient(
      285.43deg,
      rgba(148, 78, 110, 0.2) 37.49%,
      rgba(109, 53, 0, 0.12) 85.53%
    );
  }

  .ellipse4 {
    background: linear-gradient(
      285.43deg,
      rgba(148, 78, 110, 0.4) 37.49%,
      rgba(109, 53, 0, 0.24) 85.53%
    );
  }
</style>
