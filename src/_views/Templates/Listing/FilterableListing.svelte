<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { sanitizeSlug } from '$src/lib/storyblok';
  import { createTemplatesContext } from './_context/templates.context';
  import { cn } from '$src/_utils/tailwind.utils';
  import ListingCard from './_comps/ListingCard.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import ListingInputSearch from './_comps/ListingInputSearch.svelte';
  import ListingToggleBtn from './_comps/ListingToggleBtn.svelte';
  import TemplatesSidebar from '$src/components/blocks/layouts/marketplaces/templates-sidebar.svelte';
  import ListingCardSkeleton from './_comps/ListingCardSkeleton.svelte';
  import TemplateErrorPage from './_comps/TemplateErrorPage.svelte';
  import TemplateNoData from './_comps/TemplateNoData.svelte';

  const { templates, actions, areFiltersOpen } = createTemplatesContext({
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
    className={cn(['flex flex-col gap-6 px-5 py-10 overflow-x-clip'], ['lg:px-10'])}
  >
    <div class={cn(['flex flex-col items-center justify-between gap-3'], ['lg:flex-row'])}>
      <TemplatesSidebar className={cn(['w-full lg:hidden z-10'])} />
      <ListingToggleBtn className="hidden lg:flex z-10" />
      <ListingInputSearch className="z-10" />
    </div>

    <div
      class={cn(
        ['grid grid-cols-1 gap-6'],
        [$areFiltersOpen ? 'lg:grid-cols-[0.2fr_0.8fr]' : 'grid-cols-1']
      )}
    >
      <TemplatesSidebar
        className={cn([!$areFiltersOpen ? 'hidden lg:hidden' : 'hidden lg:block', 'pt-0'])}
      />

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
    </div>
  </Container>
</Section>
