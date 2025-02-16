<script lang="ts">
  import type { templates_listingStoryblok } from '$src/types/bloks';
  import { onMount } from 'svelte';
  import { sanitizeSlug } from '$src/lib/storyblok';
  import { createTemplatesContext } from './_context/templates.context';
  import ListingCard from './_comps/ListingCard.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import ListingInputSearch from './_comps/ListingInputSearch.svelte';
  import ListingToggleBtn from './_comps/ListingToggleBtn.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import TemplatesSidebar from '$src/components/blocks/layouts/marketplaces/templates-sidebar.svelte';
  import ListingCardSkeleton from './_comps/ListingCardSkeleton.svelte';

  export let block: templates_listingStoryblok;
  const { templates, actions, areFiltersOpen } = createTemplatesContext();

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
    <div class={cn(['flex items-center justify-between'])}>
      <ListingToggleBtn />
      <ListingInputSearch />
    </div>
    <div
      class={cn(
        ['grid grid-cols-1'],
        [!$areFiltersOpen ? 'grid-cols-1' : 'lg:grid-cols-[0.2fr_0.8fr]']
      )}
    >
      <TemplatesSidebar className={cn([!$areFiltersOpen ? 'hidden' : '', 'pt-0'])} />

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
    </div>
  </Container>
</Section>
