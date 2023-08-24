<script lang="ts">
  import Button from '$components/buttons/button.svelte';
  import Stars from '$components/stars.svelte';
  import Media from '$components/media.svelte';
  import TypewriterText from './typewriter-text.svelte';

  import Noise from '$components/homepage/hero/noise.svg';
  import OrbitMedium from '$components/homepage/hero/assets/orbit-medium.svg';
  import OrbitThin from '$components/homepage/hero/assets/orbit-thin.svg';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  import type { HomepageHeroStoryblok } from '$types/bloks';

  export let block: HomepageHeroStoryblok;
</script>

{#if block}
  <section
    data-theme="dark"
    use:storyblokEditable={block}
    class="lgd:pb-0 relative overflow-hidden bg-gray-1 px-5 pb-[50px] pt-24 md:px-20 md:pt-[188px]"
  >
    <div class="absolute left-[calc(50vw-1165px)] top-[80px] hidden md:block">
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

          {#each block.title.content?.filter((cont) => cont.type === 'blok') || [] as blockGroup}
            {#each blockGroup.attrs.body || [] as block}
              {#if block.component === 'typewriter-text'}
                <TypewriterText {block} />
              {/if}
            {/each}
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
          style="transform: translate3d(0, 0, 0);"
        />

        <div
          class="ellipse2 absolute left-[calc(50%-456.97px)] top-[18.63px] h-[371.2px] w-[1435.66px] origin-center rotate-[-19.97deg] transform rounded-1/2 blur-[75px]"
          style="transform: translate3d(0, 0, 0);"
        />
        <div
          class="ellipse3 absolute right-[calc(50%-612.54px)] top-[35px] h-[371.2px] w-[1258.4px] origin-center rotate-[-13.96deg] transform rounded-1/2 blur-[75px]"
          style="transform: translate3d(0, 0, 0);"
        />
        <div
          class="ellipse4 absolute top-[237.27px] h-[315.1px] w-[1245.75px] origin-center rotate-[-20.77deg] transform rounded-1/2 mix-blend-screen blur-[75px]"
          style="transform: translate3d(0, 0, 0);"
        />
        <div
          class="ellipse5 absolute left-1/2 top-0 h-[476.94px] w-[844.1px] origin-center rotate-[-20.77deg] transform rounded-1/2 bg-[#172365] mix-blend-soft-light blur-[100px]"
          style="transform: translate3d(0, 0, 0);"
        />
        <div
          class="ellipse6 absolute left-[calc(50%-433.8px)] top-[-80.32px] h-[390.84px] w-[1274.01px] origin-center rotate-[-20.77deg] transform rounded-1/2 bg-[#1D1765] opacity-30 mix-blend-normal blur-[100px]"
          style="transform: translate3d(0, 0, 0);"
        />
      </div>
      <div
        class="absolute -top-[100px] left-1/2 h-[295.93px] w-[1378.41px] translate-x-[-50%] transform"
      >
        <img src={OrbitThin} alt="" />
      </div>
      {#if block.illustration}
        <Media
          media={block.illustration}
          class="isolate z-10 w-full min-w-[454px] max-w-[796px] -translate-x-[10%] translate-y-[50px] sm:mx-auto sm:-translate-x-0 md:translate-y-0"
        />
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
