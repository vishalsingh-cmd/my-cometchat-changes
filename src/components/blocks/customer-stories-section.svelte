<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import type { CustomerStoriesSectionStoryblok, TestimonialStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import Title from '$components/title.svelte';
  import Testimonial from '$components/testimonial.svelte';

  import Orbit from '$components/customer-stories-section/assets/orbit.svg';
  import Comet from '$components/customer-stories-section/assets/comet.svg';

  const firstTestimonialAssetPosition = cn('absolute', 'right-4 -top-8', 'xl:-top-6');
  const secondTestimonialAssetPosition = cn(
    'absolute',
    'right-5 -top-5',
    'md:right-10',
    'xl:top-44 xl:-left-40'
  );
  const thirdTestimonialAssetPosition = cn(
    'absolute',
    '-left-11 top-2',
    'md:left-4',
    'xl:left-[500px]  xl:top-9'
  );

  function getCardRotationValue(key: number) {
    switch (key) {
      case 0:
        return '-rotate-3 mt-5';
      case 1:
        return 'mt-4';
      case 2:
        return 'rotate-6 mt-4 xl:pr-40';
      default:
        return '';
    }
  }

  export let block: CustomerStoriesSectionStoryblok;
  const testimonials = block.testimonials as StoryblokStory<TestimonialStoryblok>[];
</script>

{#if block}
  <section
    data-theme="light"
    class="relative isolate flex flex-col items-center justify-center overflow-hidden bg-gray-1 pr-5 xl:flex-row xl:pr-16"
  >
    {#if block.title}
      <Title
        class="z-10 px-5 pt-12 sm:px-0 xl:w-full xl:flex-auto  xl:pb-48 xl:pl-16 xl:pt-20"
        label={{ content: block.title[0].label, color: 'brand' }}
        description={block.title[0].description}
        title={block.title[0].title}
        buttons={block.title[0].links
          ? block.title[0].links.map(({ link, label }) => {
              return { link: link?.url, label };
            })
          : []}
      />
    {/if}
    <div
      class="absolute -bottom-[600px] -left-40 h-[600px] w-[600px] bg-custumer-stories-section-gradient blur-[150px]"
    />

    {#if testimonials}
      <div
        class="mt-10 flex w-full flex-col gap-4 px-5 pb-12 sm:max-w-xl md:max-w-3xl xl:flex-auto"
      >
        <img
          alt=""
          src={Orbit}
          class="absolute hidden max-w-[670px] xl:bottom-28 xl:right-0 xl:inline"
        />
        <div
          class=" absolute bottom-72 right-[550px] z-20 hidden h-14 w-14 rotate-12 items-center justify-center rounded-full bg-white drop-shadow-lg xl:flex"
        >
          <p class="text-xl">☄️</p>
        </div>

        {#each testimonials as testimonial, i}
          <div class={cn('relative isolate w-full max-w-fit', i == 1 && 'self-end')}>
            {#if i == 1}
              <img alt="" src={Comet} class={cn('h-14 w-14', secondTestimonialAssetPosition)} />
            {/if}
            {#if i == 0}
              <p
                class={cn(
                  'z-20 flex h-14 w-14 -rotate-12 items-center justify-center rounded-full bg-white text-xl drop-shadow-lg',
                  firstTestimonialAssetPosition
                )}
              >
                🥳
              </p>
            {/if}

            {#if i == 2}
              <p
                class={cn(
                  ' z-20 flex h-14 w-14 -rotate-6 items-center justify-center rounded-full bg-white text-xl drop-shadow-lg',
                  thirdTestimonialAssetPosition
                )}
              >
                🤩
              </p>
            {/if}
            <Testimonial block={testimonial.content} class={cn(getCardRotationValue(i))} />
          </div>
        {/each}
      </div>
    {/if}
  </section>
{/if}
