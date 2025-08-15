<script lang="ts">
  import { createIndustryContext } from '$src/_views/HomeV2/_sections/Industry/_context/IndustryContext';
  import IndustryRollerItem from './roller_items/single_roller.svelte';
  // import ImageRollerItem from './roller_items/image_text_roller.svelte';
  import { onMount, onDestroy } from 'svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Icon from '$src/components/icon/icon.svelte';

  const { activeIndex, setActiveIndex } = createIndustryContext(0);

  const myRollers = [
    {
      icon: 'ai-chatbot',
      title: 'AI Chatbot',
      subHeading: 'Support that solves - and scales.',
      description:
        'From FAQs to refunds, these agents tap your knowledge base, tools, and CRM - and know what to do when the model can’t.',
      points: [
        'Pull from RAG systems, CRM data, or static FAQs',
        'Built-in moderation and fallback for edge cases and escalations',
        'Multichannel support: web, mobile, push, email',
        'One setup, deploy anywhere',
        'No separate UI or logging build required'
      ],
      link: { url: '#one', target: '_self' },
      imageAd: 'test'
    },
    {
      icon: 'copilots',
      title: 'In-app copilots',
      subHeading: 'More than answers. Real actions.',
      description:
        'These agents are embedded directly into your product, helping users get things done - not just ask for help.',
      points: [
        'Trigger modals, walkthroughs, workflows, or external tools',
        'Show memory chips, pull API data, open tool cards',
        'Built-in retries, feedback, and fallbacks',
        'Chat UI that adapts to live changes and structured replies',
        'Insights baked in so you know what’s working Chatbot'
      ],
      link: { url: '#two', target: '_self' },
      imageAd: 'test'
    },
    {
      icon: 'sliders-02',
      title: 'Custom agents, anywhere',
      subHeading: 'Your use case. Our foundation.',
      description: 'Teams are building all kinds of agents on CometChat’s stack:',
      points: [
        'Internal Slack copilots that summarize, fetch, and file',
        'Chat-first onboarding flows with step-by-step interaction',
        'Healthcare agents with audit trails and HIPAA guardrails',
        'Community moderation bots with escalation paths',
        'Lead-gen flows that start in chat'
      ],
      link: { url: '#three', target: '_self' },
      imageAd: 'test'
    }
  ];

  const myRollersImage = [
    { imageAd: '/agent_lp_images/scroll_images/scroll_ai.png', imageAlt: 'test' },
    { imageAd: '/agent_lp_images/scroll_images/scroll_custom.png', imageAlt: 'test2' },
    { imageAd: '/agent_lp_images/scroll_images/scroll_product.png', imageAlt: 'test3' }
  ];

  let interval: any;

  onMount(() => {
    interval = setInterval(() => {
      activeIndex.update((i) => (i + 1) % myRollers.length);
    }, 20000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  function startAnimation() {
    interval = setInterval(() => {
      setActiveIndex(($activeIndex + 1) % myRollers.length);
    }, 20000);
  }

  function stopAnimation() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function handleClick(index: number) {
    stopAnimation();
    setActiveIndex(index);
    startAnimation();
  }
</script>

<Section>
  <Container>
    <div class="flex items-start gap-6">
      <!-- Image section -->
      <img
        src={myRollersImage[$activeIndex].imageAd}
        alt={myRollersImage[$activeIndex].imageAlt}
        class="hidden h-[580px] w-[752px] shrink-0 lg:block"
      />

      <!-- Carousel section -->

      <div class=" flex w-full flex-col gap-[40px]">
        {#each myRollers as roller, index}
          <div class="flex flex-col items-start gap-4 self-stretch lg:hidden">
            <div class="flex flex-col items-start gap-2">
              <div class="flex flex-col items-start gap-4">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-md border border-[#6852D6]
         bg-[linear-gradient(180deg,rgba(104,82,214,0.03)_0%,rgba(104,82,214,0.15)_100%)]"
                >
                  <Icon
                    size="xs"
                    icon={roller.icon}
                    class="h-[20px] w-[20px] [&_path]:fill-[#6852D6] [&_path]:opacity-100 [&_path]:transition-colors [&_path]:duration-300"
                  />
                </div>

                <h2
                  class="text-sans text-3xl font-semibold leading-tighter tracking-none text-brand-9"
                >
                  {roller.title}
                </h2>
              </div>
              <p class=" text-xl font-medium text-gray-11">{roller.subHeading}</p>
            </div>
            <img
              src={myRollersImage[index].imageAd}
              alt={myRollersImage[index].imageAlt}
              class="aspect-[153/118] h-[269px] w-[350px] shrink-0"
            />
            <div class="flex flex-col items-start gap-2 self-stretch">
              <div>{roller.description}</div>
              <div class="flex flex-col gap-3 self-stretch">
                {#each roller.points as point}
                  <div class="flex items-start gap-[8px] self-stretch">
                    <img src="/agent_lp_images/bullet_icon.png" alt="" class="" />
                    <p
                      class="text-left font-sans text-[18px] font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                    />
                    {point}
                  </div>
                {/each}
              </div>
            </div>
          </div>

          <div class="hidden lg:flex">
            <IndustryRollerItem
              {index}
              onClick={handleClick}
              icon={roller.icon}
              title={roller.title}
              subHeading={roller.subHeading}
              description={roller.description}
              points={roller.points}
              link={roller.link}
              on:click={() => handleClick(index)}
            />
          </div>
        {/each}
      </div>
    </div>
  </Container>
</Section>
