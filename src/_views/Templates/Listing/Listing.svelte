<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { sanitizeSlug } from '$src/lib/storyblok';
  import { createTemplatesContext } from './_context/templates.context';
  import { cn } from '$src/_utils/tailwind.utils';
  import ListingCard from './_comps/ListingCard.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import ListingCardSkeleton from './_comps/ListingCardSkeleton.svelte';
  import TemplateErrorPage from './_comps/TemplateErrorPage.svelte';
  import TemplateNoData from './_comps/TemplateNoData.svelte';

  const { templates, actions } = createTemplatesContext({
    startsWithPath: $page.data.page.full_slug,
    excludingPath: $page.data.page.full_slug
  });

  onMount(() => {
    actions.fetchTemplates();
  });
</script>

<Section className="bg-white">
  <Container
    pyEnabled={false}
    pxEnabled={false}
    expand="full"
    className={cn(['flex flex-col gap-5 py-10 overflow-x-clip'])}
  >
    {#if $templates.isLoading}
      <div class={cn(['grid grid-cols-1 gap-5'], ['lg:grid-cols-2 lg:gap-8'])}>
        <ListingCardSkeleton />
        <ListingCardSkeleton />
        <ListingCardSkeleton />
        <ListingCardSkeleton />
      </div>
    {:else if $templates.error}
      <TemplateErrorPage />
    {:else if $templates.data && $templates.data.stories && $templates.data.stories.length > 0}
      <div class={cn(['grid grid-cols-1 gap-5'], ['lg:grid-cols-2 lg:gap-8'])}>
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
      </div>
    {:else}
      <!-- If data is defined but there are no stories -->
      <TemplateNoData />
    {/if}
  </Container>
</Section>
