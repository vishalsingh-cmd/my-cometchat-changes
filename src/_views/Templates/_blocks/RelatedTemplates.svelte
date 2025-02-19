<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import type { RelatedTemplatesStoryblok } from '$src/types/bloks';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import RelatedTemplate from './RelatedTemplate.svelte';
  import TemplatesHeading from '../_comps/TemplatesHeading.svelte';
  import TemplatesParah from '../_comps/TemplatesParah.svelte';

  export let block: RelatedTemplatesStoryblok;
</script>

<Section>
  <Container
    pxEnabled={false}
    pyEnabled={false}
    expand="full"
    className={cn(['flex flex-col gap-8 py-10'])}
  >
    <div class={cn(['flex flex-wrap justify-between gap-2'])}>
      <div class="flex flex-col gap-1">
        <TemplatesHeading tag="h2" size="h2" weight="700">
          {block.title}
        </TemplatesHeading>

        {#if block.description}
          <TemplatesParah tag="p" size="medium" weight="400">
            {block.description}
          </TemplatesParah>
        {/if}
      </div>
    </div>

    <div class="flex gap-5">
      {#each block.templates as uuid}
        <RelatedTemplate {uuid} />
      {/each}
    </div>
  </Container>
</Section>
