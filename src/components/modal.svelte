<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { AssetStoryblok } from '$types/bloks';
  import { getImageAttributes } from '$lib/storyblok';
  import Button from './buttons/button.svelte';
  import Icon from './icon/icon.svelte';
  export let onClose: () => void;
  export let image: AssetStoryblok;

  const { src, alt, width } = getImageAttributes(image);
  let nWidth = Number(width);
  let actWidth: number = nWidth;

  onMount(() => {
    let modalImageContainerWidth = Number(
      document?.getElementById('modalImageContainer')?.offsetWidth
    );
    if (!modalImageContainerWidth) return;
    nWidth = modalImageContainerWidth > nWidth ? nWidth : modalImageContainerWidth;
    actWidth = nWidth;
  });
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose();
      e.preventDefault();
    }
  }
  function onZoomIn() {
    actWidth = actWidth + 100;
  }
  function onZoomOut() {
    actWidth = actWidth - 100;
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
  class="fixed left-0 top-0 z-[110] flex h-screen w-screen items-center justify-center backdrop-blur-xl"
  style="background: rgba(20, 19, 29, 0.75);"
>
  <div
    id="modalImageContainer"
    on:keydown
    on:scroll|stopPropagation
    on:wheel|stopPropagation
    class="mx-4 flex max-h-[85vh] max-w-full flex-grow-0 items-center justify-center overflow-scroll rounded-3xl sm:mx-32"
  >
    <img
      on:scroll|stopPropagation
      on:wheel|stopPropagation
      class="mb-auto object-contain"
      style="width: {actWidth}px;"
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
    class="fixed bottom-12 z-[110] flex gap-0"
    style="border-radius: 12px;border: 1px rgba(250, 250, 255, 0.10);background: rgba(20, 19, 29, 0.25);box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.16);backdrop-filter: blur(6px);"
  >
    <Button
      on:click={onZoomOut}
      disabled={actWidth <= 400}
      variant="secondary"
      class="border-none"
      size="sm"
    >
      <Icon icon="zoom-out-v2" size="xs" /></Button
    >
    <Button
      on:click={onZoomIn}
      disabled={actWidth >= Number(nWidth)}
      variant="secondary"
      class="border-none"
      size="sm"
    >
      <Icon icon="zoom-in-v2" size="xs" /></Button
    >
  </div>
</div>

<svelte:window on:keydown={onKeyDown} />
