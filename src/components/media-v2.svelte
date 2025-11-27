<script lang="ts">
  import { getImageAttributes, type ImageAttributesOptions } from '$lib/storyblok';
  import { cn } from '$lib/utils';

  import type { AssetStoryblok } from '$types/bloks';
  import { onMount } from 'svelte';
  import Modal from './modal.svelte';

  let className = '';
  let videoElement: HTMLVideoElement;
  export { className as class };
  export let media: AssetStoryblok;
  export let imageTransformOptions: Partial<ImageAttributesOptions> | undefined = undefined;
  export let enableZoom = false;
  function createModal() {
    if (!enableZoom) return;
    const modal = new Modal({
      target: document.body,
      props: {
        image: media,
        onClose: () => {
          modal.$destroy();
        }
      }
    });
  }
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      {
        root: null,
        threshold: 0.5
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  });
</script>

{#if media.filename}
  {@const mediaFile = media.filename.toLowerCase()}
  {#if mediaFile.includes('mp4') || mediaFile.includes('mov')}
    <video
      bind:this={videoElement}
      height="100%"
      width="100%"
      class={className}
      loop
      muted
      autoplay
      playsinline
      controlsList="nodownload"
      disablePictureInPicture
    >
      <source src={media.filename} type="video/mp4" />
    </video>
  {:else if mediaFile.includes('webm')}
    <video
      bind:this={videoElement}
      height="100%"
      width="100%"
      class={className}
      loop
      muted
      autoplay
      playsinline
      controlsList="nodownload"
      disablePictureInPicture
    >
      <source src={media.filename} type="video/webm" />
    </video>
  {:else if mediaFile.includes('jpg') || mediaFile.includes('jpeg') || mediaFile.includes('png') || mediaFile.includes('webp') || mediaFile.includes('gif')}
    {@const { src, alt, width, height } = getImageAttributes(media, imageTransformOptions)}
    {#if src.includes('a.storyblok.com')}
      <div class="relative rounded-2xl border border-gray-1/20 p-1">
        <img
          on:click={createModal}
          class={cn(
            'animate-fadeIn rounded-2xl border border-gray-1/20 ',
            className,
            enableZoom && 'hover:cursor-zoom-in'
          )}
          {src}
          {alt}
          {width}
          {height}
        />
      </div>
    {:else}
      <img
        on:click={createModal}
        on:keydown
        class={cn('animate-fadeIn', className, enableZoom && 'hover:cursor-zoom-in')}
        {src}
        {alt}
      />
    {/if}
  {/if}
{/if}
