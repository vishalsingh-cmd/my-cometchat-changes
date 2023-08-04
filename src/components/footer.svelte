<script lang="ts">
  import Icon from './icon/icon.svelte';

  import Divider from './divider.svelte';
  import Link from './buttons/link.svelte';
  import CometchatLogo from './cometchat-logo.svelte';
  import Accordion from '../components/accordion.svelte';
  import AccordionGroup from '../components/accordion-group.svelte';

  import type { Footer } from '$lib/data/footer';

  export let data: Footer;
</script>

<footer data-theme="dark" class="bg-gray-1 text-gray-12">
  <div class="container mx-auto px-container">
    <!-- logo -->
    <div class="w-full pb-8 pt-6 sm:py-14">
      <CometchatLogo class="h-4 sm:h-7" />
    </div>

    <!-- main links - Mobile -->
    <div class="flex flex-col flex-wrap gap-8 pb-6 sm:hidden">
      <AccordionGroup>
        {#each data.columns.flat() as column, i}
          <Accordion id={column.title + i}>
            <div slot="header" let:expanded let:attributes let:onClick class="w-full">
              <button
                {...attributes}
                class="flex w-full justify-between text-brand-9"
                on:click={onClick}
              >
                <p class="text-md/tight font-semibold tracking-wide">
                  {column.title}
                </p>
                <Icon
                  icon="plus"
                  class={`transition-transform ${expanded && 'rotate-45'}`}
                  size="sm"
                />
              </button>
            </div>
            <div class="flex flex-col gap-6 first:pt-4">
              {#each column.groups as { title, links }}
                <div>
                  {#if title}
                    <p class="mb-4 text-sm/normal font-semibold tracking-widest text-gray-12/60">
                      {title}
                    </p>
                  {/if}

                  <div class="flex flex-col gap-4">
                    {#each links as { label, href, target, rel }}
                      <Link variant="secondary" {href} {target} {rel}>
                        {label}
                      </Link>
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
    <div class="hidden pb-10 sm:grid sm:grid-cols-2 sm:gap-20 lg:grid-cols-3 xl:grid-cols-5">
      {#each data.columns as columnGroup}
        <div class="flex flex-col sm:gap-20">
          {#each columnGroup as column}
            <div class="flex-col">
              <p class="mb-4 text-md font-semibold tracking-wide text-brand-9">
                {column.title}
              </p>
              <div class="flex flex-col gap-8 sm:mt-0">
                {#each column.groups as { title, links }}
                  <div>
                    {#if title}
                      <p class="mb-4 text-sm/normal font-medium text-gray-12/54">
                        {title}
                      </p>
                    {/if}

                    <div class="flex flex-col gap-4">
                      {#each links as { label, href, target, rel }}
                        <Link variant="secondary" {href} {target} {rel}>
                          {label}
                        </Link>
                      {/each}
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      {/each}
    </div>

    <!-- divider -->
    <Divider />

    <!-- subfooter -->
    <div
      class="flex flex-col-reverse items-start justify-between gap-6 py-6 sm:flex-row sm:py-10 md:items-center md:gap-0"
    >
      <!-- subfooter links -->
      <div
        class="flex flex-wrap gap-6 gap-y-3 break-keep text-sm/normal font-semibold tracking-widest text-gray-12/[0.84]"
      >
        <p>{new Date().getFullYear()} © CometChat</p>
        {#each data.subfooter as { label, href, target, rel }}
          <Link variant="secondary" {href} {target} {rel}>
            {label}
          </Link>
        {/each}
      </div>

      <!-- socials -->
      <div class="flex flex-wrap gap-6 gap-y-3">
        {#each data.socials as { href, target, rel, label, icon }}
          <Link variant="secondary" {href} {target} {rel}>
            {#if typeof icon === 'string'}
              <Icon {icon} size="sm" />
            {/if}
            {label}
          </Link>
        {/each}
      </div>
    </div>
  </div>
</footer>
