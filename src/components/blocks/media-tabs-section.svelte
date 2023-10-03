<script lang="ts">
  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type {
    CustomerStoryStoryblok,
    CustomerStoryblok,
    MediaTabsSectionStoryblok
  } from '$types/bloks';
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import MediaTabs from '$components/media-tabs.svelte';
  import Button from '$components/buttons/button.svelte';
  import { isCmsStory, sanitizeSlug } from '$lib/storyblok';
  import { formatDateUSMedium } from '$lib/utils/dates';

  export let block: MediaTabsSectionStoryblok;

  const parsedTabs =
    block.tabs && block.tabs.length > 0
      ? block.tabs
          .map((tab) => {
            const customer: StoryblokStory<CustomerStoryblok> =
              tab.customer as StoryblokStory<CustomerStoryblok>;

            return {
              logo: customer.content.logo,
              image: tab.image
            };
          })
          .filter((tab) => {
            return tab !== null && tab !== undefined;
          })
      : undefined;

  const typeFeaturedStory = (story: string | StoryblokStory<CustomerStoryStoryblok>) =>
    story as StoryblokStory<CustomerStoryStoryblok>;

  let selectedTabIndex = 0;
  const onMediaTabSelect = (e: CustomEvent) => {
    selectedTabIndex = e.detail.i;
  };
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    class="relative mx-auto flex max-w-content overflow-hidden"
  >
    <div
      class={cn(
        'flex w-full flex-col-reverse items-start gap-8 px-container md:flex-row md:gap-20',
        block.tabs_side === 'left' && 'md:flex-row-reverse'
      )}
    >
      {#if block.highlighted_story && isCmsStory(block.highlighted_story)}
        {@const story = typeFeaturedStory(block.highlighted_story)}
        {@const content = story.content}
        {@const storyLink = sanitizeSlug(story.full_slug)}
        {@const author =
          story.content?.author && isCmsStory(story.content?.author)
            ? story.content?.author?.name
            : null}
        {@const date = story.created_at
          ? formatDateUSMedium(new Date(story?.created_at))
          : undefined}
        {@const tags = story.content?.industry}
        <div class="flex flex-col justify-between">
          <div class="mb-8 max-w-[528px] md:mb-16">
            <p class="mb-2 text-xl font-semibold leading-tighter text-brand-9 md:mb-4">
              {tags}
            </p>
            <p class="text-3xl font-semibold leading-tighter">{story?.name}</p>
          </div>
          <div
            class="mt-8 max-w-[528px] text-xl font-medium leading-snug tracking-wide opacity-74 md:mt-0"
          >
            {#if content?.seo && content?.seo.length > 0 && content?.seo[0].description}
              <p class="mb-3 md:mb-4">
                {content?.seo[0].description}
              </p>
            {/if}
            <p class="mb-6 flex flex-row items-center gap-[10px] md:mb-8">
              {#if author}
                <span aria-label={`Author: ${author}`}>{author}</span>
              {/if}
              {#if author && date}
                <span class="h-[5px] w-[5px] rounded-full bg-gray-12" />
              {/if}
              {#if date}
                <span aria-label={`Published: ${date}`}>{date}</span>
              {/if}
            </p>
            <Button variant="secondary" as="a" href={storyLink}>{block.button_label}</Button>
          </div>
        </div>
      {/if}
      {#if parsedTabs && parsedTabs.length > 0}
        <MediaTabs
          {selectedTabIndex}
          tabs={parsedTabs}
          class="h-[540px] w-full max-w-[704px]"
          on:mediaTabSelect={onMediaTabSelect}
        />
      {/if}
    </div>
  </section>
{/if}
