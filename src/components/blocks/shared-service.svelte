<script lang="ts">
  import type { SharedServiceStoryblok } from '$types/bloks';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';
  import Icon from '$components/icon/icon.svelte';

  export let block: SharedServiceStoryblok;
</script>

<Section>
  <Container>
    {#if block}
      <div class="relative flex justify-center">
        <div class="relative hidden w-[200px] lg:block">
          <SecureDecCircle position="bottomRight" className="z-40" />
        </div>
        <div class="grid grid-cols-1 grid-rows-2 lg:grid-cols-6">
          {#each block?.cards ?? [] as card, index}
            <div
              class={`relative flex min-h-[261px] ${index == 0 || index == 1 ? 'border-t-0' : ''} ${
                index == 2 || index == 3 || index == 4 ? 'border-b-0' : ''
              } flex-col items-start justify-between border border-b-0 border-l border-gray-5 p-8 col-span-${
                card.colSpan || ''
              } row-span-${card.rowSpan || ''}`}
            >
              <div
                class={`flex h-[64px] w-[64px] items-center justify-center rounded-lg border border-gray-5 border-opacity-60`}
              >
                <Icon
                  icon={card.icon}
                  class="h-[36px] w-[36px] bg-divider-gradient text-gray-11 opacity-60"
                />
              </div>

              <div class="flex flex-col items-start gap-4 self-stretch">
                <div class="flex flex-col items-start gap-3 self-stretch">
                  {#if card.heading}
                    <h3 class="text-[24px] font-[640px] text-white">{card.heading}</h3>
                  {/if}

                  {#if card.subheading}
                    <p
                      class="font-sans text-lg font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                    >
                      {card.subheading}
                    </p>
                  {/if}
                </div>

                {#if card.link}
                  <a
                    href={card.link.cached_url?.replace(/^pages\//, '')}
                    class="block text-sm text-brand-9 hover:underline"
                  >
                    Learn more
                  </a>
                {/if}
                <SecureDecCircle position="topLeft" className="z-40" />
                <SecureDecCircle position="bottomRight" className="z-40" />
                <!-- <SecureDecCircle position="bottomLeft" className="z-40" /> -->
                <!-- {#if card.circlePos}
                  {#each card?.circlePos ?? [] as pos}
                    <SecureDecCircle position={pos} className="z-40" />
                  {/each}
                {/if} -->
              </div>
            </div>
          {/each}
        </div>
        <div class="relative hidden w-[200px] lg:block">
          <SecureDecCircle position="topLeft" className="z-40" />
        </div>
        <div
          class="absolute top-0 z-30 hidden h-[2px] w-[1312px] lg:block"
          style="
  background: linear-gradient(90deg,
    rgba(250,250,255,0) 0%,
    rgba(250,250,255,1) 5%,
    rgba(250,250,255,1) 95%,
    rgba(250,250,255,0) 100%
  );
  opacity: 0.1;
"
        />
        <div
          class="absolute bottom-0 z-30 hidden h-[2px] w-[1312px] lg:block"
          style="
  background: linear-gradient(90deg,
    rgba(250,250,255,0) 0%,
    rgba(250,250,255,1) 5%,
    rgba(250,250,255,1) 95%,
    rgba(250,250,255,0) 100%
  );
  opacity: 0.1;
"
        />
      </div>
    {/if}
  </Container>
</Section>
