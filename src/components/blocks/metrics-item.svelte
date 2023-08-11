<script lang="ts">
  import { intersectionObserver } from '$lib/actions/intersection-observer';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import type { MetricsItemStoryblok } from '$types/bloks';

  let className: undefined | string = undefined;
  export { className as class };
  export let titleClassName: string | undefined = undefined;
  export let subtitleClassName: string | undefined = undefined;

  export let metric: MetricsItemStoryblok;

  let width = 0;
  let height = 0;
  let intersecting = false;
</script>

<div
  class={cn('flex flex-col-reverse gap-6 md:flex-row md:items-end', className)}
  bind:clientWidth={width}
  bind:clientHeight={height}
  style="--metric-width:{width}px;--metric-height:{height}px;"
  use:storyblokEditable={metric}
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
      'h-px md:w-px',
      intersecting ? 'w-[var(--metric-width)] md:h-[var(--metric-height)]' : 'w-0 md:h-0'
    )}
  >
    <div
      class={cn(
        'h-px w-full md:h-full md:w-px',
        'bg-gradient-to-r from-gray-12/0 to-gray-12/10 md:bg-gradient-to-t'
      )}
    />
    <div
      class={cn(
        'absolute h-[3px] w-[3px] rounded-full bg-brand-9 shadow-[0_0_4px_1px_hsl(var(--color-brand-9)/0.3)]',
        '-top-px right-0 md:-right-px md:top-0'
      )}
    />
  </div>
  <div>
    <p class={cn('text-4xl/none font-semibold', titleClassName)}>{metric.metric}</p>
    <p class={cn('mt-2 text-lg/snug font-medium opacity-74', subtitleClassName)}>
      {metric.description}
    </p>
  </div>
</div>
