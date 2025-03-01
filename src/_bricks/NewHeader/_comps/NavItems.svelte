<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import { navItemsData } from '../_datas/newHeader.data';
  import NavItem from './NavItem.svelte';
  import NavTrigger from './NavTrigger.svelte';
  import NewChip from './NewChip.svelte';
  import NavViewport from './NavViewport.svelte';
</script>

<div class="relative isolate">
  <ul class={cn(['flex items-center gap-10'])}>
    {#each navItemsData as navItem, index}
      <NavItem>
        <NavTrigger data-index={index}>
          {navItem.label}
          {#if navItem.isNew}
            <NewChip />
          {/if}
        </NavTrigger>
      </NavItem>
    {/each}
  </ul>

  <NavViewport />
</div>
