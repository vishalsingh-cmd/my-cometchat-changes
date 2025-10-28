<script lang="ts">
  import Bell from '$components/resources-hero/assets/bell.svg';
  import Message from '$components/resources-hero/assets/message.svg';
  import Star from '$components/resources-hero/assets/star.svg';
  import StarRect from '$components/resources-hero/assets/star-rect.svg';
  import Scissor from '$components/resources-hero/assets/scissor.svg';
  import Phone from '$components/resources-hero/assets/phone.svg';
</script>

<img src={Scissor} alt="" class="image absolute left-[81px] top-[80px] opacity-40" />
<img src={Message} alt="" class="image absolute left-[81px] top-[320px] opacity-40" />
<img src={Star} alt="" class="image absolute right-[161px] top-[320px] opacity-40" />
<img src={StarRect} alt="" class="image absolute left-[161px] top-[160px] opacity-40" />
<img src={Bell} alt="" class="image absolute right-[1px] top-[240px] opacity-40" />
<img src={Phone} alt="" class="image absolute right-[81px] top-[80px] opacity-40" />

<div class="gradient-h-line top-[80px]" />
<div class="gradient-h-line top-[158px]" />
<div class="gradient-h-line top-[238px]" />
<div class="gradient-h-line top-[314px]" />
<div class="gradient-h-line bottom-0" />

<div class="vertical-gradient-line left-[10px]" />
<div class="vertical-gradient-line left-[80px]" />
<div class="vertical-gradient-line left-[160px]" />
<div class="vertical-gradient-line left-[240px]" />
<div class="vertical-gradient-line left-[320px]" />
<div class="vertical-gradient-line left-[400px]" />
<div class="vertical-gradient-line left-[480px]" />
<div class="vertical-gradient-line left-[560px]" />
<div class="vertical-gradient-line left-[640px]" />
<div class="vertical-gradient-line left-[720px]" />
<div class="vertical-gradient-line left-[800px]" />
<div class="vertical-gradient-line left-[880px]" />
<div class="vertical-gradient-line left-[960px]" />
<div class="vertical-gradient-line left-[1040px]" />
<div class="vertical-gradient-line left-[1120px]" />
<div class="vertical-gradient-line left-[1200px]" />
<div class="vertical-gradient-line left-[1280px]" />
<div class="vertical-gradient-line left-[1360px]" />

<style>
  .gradient-h-line {
    position: absolute;
    width: 1440px;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(250, 250, 255, 0),
      #fafaff 20%,
      #fafaff 80%,
      rgba(250, 250, 255, 0)
    );
    opacity: 0.07;
    z-index: 10;
  }

  .vertical-gradient-line {
    position: absolute;
    width: 2px;
    height: 400px;
    background: linear-gradient(
      to bottom,
      rgba(250, 250, 255, 0),
      #fafaff 10%,
      #fafaff 90%,
      rgba(250, 250, 255, 0)
    );
    opacity: 0.04;
    top: 0;
  }

  .image {
    z-index: 20;
  }
</style>
