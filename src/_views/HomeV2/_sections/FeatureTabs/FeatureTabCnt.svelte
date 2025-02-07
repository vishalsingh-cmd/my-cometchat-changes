<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  export let videoSrc: string;
</script>

<div class={cn(['flex flex-col'])}>
  <video src={videoSrc} muted />
</div>
