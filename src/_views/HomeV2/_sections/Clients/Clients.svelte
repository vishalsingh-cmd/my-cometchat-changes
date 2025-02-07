<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Button from '$src/components/buttons/button.svelte';
  import { cn } from '$src/lib/utils';
  import { clientsData } from './_datas/clients.data';
</script>

<Section className="relative isolate group/clients">
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
  <div
    class={cn([
      'absolute inset-0 h-full w-full',
      'bg-[#0A0914] bg-opacity-30 backdrop-blur',
      'flex items-center justify-center',
      'transition duration-300',
      'scale-0 px-10 py-10 opacity-0',
      'group-hover/clients:scale-100 group-hover/clients:opacity-100'
    ])}
  >
    <Button variant="secondary">Checkout our amazing customer stories</Button>
  </div>
</Section>
