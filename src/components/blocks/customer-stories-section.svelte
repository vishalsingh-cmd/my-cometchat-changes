<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import type { CustomerStoriesSectionStoryblok, TestimonialStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import Title from '$components/title.svelte';
  import Testimonial from '$components/testimonial.svelte';

  import Orbit from '$components/customer-stories-section/assets/orbit.svg';
  import Comet from '$components/customer-stories-section/assets/comet.svg';

  type Reaction = {
    styles: string;
    emoji?: string;
  };

  const reactionEmojiStyle =
    'z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gray-3 light:bg-gray-1 text-xl drop-shadow-lg';

  const reactions: Reaction[] = [
    {
      styles: '-rotate-12 absolute right-4 -top-8 xl:-top-6',
      emoji: '🥳'
    },
    {
      styles: 'absolute bottom-72 right-[550px] hidden rotate-12 xl:flex',
      emoji: '☄️'
    },
    {
      styles: 'absolute -left-11 top-2 md:left-4 lg:top-9 xl:left-[500px] xl:top-20',
      emoji: '🤩'
    }
  ];

  const cardsRotations = ['-rotate-3 mt-5', 'mt-4', 'rotate-6 mt-4 xl:pr-40'];

  export let block: CustomerStoriesSectionStoryblok;
  const testimonials = block.testimonials as StoryblokStory<TestimonialStoryblok>[];
</script>

{#if block}
  <section
    data-theme="light"
    class="relative isolate mx-auto flex flex-col items-center justify-center overflow-hidden bg-gray-1 px-container xl:flex-row xl:pr-16"
  >
    {#if block.title?.[0]}
      <Title
        class="z-10 pt-12 sm:px-0 xl:w-full xl:flex-auto xl:pb-48 xl:pt-20"
        label={{ content: block.title?.[0].label, color: 'brand' }}
        description={block.title?.[0].description}
        title={block.title?.[0].title}
        buttons={block.title?.[0].links}
      />
    {/if}
    <div
      class="corner-gradient absolute -bottom-[600px] -left-40 h-[600px] w-[600px] blur-[150px]"
    />

    {#if testimonials}
      <div class="mt-10 flex w-full flex-col gap-4 pb-12 sm:max-w-xl md:max-w-3xl xl:flex-auto">
        <img
          alt=""
          src={Orbit}
          class="absolute hidden max-w-[670px] xl:bottom-28 xl:right-0 xl:inline"
        />

        <p class={cn(reactionEmojiStyle, reactions[1].styles)}>
          {reactions[1].emoji}
        </p>

        {#each testimonials as testimonial, i}
          <div class={cn('relative isolate w-full max-w-fit', i == 1 && 'self-end')}>
            {#if i !== 1}
              <p class={cn(reactionEmojiStyle, reactions[i].styles)}>{reactions[i].emoji}</p>
            {:else}
              <img
                alt=""
                src={Comet}
                class={'absolute -top-5 right-5 h-14 w-14 md:right-10 xl:-left-44 xl:top-44'}
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
  </section>
{/if}

<style>
  .corner-gradient {
    background-image: linear-gradient(290.03deg, #fcb8a8 12.63%, #b968a4 45.85%, #756cf7 81.21%);
  }
</style>
