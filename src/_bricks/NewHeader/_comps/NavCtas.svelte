<script lang="ts">
  import { cn, tv } from '$src/_utils/tailwind.utils';
  import Button from '$src/components/buttons/button.svelte';

  export let className = '';
  const navCtas = tv({
    base: ['flex items-center justify-center gap-4', 'mt-auto py-6']
  });
</script>

<div class={navCtas({ class: className })}>
  <!-- <a
    class={cn([
      'text-sm font-semibold tracking-widest',
      'transition-colors duration-300',
      'text-white hover:text-brand-9'
    ])}
    href="#a"
  >
    Log in
  </a> -->

  <Button variant="secondary" class="w-full">Log in</Button>
  <Button class="w-full">Schedule a demo</Button>
</div>
