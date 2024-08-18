<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { AssetStoryblok } from '$types/bloks';
  import { getImageAttributes } from '$lib/storyblok';
  import Button from './buttons/button.svelte';
  import Icon from './icon/icon.svelte';
  export let onClose: () => void;
  export let image: AssetStoryblok;
  const { src, alt, height } = getImageAttributes(image);
  let offset = Number(height) / 27;
  let actHeight = Number(height) - offset;
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose();
      e.preventDefault();
    }
  }
  function onZoomIn() {
    actHeight = actHeight + 100;
  }
  function onZoomOut() {
    actHeight = actHeight - 100;
  }
  onMount(() => {
    document.body.style.overflow = 'hidden';
  });
  onDestroy(() => {
    document.body.style.overflow = 'auto';
  });
</script>

<div
  on:click={onClose}
  on:keydown
  class="fixed left-0 top-0 z-[110] flex h-screen w-screen items-center justify-center bg-black/90 backdrop-blur-xl"
>
  <div
    on:keydown
    on:scroll|stopPropagation
    on:wheel|stopPropagation
    class="mx-4 flex h-[85%] w-full flex-grow-0 items-center justify-center overflow-scroll rounded-xl border border-gray-12/30 bg-gray-12/5 sm:mx-32"
  >
    <img
      on:scroll|stopPropagation
      on:wheel|stopPropagation
      class="m-auto object-contain"
      style="height: {actHeight}px"
      {src}
      {alt}
    />
  </div>
  <Button variant="secondary" size="sm" class="fixed right-6 top-6 z-[110]">
    <Icon icon="x-close" /></Button
  >
  <div
    on:click|stopPropagation
    on:keydown
    class="fixed bottom-12 z-[110] flex items-center justify-center"
  >
    <div
      class="flex gap-0 rounded-xl border border-[rgba(250,250,255,0.10)] bg-[rgba(20,19,29,0.25)] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.16)] backdrop-blur-[6px]"
    >
      <Button
        on:click={onZoomOut}
        disabled={actHeight <= 100}
        variant="secondary"
        class="border-none"
        size="sm"
      >
        <Icon icon="zoom-out-v2" size="sm" /></Button
      >
      <Button
        on:click={onZoomIn}
        disabled={actHeight >= Number(height) - offset}
        variant="secondary"
        class="border-none"
        size="sm"
      >
        <Icon icon="zoom-in-v2" size="sm" /></Button
      >
    </div>
  </div>
</div>

<svelte:window on:keydown={onKeyDown} />
