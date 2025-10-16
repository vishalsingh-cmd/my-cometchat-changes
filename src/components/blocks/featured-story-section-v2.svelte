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

  // import Button from '$components/buttons/button.svelte';
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
    if (story.content?.component === 'customer-story') {
      return story.content?.author_name;
    } else {
      const author = story.content?.author as StoryblokStory<AuthorStoryblok>;
      return author?.name;
    }
  };

  const getTag = (
    story:
      | StoryblokStory<BlogPostStoryblok>
      | StoryblokStory<CustomerStoryStoryblok>
      | StoryblokStory<TutorialStoryblok>
  ) => {
    let tags = [] as string[];

    if (story.content?.component === 'customer-story' && story.content?.customer) {
      tags = [story.content?.industry as string];
    } else if (story.content?.component === 'blog-post') {
      tags = [story.content?.category];
    } else if (story.content?.component === 'tutorial') {
      tags = [story.content?.tutorial_type];
    }

    const parsedTags = tags.join(', ');

    return parsedTags;
  };
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme={block.theme}
    class="group relative z-20 overflow-hidden bg-transparent text-gray-12"
  >
    {#if block.featured_story}
      {@const story = typeFeaturedStory(block.featured_story)}
      {@const content = story.content}
      {@const storyLink = sanitizeSlug(story.full_slug)}
      {@const author = getAuthor(story)}
      <!-- {console.log('author', author)} -->
      {@const date = story.created_at ? formatDate(new Date(story?.created_at)) : undefined}
      {@const imageURL = story.content?.author?.content?.avatar?.filename
        ? story.content.author.content.avatar.filename
        : undefined}
      <!-- {console.log('imageURL', imageURL)} -->
      {@const tags = getTag(story)}
      <div
        class="container mx-auto flex flex-col justify-between gap-[30px] md:flex-row md:items-center"
      >
        <!-- Content -->
        <div class="flex flex-1 flex-col justify-between gap-[32px]">
          <!-- Headings -->
          <div class="flex max-w-[528px] flex-col items-start gap-4">
            <p class="rounded-[10px] border-[1.4px] border-[#604BC5]/50 px-[10px] pb-2 pt-[6px]">
              <span
                class="font-sans text-[16px] font-[640] leading-tight tracking-[0.08px] text-brand-9"
              >
                {tags}</span
              >
            </p>
            <p class="text-2xl font-semibold leading-tighter">{story?.name}</p>
          </div>

          <!-- Description and Author name -->
          <div
            class="flex max-w-[528px] flex-col gap-4 text-lg font-medium leading-snug tracking-[0.09px] opacity-74"
          >
            {#if content?.seo && content?.seo.length > 0 && content?.seo[0].description}
              <p class="">
                {content?.seo[0].description}
              </p>
            {/if}
            <p class="flex items-center gap-[10px]">
              {#if imageURL}
                <img src={imageURL} alt="" class=" h-8 rounded-full object-cover" />
              {/if}
              {#if author}
                <span aria-label={`Author: ${author}`}>{author}</span>
              {/if}
              {#if date}
                <span class="h-[5px] w-[5px] rounded-full bg-white" />
                <span aria-label={`Published: ${date}`}>{date}</span>
              {/if}
            </p>
            <!-- <Button variant="secondary" as="a" href={storyLink}>{block.button_label}</Button> -->
          </div>
        </div>

        <!-- Image -->
        {#if content?.cover}
          <div
            class="relative h-[407px] w-[651px] self-stretch overflow-hidden rounded-2xl border border-white/10"
          >
            <Media media={content?.cover} class="h-full w-full object-cover" />
          </div>
        {/if}
      </div>
    {/if}
  </section>
{/if}
