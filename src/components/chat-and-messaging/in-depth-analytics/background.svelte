<script lang="ts">
  import { cva } from 'class-variance-authority';
  import { cn } from '$lib/utils';

  import Stars from '$components/stars.svelte';

  const blur = cva(
    [
      'absolute',
      'h-full',
      'w-full',
      'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]'
    ],
    {
      variants: {
        colour: {
          orange: 'from-orange-9/80 to-orange-9/0',
          purple: 'from-purple-9/100 to-purple-9/0 to-80%',
          blue: 'from-blue-9/100 to-blue-9/0 to-50%'
        }
      }
    }
  );
</script>

<div
  class="pointer-events-none absolute -left-[100px] bottom-[50px] h-[272px] w-[500px] -translate-x-1/2 transform border border-brand-10 opacity-[0.12] mix-blend-hard-light blur-[100px] md:h-[572px] md:w-[980px] lg:left-[200px] lg:top-[100px]"
  style="transform: translate3d(0, 0, 0);"
>
  <div class={cn(blur({ colour: 'orange' }))} style="transform: translate3d(0, 0, 0);" />
  <div class={cn(blur({ colour: 'purple' }))} style="transform: translate3d(0, 0, 0);" />
  <div class={cn(blur({ colour: 'blue' }))} style="transform: translate3d(0, 0, 0);" />
</div>
<div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full">
  <Stars amount={20} backgroundColours={['bg-brand-9']} />
</div>
