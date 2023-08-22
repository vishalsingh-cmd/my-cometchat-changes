<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getLabelInfo } from '$lib/utils';
  import { cn } from '$lib/utils';
  import { string } from '$lib/strings';

  import type { InfrastructureSectionStoryblok } from '$types/bloks';

  import Badge from '$components/badge.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Stars from '$components/stars.svelte';
  import Title from '$components/title.svelte';

  import BigPlanet from '../infrastructure-section/assets/big-planet.svg';
  import SmallPlanets from '../infrastructure-section/assets/small-planets.svg';

  export let block: InfrastructureSectionStoryblok;

  const accentColour = () => {
    if (block.accent_colour) {
      return block.accent_colour;
    }

    return 'brand';
  };
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="dark"
    class="h-[566px] overflow-hidden bg-gray-1 text-gray-12 md:h-[700px]"
  >
    <div class="container relative mx-auto h-full w-full overflow-visible">
      <img
        src={SmallPlanets}
        alt=""
        class="absolute -bottom-28 -left-28 hidden h-[280px] w-[280px] md:block"
      />
      <div class="absolute -top-[83px] left-[25px] h-[803px] w-[1389px]">
        <Stars amount={40} backgroundColours={['bg-brand-7', 'bg-brand-9', 'bg-orange-8']} />
      </div>
      <div
        class="absolute -bottom-[300px] -right-[250px] h-[634px] w-[634px] md:-bottom-[400px] md:-right-80 md:h-[949px] md:w-[949px] lg:-bottom-[580px] lg:-right-[450px] lg:h-[1294.32px] lg:w-[1294.32px]"
      >
        <img src={BigPlanet} alt="" />
      </div>

      {#if block.header && block.header[0]}
        {@const { label, title, description, links } = block.header[0]}
        {@const labelInfo = getLabelInfo(label, accentColour())}
        <Title
          label={labelInfo}
          {title}
          {description}
          buttons={links}
          size="large"
          class="pb-5 lg:pb-8"
        />
      {/if}

      {#if block.items && block.items.length > 0}
        <ul class="flex flex-col gap-3 px-container">
          {#each block.items as item}
            <li class="flex-start flex gap-2">
              <Icon
                icon="star-04"
                size="xs"
                class={cn(
                  'mt-1 flex-shrink-0',
                  accentColour() === 'orange' && 'text-orange-9',
                  accentColour() === 'brand' && 'text-brand-9'
                )}
              />
              <p class="text-xl font-medium leading-snug tracking-wide opacity-74">
                {item.item}
              </p>
              {#if item.coming_soon}
                <Badge size="medium" label={string('coming_soon')} />
              {/if}
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </section>
{/if}
