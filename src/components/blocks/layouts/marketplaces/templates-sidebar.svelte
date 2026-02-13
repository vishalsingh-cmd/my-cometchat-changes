<script lang="ts">
  import { page } from '$app/stores';
  import { getImageSrc } from '$lib/image-helper';
  import { cn } from '$lib/utils';
  import { getAnchorFromCmsLink, sanitizeSlug } from '$src/lib/storyblok';
  import type { TemplatesSidebarItemStoryblok } from '$src/types/bloks';
  export let className = '';

  const links: TemplatesSidebarItemStoryblok[] = $page.data.templatesMenu;
  function handleChange(event: unknown) {
    const selectedOption = links.find((link) => link.slug.url === (event as Event).target.value);
    if (selectedOption && selectedOption.slug.url) {
      window.location.href = $page.url + '/templates/' + selectedOption.slug.url;
    }
  }
</script>

<div class={cn(['self-start pb-1'], ['lg:sticky lg:top-[100px]'], [className])}>
  <div class="relative mx-auto h-max lg:hidden">
    <select
      on:change={handleChange}
      class={cn([
        'font-inter text-[14px] font-[400] text-[#141414]',
        'focus:ring-blue-500 w-full cursor-pointer appearance-none',
        'rounded-lg border border-[#E8E8E8] bg-white px-4 py-2.5',
        'focus:border-transparent focus:outline-none focus:ring-2'
      ])}
    >
      {#each links as link}
        <option value={link.slug.url}>
          <img src={getImageSrc(link, 'icon')} alt={link.title} />
          <span>{link.title}</span>
        </option>
      {/each}
    </select>

    <!-- Custom dropdown icon -->
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
      <svg
        class="h-5 w-5 text-[#A1A1A1]"
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
      {@const { href } = getAnchorFromCmsLink(link.slug)}
      {@const sanitizedLink = sanitizeSlug(href || '')}
      {@const sanitizedSlug = sanitizeSlug($page.data.page.full_slug)}
      {@const currentSection = sanitizedSlug.replace(/^\/|\/$/g, '').split('/')[1]}
      {@const linkSection = sanitizedLink.replace(/^\/|\/$/g, '').split('/')[1]}
      {@const isActive = currentSection === linkSection}

      <a
        href={sanitizedLink}
        class={cn(
          [
            'grid grid-cols-[auto_1fr] items-center gap-4',
            'rounded px-2 py-3 ',
            'font-inter text-[16px] font-[400] text-[#727272]',
            'transition-[opacity,background-color]',
            'bg-white hover:bg-[#F5F5F5]',
            'opacity-70 hover:opacity-80'
          ],
          [
            'data-[iscurrentpage="active"]:bg-[#F5F5F5]',
            'data-[iscurrentpage="active"]:text-[#141414]',
            'data-[iscurrentpage="active"]:font-[500]',
            'data-[iscurrentpage="active"]:opacity-100'
          ]
        )}
        data-iscurrentpage={isActive ? 'active' : 'inactive'}
      >
        <img src={getImageSrc(link, 'icon')} alt={link.title} />
        <span>{link.title}</span>
      </a>
    {/each}
  </div>
</div>
