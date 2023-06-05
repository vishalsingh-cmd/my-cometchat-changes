<script lang="ts">
  import Button from './buttons/button.svelte';
</script>

<section data-theme="dark" class="flex w-full items-center justify-center bg-gray-1">
  <div
    class="flex flex-col items-center justify-center px-5 pb-14 pt-24 text-gray-10 sm:px-0 sm:py-36"
  >
    <h1 class="text-3xl leading-tighter text-gray-12">Get started now</h1>
    <p
      class="mt-4 max-w-sm text-center text-lg font-semibold tracking-wide text-gray-12 opacity-70"
    >
      Build and test for as long as you need. Pick a plan when youre ready.
    </p>
    <div class="mt-8">
      <Button variant="secondary">Start now</Button>
      <Button>Chat with us</Button>
    </div>
  </div>
</section>
