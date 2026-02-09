<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getNewHeaderContext } from '../_context/newHader.context';

  import NavFeatureBigCards from '../_sectionbloks/NavFeatureBigCards.svelte';
  import NavFeatureCards from '../_sectionbloks/NavFeatureCards.svelte';
  import NavFeatureIcons from '../_sectionbloks/NavFeatureIcons.svelte';
  import NavFeatures from '../_sectionbloks/NavFeatures.svelte';
  import NavFeatureSideMenu from '../_sectionbloks/NavFeatureSideMenu.svelte';
  import NavFeaturePosts from '../_sectionbloks/NavFeaturePosts.svelte';

  import type { NavPanelProps } from '../newHeader.types';
  import NavPanelBackBtn from './NavPanelBackBtn.svelte';

  const { panelElems, activePanelIndex } = getNewHeaderContext();

  const blockMap: Record<string, any> = {
    'nav-feature-big-cards': NavFeatureBigCards,
    'nav-feature-cards': NavFeatureCards,
    'nav-feature-icons': NavFeatureIcons,
    'nav-features': NavFeatures,
    'nav-feature-side-menu': NavFeatureSideMenu,
    'nav-feature-posts': NavFeaturePosts
  };

  export let index: number;
  export let title = '';
  export let sections: NavPanelProps[];
  export let className = '';

  const navPanel = tv({
    base: [
      'group/navPanel',
      'flex flex-col',
      'flex-none overflow-x-clip',
      `${index === 1 || index === 0 ? '' : 'bg-[#0A0914]'}`,
      'w-full max-w-full',
      `${
        index === 0
          ? 'xl:w-[752px] xl:h-[392px] xl:gap-0 xl:overflow-hidden'
          : index === 1
          ? 'xl:w-[752px] xl:h-[336px] xl:p-[20px] gap-6'
          : index === 2
          ? 'xl:w-[752px] xl:h-auto xl:p-[20px] gap-6'
          : 'xl:min-w-[360px]'
      }`,
      'hidden data-[state="active"]:flex'
    ]
  });
</script>

<div
  class={navPanel({ class: className })}
  bind:this={$panelElems[`panel-${index}`]}
  data-name="nav-panel"
  data-index={index}
  data-state={$activePanelIndex === index ? 'active' : 'inactive'}
  style={index === 2
    ? 'background: linear-gradient(0deg, #0A0914, #0A0914), linear-gradient(0deg, rgba(250, 250, 255, 0.04), rgba(250, 250, 255, 0.04));'
    : ''}
>
  <NavPanelBackBtn />

  {#if index === 0}
    <!-- PRODUCTS TAB LAYOUT -->
    <div class="flex h-full w-full flex-col xl:flex-row">
      <!-- LEFT COLUMN -->
      <div
        class="
          flex w-full flex-none
          flex-col items-start gap-6
          bg-[#FAFAFF05] px-[20px]
          pb-[20px]
          pt-[20px] xl:w-[432px] xl:gap-3 xl:rounded-bl-[15px]
          xl:rounded-tl-[15px] xl:pt-[10px]
        "
      >
        <!-- INNER CONTENT -->
        {#each sections.slice(0, 4) as section}
          {#if blockMap[section.component]}
            <svelte:component
              this={blockMap[section.component]}
              block={section}
              className="w-full xl:w-[392px] px-0 py-0 gap-[6px]"
              titleClassName="w-full xl:w-[392px] h-[20px] flex items-center"
              featuresClassName="gap-y-6"
              cardsClassName="gap-4"
            />
          {/if}
        {/each}
      </div>

      <!-- MOBILE DIVIDER -->
      <div class="h-0 w-full border-t border-solid border-[#FAFAFF1A] xl:hidden" />

      <!-- PARTITION LINE -->
      <div class="hidden h-full w-0 border-r border-[#FAFAFF1A] xl:block" />

      <!-- RIGHT COLUMN -->
      <div class="flex flex-1 flex-col gap-4 bg-[#0A0914] p-[20px]">
        {#each sections.slice(4) as section, i}
          {#if i > 0}
            <div
              class="h-0 w-full self-center border-t border-solid border-[#FAFAFF1A] xl:w-[280px]"
            />
          {/if}
          {#if blockMap[section.component]}
            <svelte:component
              this={blockMap[section.component]}
              block={section}
              className="px-0 py-0 gap-5 xl:gap-3"
              featureVariant="minimal"
              featuresClassName="gap-y-5 xl:gap-y-4"
              titleClassName="bg-[#FAFAFF0A] w-full py-1 xl:py-0 xl:bg-transparent"
              iconClassName="[&_path]:!fill-[url(#nav-feature-icon-bottom-mobile-gradient)] xl:[&_path]:!fill-[url(#nav-feature-icon-minimal-gradient)]"
            />
          {/if}
        {/each}
      </div>
    </div>
  {:else if index === 2}
    <!-- RESOURCES TAB LAYOUT -->
    <div class="flex h-full w-full flex-col gap-8 px-5 xl:gap-6 xl:p-0">
      {#each sections as section, i}
        {#if blockMap[section.component]}
          <svelte:component
            this={blockMap[section.component]}
            block={section}
            className="px-0 py-0"
            featuresClassName={i === 0
              ? 'gap-y-8 xl:gap-y-3 xl:grid-cols-2 xl:gap-x-4'
              : 'gap-y-6 xl:grid-cols-2 xl:gap-y-6 xl:gap-x-4'}
            featureVariant={i === 0 ? 'default' : 'minimal'}
          />
        {/if}
      {/each}
    </div>
  {:else}
    <!-- DEFAULT LAYOUT -->
    {#each sections as section}
      {#if blockMap[section.component]}
        <svelte:component
          this={blockMap[section.component]}
          block={section}
          forceTwoColumns={title?.toLowerCase().includes('developer')}
          featuresClassName={title?.toLowerCase().includes('developer')
            ? '!gap-y-6 xl:!gap-y-3'
            : ''}
          className={title?.toLowerCase().includes('developer') ? 'px-5 xl:px-0' : ''}
          titleClassName={index === 1
            ? 'text-[12px] font-semibold leading-[1.06] tracking-[0.02em] uppercase text-[#FAFAFF] text-opacity-60'
            : ''}
        />
      {/if}
    {/each}
  {/if}
</div>
