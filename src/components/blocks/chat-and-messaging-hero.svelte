<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { ChatAndMessagingHeroStoryblok } from '$types/bloks';

  import Blurs from '$components/chat-and-messaging/hero/blurs.svelte';
  import Ellipse from '$components/chat-and-messaging/hero/assets/ellipse.svg';
  import Noise from '$components/chat-and-messaging/hero/assets/noise.svg';

  import Stars from '$components/stars.svelte';

  import HeroHeader from './hero-header.svelte';
  import Background from '$components/chat-and-messaging/hero/background.svelte';
  import Media from '$components/media.svelte';

  export let block: ChatAndMessagingHeroStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} class="relative overflow-hidden px-container">
    <div
      class="container relative mx-auto overflow-x-visible pb-[374px] pt-[100px] md:pb-[700px] md:pt-[148px]"
    >
      <div
        class="absolute bottom-0 left-0 h-[1079px] w-[1440px] md:bottom-[200px] lg:bottom-auto lg:top-0 lg:h-full lg:w-full"
      >
        <img src={Noise} alt="" />
      </div>
      <Blurs />
      <div class="absolute right-0 top-0 w-[600px]">
        <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-gray-8', 'bg-brand-7']} />
      </div>
      <img src={Ellipse} alt="" class="absolute left-[calc(50%+300px)] top-[39px]" />
      {#if block.illustration}
        <Media
          imageTransformOptions={{ size: [1500, 0] }}
          media={block.illustration}
          class="absolute left-[calc(50%-400px)] top-[400px] max-w-[600px] md:left-[calc(50%-900px)] md:top-[320px] md:max-w-[1500px]"
        />
      {/if}
      <div class="isolate z-10 lg:ml-[112px]">
        <HeroHeader block={block.header[0]} variant="secondary" />
      </div>
    </div>
    <Background />
  </section>
{/if}
