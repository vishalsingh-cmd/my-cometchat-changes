<script>
  let activeImage = '/agent_lp_images/notifications.png'; // Default
  let fading = false;

  const features = [
    {
      heading: '',
      subheading: '',
      subheading2: '',
      items: [
        'Skip months of plumbing with a stack that’s already solved the hardest frontend and infra problems for AI agents.',
        'Ship with confidence on battle-tested tech that powers millions of users across industries — from healthcare to high-growth SaaS.',
        'Focus on your edge while we handle the scaffolding — scale, security, compliance, and everything in between.'
      ],
      footer: '',
      image: '/agent_lp_images/notifications.png'
    },
    {
      heading: 'Production-ready chat UI',
      subheading: 'Built for LLM-native UX',
      subheading2:
        'Forget cobbling together buttons and hoping users ‘get it’. Our chat layer is purpose-built for how agents think - and how humans expect them to respond.',
      items: [
        'Token streaming with dynamic “thinking…” states',
        'Retry/stop buttons with full control logic',
        'Memory pills, prompt banners, and agent selectors',
        'Structured tool replies with inline citations',
        'Slash commands, modals, and frontend triggers',
        'Low/No-code Chat Builder, or more control via UI Kits and SDKs',
        'Supports structured agent output - including tool call rendering, memory markers, and fallback patterns'
      ],
      footer:
        'It’s not just a pretty shell. It’s UX that teaches trust, guides behavior, and makes your agent feel alive.',
      image: '/agent_lp_images/core_features/production_ready.png'
    },
    {
      heading: 'Built-in guardrails + moderation',
      subheading: 'Two-Way Safety, Built In',
      subheading2:
        'Most platforms stop at content filters. We moderate both ways - and give you the logic, visibility, and flexibility to do it your way.',
      items: [
        'Catch jailbreaks, prompt injections, and bad actors at the door',
        'Filter unsafe, biased, or hallucinated outputs from your agent',
        'Works with CometChat AI, OpenAI, or your own moderation API',
        'Fallback logic, refusal routing, escalation paths',
        'Visual policy builder with thresholds, triggers, and roles',
        'Audit trails, CSAM detection, and full RBAC compliance',
        'Plug into any stage of the message lifecycle'
      ],
      footer:
        "Because safety shouldn't be a post-it note on your roadmap. It should be a product feature.",
      image: '/agent_lp_images/core_features/built_in.png'
    },
    {
      heading: 'Multichannel notifications engine',
      subheading: 'Reach users where they are',
      subheading2: 'Most agents get ghosted. Yours won’t.',
      items: [
        'Native push, email, and SMS support',
        'Retry logic, delivery throttling, and batching',
        'Trigger-based delivery rules - unread X mins, fallback triggered, user went silent',
        'Threaded email replies (yes, replies go back to chat!)',
        'Integrates with SendGrid, Twilio, or your custom providers',
        'User-level frequency + preference settings'
      ],
      footer:
        "Notifications aren't a growth hack. They're UX glue. And we built them so you wouldn’t have to.",
      image: '/agent_lp_images/core_features/multichannel.png'
    },
    {
      heading: 'Insights dashboard',
      subheading: 'Ship it. Then sharpen it.',
      subheading2:
        'From day one, you get built-in visibility into what your agent is doing - and how people are responding.',
      items: [
        'Resolution rates, fallback frequency, retry counts, latency',
        'Tool usage breakdowns, prompt paths, knowledge base hits',
        'Conversation-level analytics: drop-off points, re-engagement, success outcomes',
        'Sentiment markers and feedback loops',
        'Exportable, filterable, and privacy-respectful'
      ],
      footer: 'You can’t improve what you can’t see. With us, you never ship blind.',
      image: '/agent_lp_images/core_features/insights.png'
    }
  ];

  // Intersection Observer to detect which section is in view
  function observeFeature(node, image) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Fade out first
          fading = true;
          setTimeout(() => {
            activeImage = image;
            fading = false;
          }, 300); // half your fade duration
        }
      },
      { threshold: 0.7 }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.unobserve(node);
      }
    };
  }
</script>

<div class="relative font-sans text-white">
  <section class="relative mx-auto flex justify-center">
    <div>
      <div class="relative flex justify-center">
        <!-- LEFT CONTENT -->
        <div class="w-[588px]">
          <div
            class="sticky top-0 z-20 mb-6 flex flex-col bg-background-vertical px-0 py-[64px] shadow-lg"
          >
            <div class="text-xl font-medium text-brand-9">Core features</div>
            <div class="text-3xl font-semibold leading-tighter text-white">
              All that you’d end up building – <span
                class="bg-gradient-purple bg-clip-text text-transparent">already done.</span
              >
            </div>
          </div>

          <!-- Feature Sections -->
          <div class="flex flex-col items-start gap-3 self-stretch">
            {#each features as feature, index}
              <div use:observeFeature={feature.image}>
                <div class="flex flex-col items-start gap-4 self-stretch">
                  <h3 class="z-0 text-xl font-semibold leading-tighter text-brand-9">
                    {feature.heading}
                  </h3>
                  <p class=" text-2xl leading-snug">{feature.subheading}</p>
                  <p class="text-sans text-xl leading-snug text-gray-11">
                    {feature.subheading2}
                  </p>
                  <ul class="text-base grid list-inside grid-cols-1 gap-[12px] text-gray-11">
                    {#each feature.items as item}
                      <li class="font-medium text-gray-12">
                        <div class="flex items-start gap-[8px]">
                          <img src="/agent_lp_images/bullet_icon.png" alt="" class="inline-block" />
                          <div class="leading-snug tracking-[0.09px] opacity-74">{item}</div>
                        </div>
                      </li>
                    {/each}
                  </ul>
                  <p
                    class={`mt-6 text-md italic leading-snug text-gray-11 ${
                      index === features.length - 1 ? 'mb-[200px]' : ''
                    }`}
                  >
                    {feature.footer}
                  </p>
                </div>
                {#if index != features.length - 1}
                  <div class="my-[100px] w-full space-y-[100px] border-b border-gray-5" />
                {/if}
              </div>
            {/each}
          </div>
        </div>

        <!-- RIGHT IMAGE -->
        <div class="sticky top-0 flex h-screen flex-col">
          <img
            src={activeImage}
            alt="Agent UI"
            class={`my-auto w-[640px] transition-opacity duration-500 ${
              fading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  /* Tailwind handles all styles. Custom styles can go here if necessary */
</style>
