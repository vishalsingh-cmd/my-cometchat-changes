<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import type { RelatedTemplatesStoryblok } from '$src/types/bloks';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import SectionInfo from './SectionInfo.svelte';
  import RelatedTemplate from './RelatedTemplate.svelte';

  export let block: RelatedTemplatesStoryblok;
</script>

<Section>
  <Container
    pxEnabled={false}
    pyEnabled={false}
    expand="full"
    className={cn(['flex flex-col gap-8 py-10'])}
  >
    <SectionInfo block={block.info[0]} />
    <div class="flex gap-5">
      {#each block.templates as uuid}
        <RelatedTemplate {uuid} />
      {/each}
    </div>
  </Container>
</Section>
