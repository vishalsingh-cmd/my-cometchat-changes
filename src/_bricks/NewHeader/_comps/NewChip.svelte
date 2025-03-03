<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let clssName = '';

  const newChip = tv({
    base: [
      'px-1.5 py-0.5',
      'font-sans text-[11px] font-semibold text-[#7861EA]',
      'border border-[#7861EA66] rounded'
    ]
  });
</script>

<span class={newChip({ class: clssName })}> New </span>
