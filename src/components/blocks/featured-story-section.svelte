<script lang="ts">
  import type { ISbStoryData } from '@storyblok/js';
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import { industries } from '$lib/stores/industries';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getImageAttributes, sanitizeSlug } from '$lib/storyblok';
  import { formatDate } from '$lib/utils/dates';

  import type {
    AuthorStoryblok,
    BlogPostStoryblok,
    CustomerStoryStoryblok,
    CustomerStoryblok,
    FeaturedStorySectionStoryblok,
    IndustryStoryblok,
    TutorialStoryblok
  } from '$types/bloks';

  import Button from '$components/buttons/button.svelte';

  export let block: FeaturedStorySectionStoryblok;

  const typeFeaturedStory = (
    story:
      | string
      | StoryblokStory<BlogPostStoryblok>
      | StoryblokStory<CustomerStoryStoryblok>
      | StoryblokStory<TutorialStoryblok>
  ) =>
    story as
      | StoryblokStory<BlogPostStoryblok>
      | StoryblokStory<CustomerStoryStoryblok>
      | StoryblokStory<TutorialStoryblok>;

  const getAuthor = (
    story:
      | StoryblokStory<BlogPostStoryblok>
      | StoryblokStory<CustomerStoryStoryblok>
      | StoryblokStory<TutorialStoryblok>
  ) => {
    if (story.content.component === 'customer-story') {
      return story.content.author_name;
    } else {
      const author = story.content.author as StoryblokStory<AuthorStoryblok>;
      return author.name;
    }
  };

  const getTag = (
    story:
      | StoryblokStory<BlogPostStoryblok>
      | StoryblokStory<CustomerStoryStoryblok>
      | StoryblokStory<TutorialStoryblok>
  ) => {
    if (story.content.component === 'customer-story' && story.content.customer) {
      const customer = story.content.customer as StoryblokStory<CustomerStoryblok>;
      const industry = $industries.find(
        (industry: ISbStoryData<IndustryStoryblok>) => customer.content.industry === industry.uuid
      ) as unknown as IndustryStoryblok;
      return industry?.name;
    } else {
      return story.tag_list[0] ?? '';
    }
  };
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme={block.theme}
    class="overflow-hidden bg-gray-1 text-gray-12"
  >
    {#if block.featured_story}
      {@const story = typeFeaturedStory(block.featured_story)}
      {@const content = story.content}
      {@const storyLink = sanitizeSlug(story.full_slug)}
      {@const author = getAuthor(story)}
      {@const date = formatDate(content.date)}
      {@const tag = getTag(story)}
      <div
        class="container mx-auto flex flex-col justify-between gap-8 px-container py-10 md:flex-row md:py-20"
      >
        <div class="flex max-w-[528px] flex-1 flex-col justify-between md:h-[526px] md:py-6">
          <div>
            <p class="mb-2 text-xl font-semibold leading-tighter text-brand-9 md:mb-4">{tag}</p>
            <p class="text-3xl font-semibold leading-tighter">{story.name}</p>
          </div>
          <div class="mt-8 text-xl font-medium leading-snug tracking-wide opacity-74 md:mt-0">
            {#if content.seo && content.seo.length > 0 && content.seo[0].description}
              <p class="mb-2 md:mb-4">
                {content.seo[0].description}
              </p>
            {/if}
            <p class="mb-6 flex flex-row items-center gap-[10px] md:mb-8">
              <span aria-label={`Author: ${author}`}>{author}</span>
              <span class="h-[5px] w-[5px] rounded-full bg-gray-12" />
              <span aria-label={`Published: ${date}`}>{date}</span>
            </p>
            <Button variant="secondary" as="a" href={storyLink}>{block.button_label}</Button>
          </div>
        </div>
        {#if content.cover}
          {@const { src, alt, width, height } = getImageAttributes(content.cover)}
          <div class="max-h-[526px] flex-1 overflow-hidden rounded-3xl md:max-w-[540px]">
            <img {src} {alt} {width} {height} class="h-full w-full object-cover" />
          </div>
        {/if}
      </div>
    {/if}
  </section>
{/if}
