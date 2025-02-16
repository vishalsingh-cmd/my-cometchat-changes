<script lang="ts">
  import type { templates_listingStoryblok } from '$src/types/bloks';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { sanitizeSlug } from '$src/lib/storyblok';
  import { createTemplatesContext } from './_context/templates.context';
  import { cn } from '$src/_utils/tailwind.utils';
  import ListingCard from './_comps/ListingCard.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import ListingCardSkeleton from './_comps/ListingCardSkeleton.svelte';

  export let block: templates_listingStoryblok;
  const { templates, actions } = createTemplatesContext({
    startsWithPath: $page.data.page.full_slug,
    excludingPath: $page.data.page.full_slug
  });

  onMount(() => {
    actions.fetchTemplates();
  });

  $: {
    console.log($templates);
  }
</script>

<Section className="bg-white">
  <Container
    pyEnabled={false}
    pxEnabled={false}
    expand="full"
    className={cn(['flex flex-col gap-5 px-5 py-10'], ['lg:px-10'])}
  >
    <div class={cn(['grid grid-cols-1 gap-5'], ['lg:grid-cols-2 lg:gap-8'])}>
      <!-- loader -->
      {#if $templates.isLoading}
        <ListingCardSkeleton />
        <ListingCardSkeleton />
        <ListingCardSkeleton />
      {:else if $templates.data}
        {#each $templates.data.stories as story}
          {#if story && story.content.seo[0] && story.content.seo[0].og_image && story.name}
            {@const storyLink = sanitizeSlug(story.full_slug)}
            <ListingCard
              image={story.content.seo[0].og_image}
              title={story.name}
              href={storyLink}
            />
          {/if}
        {/each}
      {/if}
    </div>
  </Container>
</Section>
