<script lang="ts">
  import { cn } from '$lib/utils';
  import Logo from './logo.svelte';

  let active = 0;
</script>

<header
  data-theme="dark"
  class={cn('fixed top-0 z-10 w-full text-brand-12', 2 < 1 && 'bg-gray-3/80 backdrop-blur-xl')}
>
  <div class="container mx-auto flex h-16 items-center justify-between px-4">
    <Logo />
    <nav class="flex items-center gap-8">
      {#each ['Platform', 'Solutions', 'Developers', 'Resources', 'Pricing'] as item, i}
        <a
          class={cn(
            'relative flex h-16 items-center overflow-hidden px-3 text-sm/none font-semibold tracking-widest transition-colors hover:text-brand-9',
            i === active && 'text-brand-9'
          )}
          href="/"
          on:click={() => (active = i)}
        >
          <span
            class={cn(
              'pointer-events-none absolute bottom-0 left-0 h-0 w-full bg-gradient-to-t from-brand-9/30 via-brand-9/10 via-30% to-brand-9/0 transition-all delay-0 duration-200 ease-in-out',
              'before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:bg-brand-9 before:opacity-0 before:transition-all before:duration-200 before:ease-in-out',
              i === active && 'h-6 delay-100 duration-500',
              i === active && 'before:opacity-1 before:h-0.5'
            )}
          />
          {item}
        </a>
      {/each}
    </nav>

    <div>
      <a
        class="text-sm/none font-semibold tracking-widest transition-colors hover:text-brand-9"
        href="/">Sign in</a
      >

      <!-- TODO: Button (waiting on PR) -->
    </div>
  </div>
</header>
