<script lang="ts">
  import Icon from './icon/icon.svelte';
  import Logo from './cometchat-logo.svelte';
  import MobileLogo from './cometchat-mobile-logo.svelte';

  import AccordionGroup from '../components/accordion-group.svelte';
  import Accordion from '../components/accordion.svelte';

  type Link = { label: string; href: string; target?: '_blank' };
  type SocialLink = Link & { icon: string };
  type LinkGroup = { title?: string; links: Link[] };
  type Column = { title: string; groups: LinkGroup[] };

  export let columns: Column[]; // main links
  export let socials: SocialLink[]; // socials
  export let subfooter: Link[]; // terms of use, privacy policy
</script>

<footer data-theme="dark" class="flex-wrap bg-gray-1">
  <!-- logo -->
  <div class="px-14 pb-8 pl-5 pt-6 sm:py-14 sm:pl-16">
    <Logo class="hidden sm:inline" />
    <MobileLogo class="sm:hidden" />
  </div>

  <!-- main links - Mobile -->
  <div class="flex flex-col flex-wrap gap-8 px-5 pb-6 sm:hidden">
    <AccordionGroup>
      {#each columns as column}
        <Accordion {column}>
          <div slot="header" let:expanded let:attributes let:onClick class="h-auto w-full">
            <button
              {...attributes}
              class="flex w-full justify-between text-brand-9"
              on:click={onClick}
            >
              <p class="text-md/normal font-semibold tracking-wide">
                {column.title}
              </p>
              {#if expanded}
                <Icon icon="x-close" />
              {:else}
                <Icon icon="plus" />
              {/if}
            </button>
          </div>
          <div class="flex flex-col gap-6 first:mt-[1.125rem]">
            {#each column.groups as { title, links }}
              <div>
                <p class="mb-4 text-sm/normal font-medium text-gray-12 opacity-[0.6]">
                  {title}
                </p>

                <div class="flex flex-col gap-4">
                  {#each links as { label, href, target }}
                    <a
                      {href}
                      {target}
                      class="text-sm/normal font-semibold tracking-widest text-gray-11">{label}</a
                    >
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </Accordion>
      {/each}
    </AccordionGroup>
  </div>

  <!-- main links - Desktop -->
  <div class="hidden flex-wrap gap-20 px-16 pb-10 sm:flex">
    {#each columns as column}
      <div class="flex-col">
        <p class="mb-[1.125rem] text-md font-semibold tracking-wide text-brand-8">
          {column.title}
        </p>
        <div class="flex flex-col gap-4 sm:mt-0">
          {#each column.groups as { title, links }}
            <div>
              <p class="mb-4 text-sm/normal font-medium text-gray-10 opacity-[0.54]">
                {title}
              </p>

              <div class="flex flex-col gap-4">
                {#each links as { label, href, target }}
                  <a
                    {href}
                    {target}
                    class="text-sm/normal font-semibold tracking-widest text-gray-11">{label}</a
                  >
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <!-- divider -->
  <div
    class="flex h-[2px] w-full"
    style="background: linear-gradient(90deg, transparent 0%, hsl(var(--color-gray-5)) 50%, transparent 100%);"
  />

  <!-- subfooter -->
  <div
    class="flex flex-col-reverse items-start justify-between gap-6 px-5 py-6 sm:flex-row sm:px-16 sm:py-10 md:items-center md:gap-0"
  >
    <!-- subfooter links -->
    <div class="flex flex-wrap gap-6 gap-y-3">
      {#each subfooter as { label, href, target }}
        <a
          {href}
          {target}
          class="break-keep text-sm/normal font-semibold tracking-widest text-gray-11">{label}</a
        >
      {/each}
    </div>

    <!-- socials -->
    <div class="flex flex-wrap gap-6 gap-y-3">
      {#each socials as { label, href, target, icon }}
        <div class="flex cursor-pointer gap-1 text-gray-10">
          <Icon {icon} style="height: 20px; width: 20px" />
          <a {href} {target} class="text-sm/normal font-semibold tracking-widest text-gray-11">
            {label}
          </a>
        </div>
      {/each}
    </div>
  </div>
</footer>
