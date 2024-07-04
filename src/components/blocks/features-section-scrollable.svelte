<script lang="ts">
  import type { FeaturesSectionScrollableStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import { getLabelInfo } from '$lib/utils';

  import Tabs from '$components/tabs/tabs.svelte';
  import Title from '$components/title.svelte';
  import Sticky from '$components/sticky.svelte';
  import { onMount } from 'svelte';
  import TitleMediaSection from './title-media-section.svelte';

  export let block: FeaturesSectionScrollableStoryblok;
  let selectedItemIndex = 0;

  function handleScroll() {
    const windowTop = window.scrollY;
    const tabContainers = document.querySelectorAll('.tabContainer');
    tabContainers.forEach((tabContainer) => {
      const scrollTop = tabContainer?.offsetTop - 100;
      const contianerHeight = scrollTop + tabContainer?.offsetHeight;
      if (windowTop >= scrollTop && windowTop < contianerHeight) {
        selectedItemIndex = Number(tabContainer.id.split('-')[1]);
      }
    });
  }
  const onOptionSelect = (e: CustomEvent) => {
    const query = `#tabContainer-${e.detail.i}`;
    const element: HTMLDivElement | null = document.querySelector(query);
    let elementTop = element?.offsetTop ?? 0;
    let offset = e.detail.i != 0 ? (window.scrollY > elementTop ? -100 : -50) : -50;
    let top = elementTop + offset;
    window?.scrollTo({
      top: top,
      left: 0,
      behavior: 'smooth'
    });
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="bg-gray-1 text-gray-12"
    style="color-scheme: light;"
  >
    <div class="mx-auto max-w-content">
      {#if block.header && block.header[0]}
        <section
          use:storyblokEditable={block}
          class=" mx-auto bg-gray-1 text-gray-12"
          data-theme={block.header[0].theme === 'light' ? 'light' : 'dark'}
        >
          {#if block.header[0].title && block.header[0].title[0]}
            {@const { title, description, links, size } = block.header[0].title[0]}
            {@const label = getLabelInfo(
              block.header[0].title[0].label,
              block.header[0].accent_colour || 'orange'
            )}
            <Title
              {label}
              {title}
              {description}
              buttons={links}
              alignment={block.alignment || 'center'}
              size={size || 'small'}
            />
          {/if}
        </section>
      {/if}
      {#if block.items.length > 0}
        {@const parsedItems = block.items.map((item, i) => ({
          id: i,
          label: item.title[0].label
        }))}

        <Sticky translateOnDesktop class="hidden border-b border-gray-12/8 lg:block">
          <Tabs
            options={parsedItems}
            activeTab={selectedItemIndex}
            on:optionSelect={onOptionSelect}
            class="justify-center"
          />
        </Sticky>
        {#each block.items as item, i}
          <div id="tabContainer-{i}" class="tabContainer">
            <TitleMediaSection block={item} />
          </div>
        {/each}
      {/if}
    </div>
  </section>
{/if}
