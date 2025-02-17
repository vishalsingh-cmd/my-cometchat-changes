<script lang="ts">
  import { cn } from '$lib/utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { TemplatesSectionInfoStoryblok } from '$src/types/bloks';
  import Button from '$components/buttons/button.svelte';
  import TemplatesHeading from '../_comps/TemplatesHeading.svelte';
  import TemplatesParah from '../_comps/TemplatesParah.svelte';

  export let block: TemplatesSectionInfoStoryblok;
</script>

<div class={cn(['flex flex-wrap justify-between gap-2'])}>
  <div class="flex flex-col gap-1">
    <TemplatesHeading {...block.title[0]}>
      {block.title[0].value}
    </TemplatesHeading>

    {#if block.description.length && block.description[0]}
      <TemplatesParah {...block.description[0]}>
        {block.description[0].value}
      </TemplatesParah>
    {/if}
  </div>

  {#if block.cta.length && block.cta[0]}
    {@const { href, target } = getAnchorFromCmsLink(block.cta[0].link)}
    <Button variant={block.cta[0].variant} as="a" {href} {target} canHaveGlow={false}>
      {block.cta[0].label}
    </Button>
  {/if}
</div>
