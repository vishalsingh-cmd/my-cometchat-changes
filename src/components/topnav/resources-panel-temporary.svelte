<script lang="ts">
  import { cn } from '$lib/utils';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  import Divider from '$components/divider.svelte';
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import TopnavItem, { getItemAsset } from './topnav-item.svelte';
  import TopnavThumb from './topnav-thumb.svelte';

  import type { TopnavResourcesPanelTemporaryStoryblok } from '$types/bloks';

  export let data: TopnavResourcesPanelTemporaryStoryblok;
</script>

<div class="container mx-auto px-container xl:flex">
  <div class="w-full items-stretch md:flex">
    <div class="flex-1 p-8 px-0 md:pr-12 lg:py-12">
      <h3 class="mb-6 text-lg opacity-54">{data.customer_stories_title}</h3>
      <div class="flex flex-col items-start gap-8">
        {#each data.customer_stories as story}
          <TopnavThumb
            image={story.image}
            href={getAnchorFromCmsLink(story.link).href ?? ''}
            title={story.title}
            publishedAt={story.date}
            publishedBy={story.author}
          />
        {/each}
        {#if data.customer_stories_link?.[0]}
          {@const link = data.customer_stories_link[0]}
          {@const { href, target, rel } = getAnchorFromCmsLink(link.link)}
          <GhostButton as="a" {href} {target} {rel} variant="highlighted">
            {link.label}
          </GhostButton>
        {/if}
      </div>
    </div>
    <Divider direction="vertical" class="hidden md:block" />
    <Divider class="md:hidden" />
    <div class="flex-1 py-8 md:p-8 lg:py-12">
      <h3 class="mb-6 text-lg opacity-54">{data.blog_title}</h3>
      <div class="flex flex-col items-start gap-8">
        {#each data.blog_posts as story}
          <TopnavThumb
            image={story.image}
            href={getAnchorFromCmsLink(story.link).href ?? ''}
            title={story.title}
            publishedAt={story.date}
            publishedBy={story.author}
          />
        {/each}
        {#if data.blog_link?.[0]}
          {@const link = data.blog_link[0]}
          {@const { href, target, rel } = getAnchorFromCmsLink(link.link)}
          <GhostButton as="a" {href} {target} {rel} variant="highlighted">
            {link.label}
          </GhostButton>
        {/if}
      </div>
    </div>
  </div>
  <Divider class="xl:hidden" />
  <div
    class={cn(
      'relative w-[480px] gap-12 border-gray-5 py-8 lg:p-8 lg:py-12 xl:border-l xl:bg-gray-4',
      'xl:before:absolute xl:before:left-full xl:before:top-0 xl:before:h-full xl:before:w-screen xl:before:bg-gray-4'
    )}
  >
    {#each data.groups as group}
      <h3 class="mb-6 text-lg opacity-54">{group.title}</h3>
      <div class="flex flex-col gap-8">
        {#each group.items as item}
          {@const { href, target, rel } = getAnchorFromCmsLink(item.link)}
          <TopnavItem {href} {target} {rel} title={item.title} asset={getItemAsset(item)} />
        {/each}
      </div>
    {/each}
  </div>
</div>
