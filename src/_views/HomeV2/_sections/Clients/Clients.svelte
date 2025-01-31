<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import { cn } from '$src/lib/utils';
  import { clientsData } from './_datas/clients.data';
</script>

<Section className="relative isolate">
  <Container>
    <h2
      class={cn(
        ['text-center font-sans text-md font-semibold text-[#FAFAFF] text-opacity-54'],
        ['lg:text-[18px]']
      )}
    >
      Trusted by
    </h2>
    <div
      class={cn(
        ['mt-6 flex items-center gap-8 overflow-auto'],
        ['sm:grid sm:grid-cols-5 sm:justify-center'],
        ['lg:mt-8']
      )}
      data-scrollbar="hidden"
    >
      {#each clientsData as data}
        <img class="w-max" src={data.src} alt={data.alt} />
      {/each}
    </div>
  </Container>
</Section>
