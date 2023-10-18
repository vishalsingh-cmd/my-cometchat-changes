<script>
  import Background from '$components/404/background.svelte';
  import Button from '$components/buttons/button.svelte';
  import { string } from '$lib/strings';
</script>

<section class="relative isolate h-[523px] overflow-hidden bg-gray-1 md:h-[676px]">
  <div class="container relative mx-auto flex h-full items-end px-container pb-12">
    <Background />
    <div
      class="z-20 mx-auto flex max-w-[290px] flex-col items-center justify-center gap-6 self-end md:max-w-[350px]"
    >
      <p class="break-normal text-center text-xl/tighter font-semibold text-gray-12/74">
        {string('not_found.message')}
      </p>
      <Button as="a" href="/" class="w-fit">{string('not_found.cta.label')}</Button>
    </div>
  </div>

  <!-- Bottom Gradient -->
  <div
    class="absolute bottom-0 left-0 z-10 h-[354px] w-full bg-gradient-to-t from-gray-1/100 to-gray-1/0"
  />
  <div
    class="absolute bottom-0 left-0 z-10 h-[100px] w-full bg-gradient-to-t from-gray-1/100 to-gray-1/0"
  />
</section>
