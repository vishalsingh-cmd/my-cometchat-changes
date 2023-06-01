<script lang="ts">
  import Icon from './icon/icon.svelte';

  import AccordionGroup from '../components/accordion-group.svelte';
  import Accordion from '../components/accordion.svelte';
  import CometchatLogo from './cometchat-logo.svelte';

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
  <div class="w-full px-14 pb-8 pl-5 pt-6 text-gray-12 sm:py-14 sm:pl-16">
    <CometchatLogo class="h-4 sm:h-7" />
  </div>

  <!-- main links - Mobile -->
  <div class="flex flex-col flex-wrap gap-8 px-5 pb-6 sm:hidden">
    <AccordionGroup>
      {#each columns as column}
        <Accordion id={column.title}>
          <div slot="header" let:expanded let:attributes let:onClick class="h-auto w-full">
            <button
              {...attributes}
              class="flex w-full justify-between text-brand-9"
              on:click={onClick}
            >
              <p class="text-md/normal font-semibold tracking-wide">
                {column.title}
              </p>
              <Icon icon="plus" class={`transition-transform ${expanded && 'rotate-45'}`} />
            </button>
          </div>
          <div class="flex flex-col gap-6 first:mt-4">
            {#each column.groups as { title, links }}
              <div>
                <p class="mb-4 text-sm/normal font-medium text-gray-12 opacity-60">
                  {title}
                </p>

                <div class="flex flex-col gap-4">
                  {#each links as { label, href, target }}
                    <a
                      {href}
                      {target}
                      rel={target == '_blank' ? 'noopener noreferrer' : ''}
                      class="self-start text-sm/normal font-semibold tracking-widest text-gray-11"
                      >{label}</a
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
              <p class="mb-4 text-sm/normal font-medium text-gray-10 opacity-50">
                {title}
              </p>

              <div class="flex flex-col gap-4">
                {#each links as { label, href, target }}
                  <a
                    {href}
                    {target}
                    rel={target == '_blank' ? 'noopener noreferrer' : ''}
                    class="self-start text-sm/normal font-semibold tracking-widest text-gray-11"
                    >{label}</a
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
  <div class="flex h-px w-full bg-divider-gradient" />

  <!-- subfooter -->
  <div
    class="flex flex-col-reverse items-start justify-between gap-6 px-5 py-6 sm:flex-row sm:px-16 sm:py-10 md:items-center md:gap-0"
  >
    <!-- subfooter links -->
    <div
      class="flex flex-wrap gap-6 gap-y-3 break-keep text-sm/normal font-semibold tracking-widest text-gray-11"
    >
      <p>{new Date().getFullYear()} © CometChat</p>
      {#each subfooter as { label, href, target }}
        <a {href} {target} rel={target == '_blank' ? 'noopener noreferrer' : ''}>{label}</a>
      {/each}
    </div>

    <!-- socials -->
    <div class="flex flex-wrap gap-6 gap-y-3">
      {#each socials as { label, href, target, icon }}
        <div class="flex cursor-pointer gap-1 text-gray-10">
          <Icon {icon} style="height: 20px; width: 20px" />
          <a
            {href}
            {target}
            rel={target == '_blank' ? 'noopener noreferrer' : ''}
            class="text-sm/normal font-semibold tracking-widest text-gray-11"
          >
            {label}
          </a>
        </div>
      {/each}
    </div>
  </div>
</footer>
