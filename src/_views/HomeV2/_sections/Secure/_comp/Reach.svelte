<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import PhoneIcon from '../_icons/PhoneIcon.svelte';

  export let title;
  export let des;

  export let className = '';
</script>

<div class={cn(['flex-[50] border border-[#FAFAFF1A] p-4'], [className])}>
  <PhoneIcon />
  <h4 class={cn(['mt-4 text-[16px] font-medium text-[#FAFAFF]'])}>
    {title}
  </h4>
  <p class={cn(['mt-2 text-[32px] font-semibold text-[#FAFAFF] '])}>{des}</p>
</div>
