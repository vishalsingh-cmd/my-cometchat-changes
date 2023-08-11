<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import type { AuthorStoryblok, TutorialStoryblok } from '$types/bloks';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Hero from '$components/tutorial/hero.svelte';

  import RichTextRenderer from '$components/rich-text/rich-text-renderer.svelte';

  import RelatedStoriesSection from './related-stories-section.svelte';
  import Media from '$components/media.svelte';

  export let block: TutorialStoryblok;

  const typedAuthor = (author: string | StoryblokStory<AuthorStoryblok>) => {
    return author as StoryblokStory<AuthorStoryblok>;
  };
</script>

{#if block}
  <section use:storyblokEditable={block} data-theme="light" class="bg-gray-1 text-gray-12">
    <Hero {block} />

    <!-- Content -->
    {#if block.content.body && block.content.body.content}
      <div class="container relative mx-auto px-container pt-20">
        <div class="relative mx-auto w-full max-w-[640px]" id="content">
          {#each block.content.body.content as b}
            <RichTextRenderer block={b} />
          {/each}

          <!-- Author -->
          {#if block.content.author}
            {@const author = typedAuthor(block.content.author)}
            <div class="py-8 md:py-6">
              <div
                class="flex flex-col gap-3 rounded-2xl border border-gray-12/[0.04] bg-gray-12/[0.02] p-4 backdrop-blur-[20px] md:p-5"
                style="transform: translate3d(0, 0, 0);"
              >
                <div class="flex items-center gap-3">
                  {#if author.content.avatar}
                    <Media media={author.content.avatar} class="h-10 w-10 rounded-full" />
                  {/if}
                  <div
                    class="flex flex-col gap-[2px] text-md font-semibold leading-tight tracking-wide text-gray-12"
                  >
                    <p>{author.content.name}</p>
                    <p class="opacity-74">{author.content.role}, {author.content.company}</p>
                  </div>
                </div>
                <div class="text-lg-richtext font-medium leading-snug tracking-wide text-gray-12">
                  {author.content.description}
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </section>

  {#if block.content.related && block.content.related.length > 0}
    <RelatedStoriesSection block={block.content.related[0]} />
  {/if}
{/if}
