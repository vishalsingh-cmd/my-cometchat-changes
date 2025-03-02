<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type { NavPanelProps } from '../newHeader.types';

  export let index: number;
  export let sections: NavPanelProps[];
  export let className = '';

  const navPanel = tv({
    base: ['relative w-full h-full']
  });
</script>

<div class={navPanel({ class: className })}>
  <!-- <NavSection className="px-6 py-6 flex flex-col gap-6">
    <NavTitle>Build with UI kits | SDKs| APIs</NavTitle>
    <div class="flex flex-col gap-6 lg:flex-row">
      <BuildCard />
      <BuildCard />
    </div>
  </NavSection>
  <NavSection className="px-6 py-6 flex flex-col gap-6">
    <NavTitle>Manage with purpose built applications</NavTitle>
    <div class="grid grid-cols-2 gap-6">
      <NavFeature />
      <NavFeature />
    </div>
  </NavSection> -->
</div>
