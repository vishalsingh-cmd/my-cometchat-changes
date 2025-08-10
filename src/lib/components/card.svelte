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
      link: '#',
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
      link: '#',
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
      link: '#',
      linkText: 'View Docs'
    }
  ];
</script>

<div class="mb-20 grid min-h-[325px] grid-cols-[0.3fr_1fr_1fr_1fr_0.3fr] gap-0">
  <!-- Left border column -->
  <div class=" border-b border-t border-gray-5" />

  {#each cards as card}
    <div
      class="group relative flex h-full flex-col border border-gray-5 p-6 text-white transition-all duration-300 hover:shadow-xl"
    >
      <!-- Top: Icon -->
      <div class="mb-4 flex items-end">
        <img src={card.icon} alt={card.title} class="rounded-lg border border-gray-5 p-3" />
      </div>

      <!-- Spacer -->
      <div class="flex-grow" />

      <!-- Bottom: Title + Description + Link -->
      <div class="z-10">
        <h3 class="mb-2 text-lg font-semibold">{card.title}</h3>
        <p class="mb-4 text-md text-gray-11">{card.description}</p>
      </div>

      <Link href={card.link} class="z-50 text-sm text-brand-9 hover:underline">
        {card.linkText}
      </Link>

      <!-- Hover Detail Overlay -->
      <div
        class="pointer-events-none absolute inset-0 z-20 flex translate-y-40 flex-col rounded-lg px-4 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:backdrop-blur-lg"
      >
        <div class="z-10 pl-4 pt-6">
          <p class="mb-2 text-xl font-semibold">{card.title}</p>
          {#each card.hoverDetail as point}
            <div class="flex max-w-[300px]">
              <div><img src={bullet_icon} alt="" class="mr-1" /></div>
              <div class="mb-4 text-md leading-snug text-gray-11">{point}</div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Decorative Circles -->
      <SecureDecCircle position="topLeft" className="z-30" />
      <SecureDecCircle position="topRight" className="z-30" />
      <SecureDecCircle position="bottomLeft" className="z-30" />
      <SecureDecCircle position="bottomRight" className="z-30" />
    </div>
  {/each}

  <!-- Right border column -->
  <div class="border-b border-t border-gray-5" />
</div>
