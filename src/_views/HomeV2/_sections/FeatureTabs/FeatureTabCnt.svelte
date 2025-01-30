<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  export let videoSrc: string;
</script>

<div class={cn(['flex flex-col'])}>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video src={videoSrc} autoplay playsinline loop />
</div>
