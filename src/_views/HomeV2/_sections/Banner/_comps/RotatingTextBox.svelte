<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import type { AnimatedBannerBoxStoryblok } from '$src/types/bloks';

  export let animatedBoxes: AnimatedBannerBoxStoryblok[];
  let currentIndex = 0;

  const rotate = () => {
    currentIndex = (currentIndex + 1) % animatedBoxes.length;
  };

  setInterval(rotate, 3000);
</script>

<div class="flex items-center justify-center">
  <div class={cn(['relative overflow-hidden [perspective:1000px]'])}>
    {#each animatedBoxes as item, index}
      <div
        class={cn([
          'group/box',
          'absolute inset-0 opacity-0',
          'data-[state="active"]:relative data-[state="active"]:opacity-100',
          'translate-y-1/2 data-[state="active"]:translate-y-0',
          'transition-[opacity,transform] duration-500'
        ])}
        data-state={currentIndex === index ? 'active' : 'inactive'}
      >
        <div
          class={cn([
            'relative isolate overflow-hidden',
            'flex items-center justify-center gap-2.5',
            'rounded-2xl p-[1px]'
          ])}
        >
          <div
            class={cn([
              'absolute inset-0 bg-gradient-purple',
              'opacity-0 will-change-transform',
              'group-data-[state="active"]/box:opacity-100'
            ])}
          />
          <div
            class={cn([
              'z-[1] w-max bg-[#0A0914] px-4 py-1',
              'flex items-center justify-center gap-2.5',
              'rounded-2xl'
            ])}
          >
            <img src={item.icon.filename} alt={item.label} />
            <span class="bg-gradient-purple bg-clip-text leading-none text-transparent">
              {item.label}
            </span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
