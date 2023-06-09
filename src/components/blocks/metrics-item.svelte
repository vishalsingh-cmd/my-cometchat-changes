<script lang="ts">
  import { intersectionObserver } from '$lib/actions/intersection-observer';
  import { cn } from '$lib/utils';
  import type { MetricsItemStoryblok } from '$types/bloks';

  export let metric: MetricsItemStoryblok;

  let width = 0;
  let height = 0;
  let intersecting = false;
</script>

<div
  class="flex flex-col-reverse gap-6 lg:flex-row lg:items-end"
  bind:clientWidth={width}
  bind:clientHeight={height}
  style="--metric-width:{width}px;--metric-height:{height}px;"
  use:intersectionObserver={{
    callback: ([e]) => {
      if (e.isIntersecting) {
        intersecting = true;
      }
    }
  }}
>
  <div
    aria-hidden="true"
    role="presentation"
    class={cn(
      'relative transition-all delay-500 duration-500 ease-smooth',
      'h-px lg:w-px',
      intersecting ? 'w-[var(--metric-width)] lg:h-[var(--metric-height)]' : 'w-0 lg:h-0'
    )}
  >
    <div
      class={cn(
        'h-px w-full lg:h-full lg:w-px',
        'bg-gradient-to-r from-gray-12/0 to-gray-12/10 lg:bg-gradient-to-t'
      )}
    />
    <div
      class={cn(
        'absolute h-[3px] w-[3px] rounded-full bg-brand-9 shadow-[0_0_4px_1px_hsl(var(--color-brand-9)/0.3)]',
        '-top-px right-0 lg:-right-px lg:top-0'
      )}
    />
  </div>
  <div>
    <p class="text-3xl/none">{metric.metric}</p>
    <p class="text-lg/snug opacity-74">{metric.description}</p>
  </div>
</div>
