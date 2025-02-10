<script>
  import { cn } from '$src/_utils/tailwind.utils';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';
  import PlatformCard from './_comps/PlatformCard.svelte';

  import img01 from './_assets/img0.png';
  import img02 from './_assets/img1.png';
  import img03 from './_assets/img2.png';
  import img04 from './_assets/img3.png';
  import img05 from './_assets/img4.png';

  import Icon01 from './_icons/icon01.svelte';
  import Icon02 from './_icons/icon02.svelte';
  import Icon03 from './_icons/icon03.svelte';
  import Icon04 from './_icons/icon04.svelte';
  import Icon05 from './_icons/icon05.svelte';
</script>

<Section>
  <Container className={cn(['grid grid-cols-1 gap-6'], ['lg:grid-cols-2 lg:gap-8'])}>
    <div class={cn(['flex flex-col'])}>
      <HeadingLatest as="h2" varient="h6" class="text-[#6852D6]">Our Platform</HeadingLatest>
      <HeadingLatest as="h3" class={cn(['mt-2'], ['lg:mt-3'])}>
        Every tool you need to build world-class chat
      </HeadingLatest>
      <ParahLates class={cn(['mt-3'], ['lg:mt-4'])}>
        One platform, five powerful modules. Everything you need to build, scale, and perfect your
        chat experience.
      </ParahLates>
    </div>

    <PlatformCard
      baseClassName="xl:row-start-2"
      icon={Icon01}
      title="Chat and messaging"
      description="Build chat that users love - from instant 1:1 messaging to vibrant group conversations. Threads, reactions, @mentions, polls, and file sharing work right out of the box. Lightning-fast infrastructure that just works."
      ctaLabel="Learn more"
      ctaLink="/chat-and-messaging"
      imageSrc={img01}
      imageAlt="Chat and messaging"
    />

    <PlatformCard
      baseClassName="xl:row-span-2 xl:h-[84%] xl:self-end"
      icon={Icon02}
      title="Voice and video"
      description="Power lag-free 1:1 and group video calls at any scale. Built-in screen sharing, recording, and automatic quality optimization ensure perfect calls. Ultra-low latency infrastructure that handles high concurrency."
      ctaLabel="Learn more"
      ctaLink="/voice-and-video-calls"
      imageSrc={img02}
      imageAlt="Voice and video"
    />

    <PlatformCard
      baseClassName="xl:col-span-2"
      containerClassName="xl:flex-row"
      infoClassName="xl:flex-[0.5]"
      imageWrapClassName="xl:flex-[0.5]"
      imageClassName="xl:object-contain"
      icon={Icon03}
      title="Chat moderation"
      description="The industry's most sophisticated moderation engine, period. Our dual-engine approach combines AI precision with an enterprise-grade rules system for total control. Build sophisticated workflows that catch every threat, take automated actions in milliseconds, and scale to millions of messages. The only solution that never misses a beat."
      ctaLabel="Learn more"
      ctaLink="/features/moderation"
      imageSrc={img03}
      imageAlt="Chat moderation"
    />

    <PlatformCard
      icon={Icon04}
      title="Notifications"
      description="Drive engagement without the integration headache. Built-in support for web, mobile, and email notifications with smart delivery rules and preference management. "
      ctaLabel="Learn more"
      ctaLink="/features/notifications"
      imageSrc={img04}
      imageAlt="Chat moderation"
    />

    <PlatformCard
      icon={Icon05}
      title="Analytics"
      description="Understand your chat's performance with precision. Track message metrics, analyze user patterns, and optimize engagement with actionable insights."
      ctaLabel="Learn more"
      ctaLink="/features/analytics-insights"
      imageSrc={img05}
      imageAlt="Analytics"
    />
  </Container>
</Section>
