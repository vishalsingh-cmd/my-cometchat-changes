<script lang="ts">
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import type {
    BlogPostStoryblok,
    CustomerStoryblok,
    TopnavResourcesPanelStoryblok
  } from '$types/bloks';
  import type { ISbStoryData } from '@storyblok/js';
  import TopnavItem, { getItemAsset } from './topnav-item.svelte';
  import TopnavThumb from './topnav-thumb.svelte';
  import { cn } from '$lib/utils';

  export let data: TopnavResourcesPanelStoryblok;
  export let blogPosts: ISbStoryData<BlogPostStoryblok>[];
  export let customerStories: ISbStoryData<
    BlogPostStoryblok & {
      customer: ISbStoryData<CustomerStoryblok>;
    }
  >[];
</script>

<div class="container mx-auto px-container xl:flex">
  <div class="items-stretch md:flex">
    <div class="flex-1 p-8 px-0 md:pr-12 lg:p-12">
      <h3 class="mb-8 text-lg opacity-54">{data.customer_stories_title}</h3>
      <div class="flex flex-col items-start gap-8">
        {#each customerStories as story}
          <TopnavThumb
            image={story.content.cover}
            href="/"
            title={story.name}
            publishedAt={story.published_at}
            publishedBy={story.content.customer?.name}
          />
        {/each}
        {#if data.customer_stories_link?.[0]}
          {@const link = data.customer_stories_link[0]}
          {@const { href, target, rel } = getAnchorFromCmsLink(link.link)}
          <GhostButton as="a" {href} {target} {rel} variant="highlighted" label={link.label} />
        {/if}
      </div>
    </div>
    <div class="hidden w-px bg-divider-gradient-vertical md:block" />
    <div class="h-px w-full bg-divider-gradient md:hidden" />
    <div class="flex-1 p-8 px-0 md:pl-12 lg:p-12">
      <h3 class="mb-8 text-lg opacity-54">{data.blog_title}</h3>
      <div class="flex flex-col items-start gap-8">
        {#each blogPosts as story}
          <TopnavThumb
            image={story.content.cover}
            href="/"
            title={story.name}
            publishedAt={story.published_at}
            publishedBy={story.content.author}
          />
        {/each}
        {#if data.blog_link?.[0]}
          {@const link = data.blog_link[0]}
          {@const { href, target, rel } = getAnchorFromCmsLink(link.link)}
          <GhostButton as="a" {href} {target} {rel} variant="highlighted" label={link.label} />
        {/if}
      </div>
    </div>
  </div>
  <div class="h-px w-full bg-divider-gradient xl:hidden" />
  <div
    class={cn(
      'relative w-[480px] gap-12 border-gray-5 p-8 px-0 lg:p-12 xl:border-l xl:bg-gray-4 xl:pl-12',
      'xl:before:absolute xl:before:left-full xl:before:top-0 xl:before:h-full xl:before:w-screen xl:before:bg-gray-4'
    )}
  >
    {#each data.groups as group}
      <h3 class="mb-8 text-lg opacity-54">{group.title}</h3>
      <div class="flex flex-col gap-8">
        {#each group.items as item}
          {@const { href, target, rel } = getAnchorFromCmsLink(item.link)}
          <TopnavItem {href} {target} {rel} title={item.title} asset={getItemAsset(item)} />
        {/each}
      </div>
    {/each}
  </div>
</div>
