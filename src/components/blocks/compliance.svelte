<script lang="ts">
  import type { ComplianceStoryblok } from '$types/bloks';
  export let block: ComplianceStoryblok;
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';
</script>

{#if block}
  <Section
    ><Container pyEnabled={false} className="relative flex  items-center justify-center z-10">
      <div class="relative w-[1102px] border-l border-r border-gray-5">
        <div class="flex w-full justify-between">
          {#if block.title}
            <div class="flex items-center pl-[32px]">
              <h2 class="w-[130px] text-xl font-[640px] leading-tighter text-gray-12">
                {block.title}
              </h2>
            </div>
          {/if}

          <div class="my-6 flex items-center gap-8 pr-8">
            {#each block.images ?? [] as image}
              <img
                src={image.image.filename}
                alt={image.alt || 'Compliance logo'}
                class="w-[108px]"
                loading="lazy"
              />
            {/each}
          </div>
        </div>
        <SecureDecCircle position="bottomLeft" className="absolute z-50" />
        <SecureDecCircle position="bottomRight" className="absolute z-50" />
      </div>
      <!-- Bottom gradient line -->
      <div
        class="absolute bottom-0 z-30 h-[2px] lg:w-[1312px]"
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
    </Container></Section
  >
{/if}
