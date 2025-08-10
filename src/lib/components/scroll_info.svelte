<script>
  // import StepAnimatedBeam from '$src/_views/HomeV2/_sections/Step/_comp/StepAnimatedBeam.svelte';

  const features = [
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
        'It’s not just a pretty shell. It’s UX that teaches trust, guides behavior, and makes your agent feel alive.'
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
        "Notifications aren't a growth hack. They're UX glue. And we built them so you wouldn’t have to."
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
      footer: 'You can’t improve what you can’t see. With us, you never ship blind.'
    }
  ];
</script>

<div class="space-y-32 font-sans text-white">
  <!-- Top Section -->
  <section class="mx-auto flex justify-center">
    <div>
      <div class="flex">
        <div class="w-[588px]">
          <h2
            class="sticky top-0 z-20 mb-6 bg-background-vertical pb-3 text-3xl font-semibold leading-tighter text-white shadow-lg"
          >
            All that you’d end up building – <span
              class="bg-gradient-purple bg-clip-text text-transparent">in already done.</span
            >
          </h2>

          <ul
            class="mb-28 grid list-inside grid-cols-1 gap-y-2 text-lg-richtext font-normal text-gray-11"
          >
            <li>
              <img src="/agent_lp_images/bullet_icon.png" alt="" srcset="" class="inline-block" />
              <span class="font-semibold"> Skip months of plumbing </span> with a stack that’s already
              solved the hardest frontend and infra problems for AI agents.
            </li>
            <li>
              <img src="/agent_lp_images/bullet_icon.png" alt="" srcset="" class="inline-block" />
              <span class="font-semibold">Ship with confidence </span> on battle-tested tech that powers
              millions of users across industries — from healthcare to high-growth SaaS.
            </li>
            <li>
              <img src="/agent_lp_images/bullet_icon.png" alt="" srcset="" class="inline-block" /> Focus
              on your edge while we handle the scaffolding — scale, security, compliance, and everything
              in between.
            </li>
          </ul>
          <!-- Feature Sections -->
          <div>
            {#each features as feature}
              <section class="z-0 w-[588px] border-t border-gray-9 pb-24 pt-24">
                <h3 class="z-0 mb-2 text-xl font-semibold text-brand-9">{feature.heading}</h3>
                <p class="mb-6 text-2xl leading-snug">{feature.subheading}</p>
                <p class="text-sans mb-6 text-xl leading-snug text-gray-11">
                  {feature.subheading2}
                </p>
                <ul class="text-base grid list-inside grid-cols-1 gap-x-6 gap-y-2 text-gray-11">
                  {#each feature.items as item}
                    <li class="text-lg-richtext font-medium text-gray-11">
                      <img
                        src="/agent_lp_images/bullet_icon.png"
                        alt=""
                        srcset=""
                        class="inline-block"
                      />
                      {item}
                    </li>
                  {/each}
                </ul>
                <p class="mt-6 text-md italic leading-snug text-gray-11">{feature.footer}</p>
              </section>
            {/each}
          </div>
        </div>

        <div class="sticky top-0">
          <img
            src="/agent_lp_images/notifications.png"
            alt="Agent UI"
            class="sticky top-0 mx-auto w-[640px]"
          />
          <!-- Add a fake chat UI and button as overlay if needed -->
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  /* Tailwind handles all styles. Custom styles can go here if necessary */
</style>
