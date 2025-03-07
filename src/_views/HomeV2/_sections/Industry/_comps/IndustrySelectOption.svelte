<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Icon from '$src/components/icon/icon.svelte';
  export let icon: string;
  export let title: string;
  export let isSelected: boolean;
  export let className = '';
</script>

<div
  class={cn(['group', 'grid grid-cols-[auto_1fr] items-center gap-4'], [className])}
  data-state={isSelected ? 'active' : 'inactive'}
>
  <Icon
    size="xs"
    {icon}
    class={cn([
      '[&_path]:fill-[url(#paint0_linear_1324_49788)]',
      '[&_path]:opacity-40 group-data-[state="active"]:[&_path]:opacity-100',
      'group-data-[state="active"]:[&_path]:fill-[#FF7129]',
      '[&_path]:transition-colors [&_path]:duration-300'
    ])}
  />

  <h3
    class={cn(
      [
        'text-left font-sans text-[16px] font-semibold text-[#FAFAFF]',
        'text-opacity-40 group-hover:text-opacity-100',
        'transition-colors duration-300',
        'group-data-[state="active"]:text-[#FF7129]'
      ],
      ['lg:text-[22px]']
    )}
  >
    {title}
  </h3>
</div>
