<script lang="ts">
  import Bell from '$components/resources-hero/assets/bell.svg';
  import Message from '$components/resources-hero/assets/message.svg';
  import Star from '$components/resources-hero/assets/star.svg';
  import StarRect from '$components/resources-hero/assets/star-rect.svg';
  import Scissor from '$components/resources-hero/assets/scissor.svg';
  import Phone from '$components/resources-hero/assets/phone.svg';
</script>

<img
  src={Scissor}
  alt=""
  class="image absolute left-[12px] top-[80px] w-[58px] opacity-40 lg:left-[81px]"
/>
<img
  src={Message}
  alt=""
  class="image absolute left-[12px] top-[380px] opacity-40 lg:left-[81px] lg:top-[320px]"
/>
<img
  src={Star}
  alt=""
  class="image absolute right-[5px] top-[380px] w-[58px] opacity-40 lg:right-[161px] lg:top-[320px]"
/>
<img
  src={StarRect}
  alt=""
  class="image absolute bottom-[20px] left-[72px] top-[320px] w-[58px] opacity-40 lg:left-[161px] lg:top-[160px]"
/>
<img
  src={Bell}
  alt=""
  class="image absolute -right-10 top-[260px] w-[58px] opacity-40 lg:right-[1px] lg:top-[240px]"
/>
<img
  src={Phone}
  alt=""
  class="image absolute right-[0px] top-[80px] w-[58px] opacity-40 lg:right-[81px]"
/>

<div class="hidden lg:block">
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
</div>

<div class="mx-auto block lg:hidden">
  <div class="gradient-h-line top-[80px]" />
  <div class="gradient-h-line top-[140px]" />
  <div class="gradient-h-line top-[200px]" />
  <div class="gradient-h-line top-[260px]" />
  <div class="gradient-h-line top-[320px]" />
  <div class="gradient-h-line top-[380px]" />
  <div class="gradient-h-line top-[440px]" />

  <div class="vertical-gradient-line left-[10px]" />
  <div class="vertical-gradient-line left-[70px]" />
  <div class="vertical-gradient-line left-[130px]" />
  <div class="vertical-gradient-line left-[190px]" />
  <div class="vertical-gradient-line left-[250px]" />
  <div class="vertical-gradient-line left-[310px]" />
  <div class="vertical-gradient-line left-[370px]" />
  <div class="vertical-gradient-line left-[560px]" />
  <div class="vertical-gradient-line left-[640px]" />
  <div class="vertical-gradient-line left-[720px]" />
</div>

<style>
  .gradient-h-line {
    position: absolute;
    width: 100%;
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
    height: 100%;
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
    width: 78px;
  }

  @media (max-width: 1024px) {
    .image {
      width: 58px;
    }
  }
</style>
