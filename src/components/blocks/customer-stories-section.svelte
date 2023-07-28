<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import type { CustomerStoriesSectionStoryblok, TestimonialStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import Title from '$components/title.svelte';
  import Testimonial from '$components/testimonial.svelte';

  import Orbit from '$components/customer-stories-section/assets/orbit.svg';
  import Comet from '$components/customer-stories-section/assets/comet.svg';
  import CometEmoji from '$components/customer-stories-section/assets/comet-emoji.svg';
  import PartyFaceEmoji from '$components/customer-stories-section/assets/party-face-emoji.svg';
  import StarsFaceEmoji from '$components/customer-stories-section/assets/stars-face-emoji.svg';

  type Reaction = {
    styles: string;
    emoji?: string;
  };

  const reactionEmojiStyle =
    'z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gray-3 light:bg-gray-1 text-xl drop-shadow-lg';

  const reactions: Reaction[] = [
    {
      styles: '-rotate-12 absolute right-4 -top-12 xl:-top-11 xl:right-16',
      emoji: PartyFaceEmoji
    },
    {
      styles: 'absolute bottom-64 left-10 hidden rotate-12 xl:flex',
      emoji: CometEmoji
    },
    {
      styles:
        'absolute -left-11 top-0 md:-top-2 md:left-2 lg:-top-2 xl:left-96 xl:top-4 -rotate-12',
      emoji: StarsFaceEmoji
    }
  ];

  const cardsRotations = ['xl:-translate-x-10 -rotate-3', '', 'rotate-6 xl:-translate-x-32'];

  export let block: CustomerStoriesSectionStoryblok;
  const testimonials = block.testimonials as StoryblokStory<TestimonialStoryblok>[];
</script>

{#if block}
  <section data-theme="light" class="relative overflow-hidden bg-gray-1">
    <div
      class="container relative mx-auto flex w-full flex-col justify-between px-container xl:mt-20 xl:flex-row"
    >
      <div
        class="absolute -bottom-[450px] -left-48 h-[400px] w-[400px] -rotate-90 bg-gradient-to-r from-[#fcb8a8] via-[#b968a4] to-[#756cf7] blur-[200px] xl:-bottom-72 xl:-left-10"
        style="transform: translate3d(0, 0, 0);"
      />

      {#if block.title?.[0]}
        <Title
          class="pl-0 pr-0 pt-12 lg:p-12 xl:pt-0"
          label={{ content: block.title?.[0].label, color: 'brand' }}
          description={block.title?.[0].description}
          title={block.title?.[0].title}
          buttons={block.title?.[0].links}
        />
      {/if}

      {#if testimonials}
        <div class=" relative flex w-full flex-col gap-5 pb-12 xl:max-w-2xl">
          <img alt="" src={Orbit} class="lg absolute hidden xl:-right-6 xl:bottom-28 xl:inline" />

          <div class={cn(reactionEmojiStyle, reactions[1].styles)}>
            <img alt="" src={reactions[1].emoji} class="w-7" />
          </div>
          {#each testimonials as testimonial, i}
            <div class={cn('relative isolate mt-10 self-start xl:mt-0', i == 1 && 'self-end')}>
              {#if i !== 1}
                <div class={cn(reactionEmojiStyle, reactions[i].styles)}>
                  <img alt="" src={reactions[i].emoji} class="w-7" />
                </div>
              {:else}
                <img
                  alt=""
                  src={Comet}
                  class="absolute -top-9 right-5 h-14 w-14 md:right-20 xl:-left-48 xl:top-36"
                />
              {/if}

              <Testimonial
                flipHorizontal={i % 2 !== 0}
                block={testimonial.content}
                class={cn(cardsRotations[i])}
              />
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </section>
{/if}
