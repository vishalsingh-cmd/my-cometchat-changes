<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';

  export let videoSrc;
  export let mobileImgSrc;
  export let className = '';
  export let videoClassName = '';
  export let mobileImgClassName = '';

  const featureTabsCnt = tv({
    slots: {
      base: ['flex w-screen flex-col min-w-0 flex-[0_0_100vw]'],
      video: ['mx-auto h-full w-4/5 object-contain', 'max-sm:hidden'],
      mobileImg: ['mx-auto h-full w-4/5 object-contain', 'sm:hidden']
    }
  });
  const { base, video, mobileImg } = featureTabsCnt();
</script>

<div class={base({ class: className })} data-name="feature-tabs-cnt">
  <video
    data-name="feature-tabs-cnt-video"
    class={video({ class: videoClassName })}
    src={videoSrc.filename}
    muted
  />
  <img
    src={mobileImgSrc.filename}
    alt="mobile feature"
    class={mobileImg({ class: mobileImgClassName })}
  />
</div>
