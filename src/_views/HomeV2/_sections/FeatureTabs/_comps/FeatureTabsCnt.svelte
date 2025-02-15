<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let videoSrc;
  export let className = '';
  export let videoClassName = '';

  const featureTabsCnt = tv({
    slots: {
      base: ['flex w-screen flex-col'],
      video: ['mx-auto h-full w-4/5 object-contain']
    }
  });
  const { base, video } = featureTabsCnt();
</script>

<div class={base({ class: className })} data-name="feature-tabs-cnt">
  <video
    data-name="feature-tabs-cnt-video"
    class={video({ class: videoClassName })}
    src={videoSrc.filename}
    muted
  />
</div>
