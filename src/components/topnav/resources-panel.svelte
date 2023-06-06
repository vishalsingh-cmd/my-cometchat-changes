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

  export let data: TopnavResourcesPanelStoryblok;
  export let blogPosts: ISbStoryData<BlogPostStoryblok>[];
  export let customerStories: ISbStoryData<
    BlogPostStoryblok & {
      customer: ISbStoryData<CustomerStoryblok>;
    }
  >[];
</script>

<div class="container mx-auto flex px-4">
  <div class="flex items-stretch">
    <div class="flex-1 p-12 pl-0">
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
    <div class="w-px bg-divider-gradient-vertical" />
    <div class="flex-1 p-12">
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
  <div
    class="relative w-[480px] gap-12 border-l border-gray-5 bg-gray-4 p-12 pr-0 before:absolute before:left-full before:top-0 before:h-full before:w-screen before:bg-gray-4"
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
