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
</script>

<div class={cn(['sticky top-16 self-start'])}>
  <div class={cn(['flex flex-col pt-4'], ['px-5'])}>
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
