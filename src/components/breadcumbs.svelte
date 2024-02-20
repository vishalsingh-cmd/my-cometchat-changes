<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from './icon/icon.svelte';

  type BreadcrumbItem = {
    label: string;
    href: string | null;
  };

  export let slug: string;
  let breadcrumbs: BreadcrumbItem[] = [];

  function slugToBreadcrumbs(slug: string): BreadcrumbItem[] {
    const slugParts = slug.split('/').filter((part) => part !== ''); // Filter out empty parts

    // Create the "Home" breadcrumb item
    const homeItem: BreadcrumbItem = { label: 'Home', href: '/' };

    // Process the rest of the slug parts
    const breadcrumbs = slugParts.map((part, index) => {
      const isLastItem = index === slugParts.length - 1;

      return {
        label: capitalize(part),
        href: isLastItem ? null : `/${slugParts.slice(0, index + 1).join('/')}`
      };
    });

    // Insert "Home" at the beginning
    breadcrumbs.unshift(homeItem);

    return breadcrumbs;
  }

  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  onMount(() => {
    breadcrumbs = slugToBreadcrumbs(slug);
    console.log(breadcrumbs);
  });
</script>

<nav aria-label="Breadcrumb" class="absolute left-16 hidden py-5 md:block">
  <ul class="flex flex-row gap-2 font-medium">
    <div class="w-5">
      <Icon icon="home-02" size="md" class="text-brand-9" />
    </div>
    {#each breadcrumbs as item, index}
      <li class="flex flex-row items-center justify-center gap-3">
        {#if item.href}
          <a
            href={item.href}
            class={index < breadcrumbs.length - 1 ? 'font-bold text-brand-9' : 'text-brand-12'}
            >{item.label}</a
          >
        {:else}
          <span class={index < breadcrumbs.length - 1 ? 'font-bold text-brand-9' : 'text-brand-12'}
            >{item.label}</span
          >
        {/if}

        {#if index < breadcrumbs.length - 1}
          <div class="w-5">
            <Icon
              icon="chevron-right"
              size="md"
              class={index < breadcrumbs.length - 2 ? 'text-brand-9' : 'text-brand-12'}
            />
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</nav>
