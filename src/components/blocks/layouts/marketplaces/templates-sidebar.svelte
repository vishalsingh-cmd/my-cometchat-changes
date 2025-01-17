<script lang="ts">
  import { page } from '$app/stores';
  import { getStoryblok } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import { onMount } from 'svelte';

  interface LinkProps {
    title: string;
    slug: any;
    icon: any;
  }

  let links: LinkProps[] = [];
  onMount(async () => {
    try {
      const storyblok = getStoryblok({ fetch });
      const sidebarLinks = await storyblok.get('cdn/stories/configuration/templates-sidebar-links');
      links = sidebarLinks.data.story?.content?.links || [];
    } catch (err) {
      console.error('Error fetching templates-sidebar-links: ', err);
    }
  });
  const urls = $page.url.pathname.split('/');

  function handleChange(event: any) {
    const selectedOption = links.find((link) => link.slug.url === event.target.value);
    if (selectedOption && selectedOption.slug.url) {
      window.location.href = $page.url.origin + '/templates/' + selectedOption.slug.url;
    }
  }
</script>

<div class={cn(['self-start px-5 pb-1 pt-4'], ['lg:sticky lg:top-20'])}>
  <div class="relative mx-auto h-max lg:hidden">
    <select
      on:change={handleChange}
      class={cn([
        'text-[#141414]',
        'focus:ring-blue-500 w-full cursor-pointer appearance-none',
        'rounded-lg border border-[#E8E8E8] bg-white px-4 py-2.5',
        'focus:border-transparent focus:outline-none focus:ring-2'
      ])}
    >
      {#each links as link}
        <option value={link.slug.url}>
          <img src={link.icon.filename} alt={link.title} />
          <span>{link.title}</span>
        </option>
      {/each}
    </select>

    <!-- Custom dropdown icon -->
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
      <svg
        class="h-5 w-5 text-[#141414]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>

  <div class={cn(['flex flex-col'], ['hidden lg:flex'])}>
    {#each links as link}
      <a
        href={`templates/${link.slug.url}`}
        class={cn(
          [
            'flex items-center gap-4',
            'rounded px-2 py-3',
            'text-md font-medium text-[#141414] opacity-70',
            'transition-opacity hover:opacity-100'
          ],
          [
            'data-[iscurrentpage="active"]:bg-[#F5F5F5]',
            'data-[iscurrentpage="active"]:font-semibold',
            'data-[iscurrentpage="active"]:opacity-100'
          ]
        )}
        data-iscurrentpage={urls.findIndex((url) => url === link.slug.url) !== -1
          ? 'active'
          : 'inactive'}
      >
        <img src={link.icon.filename} alt={link.title} />
        <span>{link.title}</span>
      </a>
    {/each}
  </div>
</div>
