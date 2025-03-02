<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import NavFeature from '../_innerComps/NavFeature.svelte';
  import BuildCard from '../_innerComps/NavFeatureCard.svelte';
  import NavSection from '../_innerComps/NavSection.svelte';
  import NavTitle from '../_innerComps/NavTitle.svelte';
  import NavContent from './NavContent.svelte';
  import type { NavItemProps, NavLinkProps } from '../newHeader.types';

  export let navItems: Array<NavItemProps | NavLinkProps>;
  export const className = '';

  const navViewport = tv({
    base: [
      'absolute top-full left-0 [perspective:_2000px]',
      'w-full flex shadow-new-header-viewport overflow-hidden',
      'bg-[#14131D] border border-[#FAFAFF] border-opacity-5 rounded-2xl'
    ]
  });
</script>

<div class={navViewport({ class: className })}>
  {#each navItems as navItem, index}
    {#if 'panel' in navItem && navItem.panel}
      <NavContent data-index={index} className="shrink-0">
        <NavSection className="px-6 py-6 flex flex-col gap-6">
          <NavTitle>Build with UI kits | SDKs| APIs</NavTitle>
          <div class="flex flex-col gap-6 lg:flex-row">
            <BuildCard />
            <BuildCard />
          </div>
        </NavSection>
        <NavSection className="px-6 py-6 flex flex-col gap-6">
          <NavTitle>Manage with purpose built applications</NavTitle>
          <div class="grid grid-cols-2 gap-x-6 gap-y-8">
            <NavFeature />
            <NavFeature />
            <NavFeature />
            <NavFeature />
          </div>
        </NavSection>
      </NavContent>
    {/if}
  {/each}
</div>
