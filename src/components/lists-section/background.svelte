<script lang="ts">
  import { cn } from '$lib/utils';

  import BlurLeftDark from '$components/lists-section/assets/blur-left-dark.png';
  import BlurLeftLight from '$components/lists-section/assets/blur-left-light.png';
  import BlurRight from '$components/lists-section/assets/blur-left-light.png';

  export let theme: 'light' | 'dark' | '' | undefined = undefined;
</script>

<img
  src={BlurRight}
  alt=""
  draggable="false"
  class={cn(
    'pointer-events-none absolute -right-[250px] -top-[300px] z-10 min-h-[938px] min-w-[938px] select-none ',
    theme === 'dark' ? 'opacity-15' : 'opacity-8'
  )}
/>
{#if theme === 'dark'}
  <img
    src={BlurLeftDark}
    alt=""
    draggable="false"
    class="pointer-events-none absolute -bottom-[100px] -left-[300px] top-[unset] z-10 min-h-[538px] min-w-[538px] select-none opacity-10 lg:-top-[100px] lg:bottom-[unset]"
  />
{:else}
  <img
    src={BlurLeftLight}
    alt=""
    draggable="false"
    class="pointer-events-none absolute -bottom-[200px] -left-[300px] top-[unset] z-10 min-h-[438px] min-w-[438px] select-none opacity-10 lg:-top-[50px] lg:bottom-[unset]"
  />
{/if}
