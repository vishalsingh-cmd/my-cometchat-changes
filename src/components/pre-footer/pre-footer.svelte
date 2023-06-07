<script lang="ts">
  import Button from '../buttons/button.svelte';
  import BigComet from './assets/big-comet.svg';
  import SmallComet from './assets/small-comet.svg';
  import Stars from './assets/stars.svg';
</script>

<section data-theme="dark" class="relative overflow-hidden bg-gray-1">
  <div
    class="flex flex-col items-start justify-center px-5 pb-20 pt-24 sm:items-center xl:px-0 xl:py-36"
  >
    <div class="flex flex-col items-start md:items-center">
      <h1 class="z-20 text-2xl text-gray-12">Get started for free</h1>
      <p
        class="z-20 mt-1 max-w-md whitespace-pre-line text-xl leading-tight text-gray-12 opacity-70 md:text-center"
      >
        Build and test for as long as you need. {'\n'} Pick a plan when youre ready.
      </p>
    </div>
    <div class="mt-8 flex gap-3">
      <Button variant="secondary" class="z-20 text-gray-12">Start now</Button>
      <Button class="z-20">Chat with us</Button>
    </div>
  </div>
  <img alt="" src={Stars} class="absolute inset-2 z-10" />
  <img
    alt=""
    src={BigComet}
    class="absolute -left-24 -top-36 z-10 min-w-[700px] xl:-left-44 xl:-top-52 xl:min-w-[1897px]"
  />
  <img
    alt=""
    src={SmallComet}
    class="absolute -bottom-16 -right-36 z-10 xl:-bottom-10 xl:-right-10"
  />
</section>
