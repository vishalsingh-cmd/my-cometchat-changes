<script lang="ts">
  import Page from '$src/_comps/layouts/Page.svelte';
  import DynamicBlokLoop from '$src/_comps/specials/DynamicBlokLoop/DynamicBlokLoop.svelte';
  import TemplatesSidebar from '$src/components/blocks/layouts/marketplaces/templates-sidebar.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import type { PageStoryblok } from '$src/types/bloks';
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
    <div class="relative flex w-full flex-col">
      <DynamicBlokLoop {block} />
    </div>
  </div>
</Page>
