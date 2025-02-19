<script lang="ts">
  import { onMount } from 'svelte';
  import { tv } from '$src/_utils/tailwind.utils';
  import Icon from '$src/components/icon/icon.svelte';

  type BreadcrumbItem = {
    label: string;
    href: string | null;
  };

  export let current_page_title: string;
  export let slug: string;
  export let className = '';
  export let listClassName = '';
  export let listItemClassName = '';
  export let listLinkClassName = '';

  let breadcrumbs: BreadcrumbItem[] = [];

  function slugToBreadcrumbs(slug: string): BreadcrumbItem[] {
    const slugParts = slug.split('/').filter((part) => part !== '');
    const homeItem: BreadcrumbItem = { label: 'Home', href: '/' };

    const breadcrumbs = slugParts.map((part, index) => {
      const isLastItem = index === slugParts.length - 1;
      return {
        label: isLastItem ? current_page_title : capitalize(part),
        href: isLastItem ? null : `/${slugParts.slice(0, index + 1).join('/')}`
      };
    });

    breadcrumbs.unshift(homeItem);
    return breadcrumbs;
  }

  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  onMount(() => {
    breadcrumbs = slugToBreadcrumbs(slug);
  });

  const templateBreadcums = tv({
    slots: {
      base: ['relative pt-2 pb-5'],
      list: ['flex flex-row flex-wrap gap-2', 'font-inter font-[500]'],
      listItem: ['flex flex-row items-center justify-center gap-3'],
      listLink: [
        'cursor-pointer',
        'text-[#6852D6] hover:text-[#7965DB] active:text-[#5D49BE]',
        'transition-opacity duration-300'
      ]
    }
  });

  const { base, list, listItem, listLink } = templateBreadcums();
</script>

<nav aria-label="Breadcrumb" class={base({ class: className })}>
  <ul class={list({ class: listClassName })}>
    <div class="w-5 hover:cursor-pointer">
      <Icon icon="home-02" size="md" class="text-brand-9" />
    </div>
    {#each breadcrumbs as item, index}
      <li class={listItem({ class: listItemClassName })}>
        {#if item.href}
          <a
            href={item.href}
            class={listLink({
              class: [listLinkClassName, index < breadcrumbs.length - 1 ? '' : 'text-[#14131D]']
            })}
          >
            {item.label}
          </a>
        {:else}
          <span
            class={listLink({
              class: [
                listLinkClassName,
                'cursor-auto text-[#14131D] hover:text-[#14131D] active:text-[#14131D]'
              ]
            })}
          >
            {item.label}
          </span>
        {/if}

        {#if index < breadcrumbs.length - 1}
          <div class="w-5">
            <Icon icon="chevron-right" size="md" class={'text-[#14131D]'} />
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</nav>
