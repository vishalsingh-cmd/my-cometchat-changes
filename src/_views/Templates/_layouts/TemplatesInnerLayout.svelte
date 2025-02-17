<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { page } from '$app/stores';
  import type { PageStoryblok } from '$src/types/bloks';
  import Page from '$src/_comps/layouts/Page.svelte';
  import DynamicBlokLoop from '$src/_comps/specials/DynamicBlokLoop/DynamicBlokLoop.svelte';
  import TemplatesSidebar from '$src/components/blocks/layouts/marketplaces/templates-sidebar.svelte';
  import TemplatesBreadcums from '../_comps/TemplatesBreadcums.svelte';
  export let block: PageStoryblok;
</script>

<Page className="bg-white">
  <div
    class={cn(
      ['grid-col-1 grid gap-6 px-5 py-10', 'relative w-full bg-white'],
      ['lg:grid-cols-[0.2fr_0.8fr] lg:gap-8 lg:px-10']
    )}
  >
    <TemplatesSidebar />
    <div class="relative flex w-full min-w-0 flex-col">
      <TemplatesBreadcums slug={$page.url.pathname} current_page_title={block.name} />

      <DynamicBlokLoop {block} />
    </div>
  </div>
</Page>
