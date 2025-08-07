<script>
  const features = [
    {
      heading: 'Production-ready chat UI',
      subheading:
        'The UX layer your agent deserves, Built for LLM native interactions, out of the box.',
      items: [
        'Multi-turn conversation memory',
        'Quick replies (a.k.a. Smart Replies)',
        'Follow-up actions + memory',
        'Markdown & code rendering',
        'Citations + references',
        'Rich display for images, video, links, actions'
      ],
      footer:
        'It’s not just a pretty shell. It’s UX that teaches trust, guides behavior, and makes your agent feel alive.'
    },
    {
      heading: 'Multichannel out-of-the-box agent',
      subheading: 'Your agent is only helpful if people come back to talk to it.',
      items: [
        'Webchat widget',
        'React, Vue, and native SDKs',
        'Messaging integrations: WhatsApp, Slack, Messenger, Telegram, and more',
        'Custom themes, tone, and branding',
        'Device-based handoff (e.g., start on web, continue on mobile)',
        'Persistent history',
        'Push notifications',
        'Auth & user profiles'
      ],
      footer:
        "Notifications aren't a growth hack. They're UX glue. And we built them so you wouldn’t have to."
    },
    {
      heading: 'Simple dashboard',
      subheading:
        'Ship the agent. Then make it better. Without reading Mixpanel, Segment, or BI setups.',
      items: [
        'Built-in analytics: usage, drop-off, flows',
        'Conversation ratings',
        'Daily/weekly product & ops email reports',
        'Labels + tagging for conversation patterns'
      ],
      footer: 'You can’t improve what you can’t see. With us, you never ship blind.'
    }
  ];
</script>

<div class="space-y-32 p-10 font-sans text-white">
  <!-- Top Section -->
  <section class="mx-auto flex justify-center">
    <div>
      <div class="flex">
        <div class="w-[588px]">
          <h2
            class="sticky top-0 z-20 bg-gradient-purple bg-clip-text text-3xl font-semibold leading-tighter text-transparent shadow-inner-soft"
          >
            Everything you’d end up already done.
          </h2>
          <ul
            class="mb-28 grid list-inside grid-cols-1 gap-y-2 text-lg-richtext font-medium text-gray-11"
          >
            <li>
              <img src="/agent_lp_images/bullet_icon.png" alt="" srcset="" class="inline-block" /> A
              complete frontend and system layer for AI agents. Plug in your LLM backend or build the
              brain with ours.
            </li>
            <li>
              <img src="/agent_lp_images/bullet_icon.png" alt="" srcset="" class="inline-block" /> CometChat
              is the only full stack agent platform that combines logic, UI, moderation, notifications,
              and insights - without glue code.
            </li>
            <li>
              <img src="/agent_lp_images/bullet_icon.png" alt="" srcset="" class="inline-block" /> Each
              of these is battle-tested, used and trusted in production by real companies, across real
              user scenarios.
            </li>
          </ul>
          <!-- Feature Sections -->
          <div>
            {#each features as feature}
              <section class="z-0 w-[588px] border-t border-gray-9 pb-24 pt-24">
                <h3 class="z-0 mb-2 text-xl font-semibold text-brand-9">{feature.heading}</h3>
                <p class="text-gray-400 mb-6 text-2xl">{feature.subheading}</p>
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
                <p class="mt-6 text-md leading-snug text-gray-11">{feature.footer}</p>
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
