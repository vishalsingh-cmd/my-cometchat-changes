<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import type { CustomerStatsStoryblok } from '$types/bloks';
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';

  export let block: CustomerStatsStoryblok;
</script>

{#if block}
  <Section className="mt-[70px] lg:mt-0">
    <Container pyEnabled={false} pxEnabled={false} className="px-5 lg:px-0">
      <div class="flex flex-wrap">
        {#each block?.cards ?? [] as card, index}
          <div class="relative flex flex-1 flex-col items-start gap-2 border border-white/10 p-6">
            {#if card.value}
              <p
                class="bg-gradient-purple bg-clip-text text-3xl font-semibold leading-tighter text-transparent"
              >
                {card.value}
              </p>{/if}
            {#if card.description}
              <p class="font-sans text-lg leading-snug tracking-[0.09px] opacity-74">
                {card.description}
              </p>

              {#if index == 0}<SecureDecCircle position="bottomLeft" className="z-40" />{/if}
              {#if index == block?.cards.length - 1}<SecureDecCircle
                  position="topRight"
                  className="z-40"
                />{/if}
              <SecureDecCircle position="topLeft" className="z-40" />
              <SecureDecCircle position="bottomRight" />
            {/if}
          </div>
        {/each}
      </div>
    </Container>
  </Section>
{/if}
