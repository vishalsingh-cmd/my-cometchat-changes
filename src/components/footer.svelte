<script lang="ts">
  import Logo from './logo.svelte';

  type Link = { label: string; href: string; target?: '_blank' };
  type SocialLink = Link & { icon: string };
  type LinkGroup = { title?: string; links: Link[] };
  type Column = { title: string; groups: LinkGroup[] };

  export let columns: Column[]; // main links
  export let socials: SocialLink[]; // socials
  export let subfooter: Link[]; // terms of use, privacy policy
</script>

<footer data-theme="dark" class="bg-gray-1">
  <!-- logo -->
  <div class="px-14 py-14 pl-16">
    <Logo />
  </div>

  <!-- main links -->
  <div data-theme="dark" class="flex gap-20 px-16 pb-10">
    {#each columns as column}
      <div>
        <p class="mb-[1.125rem] text-md font-semibold tracking-wide text-brand-9">
          {column.title}
        </p>
        <div class="flex flex-col gap-4">
          {#each column.groups as group}
            <div>
              <p class="mb-4 text-sm/normal font-medium text-gray-10">
                {group.title}
              </p>
              <div class="flex flex-col gap-4">
                {#each group.links as link}
                  <a
                    href={link.href}
                    target={link.target}
                    class="text-sm/normal font-semibold tracking-widest text-gray-11"
                    >{link.label}</a
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
    style="background: linear-gradient(90deg, hsl(var(--color-gray-5)) 0%, hsl(var(--color-gray-5)) 50%, hsl(var(--color-gray-5)) 100%);"
  />

  <div class="flex items-center justify-between px-16 py-10">
    <div class="flex gap-6">
      {#each subfooter as item}
        <a
          href={item.href}
          target={item.target}
          class="text-sm/normal font-semibold tracking-widest text-gray-11">{item.label}</a
        >
      {/each}
    </div>

    <!-- socials -->

    <div class="flex gap-6">
      {#each socials as social}
        <a
          href={social.href}
          target={social.target}
          class="text-sm/normal font-semibold tracking-widest text-gray-11">{social.label}</a
        >
      {/each}
    </div>
  </div>
</footer>
