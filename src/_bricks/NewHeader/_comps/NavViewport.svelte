<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import NavFeature from '../_innerComps/NavFeature.svelte';
  import BuildCard from '../_innerComps/NavFeatureCard.svelte';
  import NavSection from '../_innerComps/NavSection.svelte';
  import NavTitle from '../_innerComps/NavTitle.svelte';
  import NavContent from './NavContent.svelte';

  export const className = '';

  const navViewport = tv({
    base: [
      'absolute top-full left-0 [perspective:_2000px]',
      'w-full flex justify-center shadow-new-header-viewport',
      'bg-[#14131D] boredr border-[#FAFAFF] border-opacity-5 rounded-2xl'
    ]
  });
</script>

<div class={navViewport({ class: className })}>
  <NavContent>
    <NavSection className="px-6 py-6 flex flex-col gap-6">
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
    </NavSection>
  </NavContent>
</div>
