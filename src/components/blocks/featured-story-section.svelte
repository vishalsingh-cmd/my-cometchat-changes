<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { sanitizeSlug } from '$lib/storyblok';
  import { formatDate } from '$lib/utils/dates';

  import type {
    AuthorStoryblok,
    BlogPostStoryblok,
    CustomerStoryStoryblok,
    FeaturedStorySectionStoryblok,
    TutorialStoryblok
  } from '$types/bloks';

  import Button from '$components/buttons/button.svelte';
  import Media from '$components/media.svelte';

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
    let tags = [] as string[];

    if (story.content.component === 'customer-story' && story.content.customer) {
      tags = [story.content.industry as string];
    } else if (story.content.component === 'blog-post') {
      tags = [story.content.category];
    } else if (story.content.component === 'tutorial') {
      tags = [story.content.tutorial_type];
    }

    const parsedTags = tags.join(', ');

    return parsedTags;
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
      {@const tags = getTag(story)}
      <div
        class="container mx-auto flex flex-col justify-between gap-8 px-container py-10 md:flex-row md:items-center md:py-20"
      >
        <div class="flex flex-1 flex-col justify-between md:py-6">
          <div class="mb-8 max-w-[528px] md:mb-16">
            <p class="mb-2 text-xl font-semibold leading-tighter text-brand-9 md:mb-4">
              {tags}
            </p>
            <p class="text-3xl font-semibold leading-tighter">{story.name}</p>
          </div>
          <div
            class="mt-8 max-w-[528px] text-xl font-medium leading-snug tracking-wide opacity-74 md:mt-0"
          >
            {#if content.seo && content.seo.length > 0 && content.seo[0].description}
              <p class="mb-3 md:mb-4">
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
          <div
            class="relative h-[329px] self-stretch overflow-hidden rounded-3xl md:h-auto md:flex-1"
          >
            <Media
              imageTransformOptions={{ size: [0, 900] }}
              media={content.cover}
              class="absolute h-full w-full object-cover"
            />
          </div>
        {/if}
      </div>
    {/if}
  </section>
{/if}
