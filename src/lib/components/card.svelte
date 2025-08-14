<script>
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';
  let bullet_icon = '/agent_lp_images/bullet_icon.png';
  import Link from '$components/buttons/link.svelte';
  // import { cn } from '../utils';

  let cards = [
    {
      icon: '/agent_lp_images/card_icons/hexagon.png',
      title: 'Chat Builder',
      description: 'The fastest way to go live',
      hoverDetail: [
        'Visual interface for styling and configuring chat',
        'Drop into any web or mobile app with a single snippet',
        'Integrates with auth, analytics, and third-party tools',
        'Great for prototypes, pilots, or teams with limited frontend resources'
      ],
      link: 'https://app.cometchat.com/signup',
      linkText: 'Try the builder'
    },
    {
      icon: '/agent_lp_images/card_icons/shine.png',
      title: 'UI Kits',
      description: 'Production-ready components with full flexibility.',
      hoverDetail: [
        'Available for all popular frameworks',
        'Theming, layout, and logic hooks exposed',
        'Save time on structure, focus on experience',
        'Ideal for teams who want speed and polish'
      ],
      link: 'https://www.cometchat.com/docs/ui-kit/react/overview',
      linkText: 'Explore UI Kits'
    },
    {
      icon: '/agent_lp_images/card_icons/start.png',
      title: 'SDKs & APIs',
      description: 'The toolbox for when you want total control.',
      hoverDetail: [
        'Available for all popular frameworks',
        'Theming, layout, and logic hooks exposed',
        'Save time on structure, focus on experience',
        'Ideal for teams who want speed and polish'
      ],
      link: 'https://www.cometchat.com/docs',
      linkText: 'View Docs'
    }
  ];
</script>

<div class="relative mb-20 grid min-h-[325px] grid-cols-[0.3fr_1fr_1fr_1fr_0.3fr] gap-0">
  <!-- Left border column -->
  <div class="border-b-0 border-t-0 border-gray-5" />

  {#each cards as card, index}
    <div class="group relative">
      <div
        class="relative z-20 flex h-full min-h-[261px] flex-shrink-0 flex-col items-start justify-between overflow-hidden border border-b-0 border-t-0 border-gray-5 p-6 text-white transition-all duration-500 hover:shadow-xl"
      >
        <!-- Gradient background -->
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute inset-0 z-10 flex-none translate-y-[-100%] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            style="background: url('/agent_lp_images/gradient.svg') no-repeat center/cover;"
          />
        </div>

        <!-- Box 1 -->
        <!-- Icon (fades out on hover) -->
        <div
          class="relative z-10 flex items-end transition-opacity duration-300 group-hover:opacity-0"
        >
          <img src={card.icon} alt={card.title} class="rounded-lg border border-gray-5 p-3" />
        </div>

        <!-- Box-2 -->
        <!-- Title & description & Hover Points -->
        <div class="">
          <div class="relative z-10">
            <div class="translate-y-0 duration-300 group-hover:translate-y-[-210px]">
              <h3 class=" text-xl font-[640px] transition-all duration-300 group-hover:mb-2">
                {card.title}
              </h3>
              <p
                class="max-h-20 overflow-hidden text-lg font-medium text-gray-11 transition-all duration-300 group-hover:max-h-0 group-hover:opacity-0"
              >
                {card.description}
              </p>
              <div
                class="pointer-events-none absolute z-0 mt-0 flex w-[300px] flex-col items-start gap-3 self-stretch opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                {#each card.hoverDetail as point}
                  <div class="pointer-events-none flex items-start gap-2 self-stretch">
                    <img
                      src={bullet_icon}
                      alt=""
                      class="mr-1 flex-none items-start object-contain"
                    />
                    <div class="text-[16px] leading-snug text-gray-11">{point}</div>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Link -->
            <div>
              <Link
                href={card.link}
                class="relative z-10 mt-auto text-sm text-brand-9 hover:underline"
              >
                {card.linkText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <!-- Circles (highest z-index) -->
      <SecureDecCircle position="topLeft" className="absolute z-50" />
      <SecureDecCircle position="topRight" className="absolute z-50" />
      <SecureDecCircle position="bottomLeft" className="absolute z-50" />
      <SecureDecCircle position="bottomRight" className="absolute z-50" />
    </div>
  {/each}

  <div
    class="absolute top-0 z-30 h-[2px] w-[1312px]"
    style="
  background: linear-gradient(90deg,
    rgba(250,250,255,0) 0%,
    rgba(250,250,255,1) 5%,
    rgba(250,250,255,1) 95%,
    rgba(250,250,255,0) 100%
  );
  opacity: 0.1;
"
  />
  <div
    class="absolute bottom-0 z-30 h-[2px] w-[1312px]"
    style="
  background: linear-gradient(90deg,
    rgba(250,250,255,0) 0%,
    rgba(250,250,255,1) 5%,
    rgba(250,250,255,1) 95%,
    rgba(250,250,255,0) 100%
  );
  opacity: 0.1;
"
  />

  <!-- Right border column -->
  <div class="border-b-0 border-t-0 border-gray-5" />
</div>
