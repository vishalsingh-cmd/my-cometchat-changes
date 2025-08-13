<script lang="ts">
  import { createIndustryContext } from '$src/_views/HomeV2/_sections/Industry/_context/IndustryContext';
  import IndustryRollerItem from './roller_items/single_roller.svelte';
  // import ImageRollerItem from './roller_items/image_text_roller.svelte';
  import { onMount, onDestroy } from 'svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';

  const { activeIndex, setActiveIndex } = createIndustryContext(0);

  const myRollers = [
    {
      icon: 'ai-chatbot',
      title: 'AI Chatbot',
      subHeading: 'Support that solves - and scales.',
      description:
        'Whether it’s FAQs, help desk queries, refund requests, or onboarding prompts, these agents work with your knowledge base or tool stack - and know how to respond safely when the model doesn’t.',
      points: [
        'Pull from RAG systems, CRM data, or static FAQs',
        'Built-in moderation and fallback for edge cases and escalations',
        'Multichannel support: web, mobile, push, email',
        'Set up once. Deploy across teams, countries, or verticals',
        'All without needing a separate team to build the UI, error states, and logging'
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
        class="h-[588px] w-[752px] shrink-0"
      />

      <!-- Carousel section -->
      <div class="">
        <div class="flex min-h-[686px] w-[528px] flex-col gap-[40px]">
          {#each myRollers as roller, index}
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
          {/each}
        </div>
      </div>
    </div>
  </Container>
</Section>
