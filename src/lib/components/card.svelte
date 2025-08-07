<script>
  let cards = [
    {
      icon: '/icons/chat-builder.svg',
      title: 'Chat Builder',
      description: 'The fastest way to go live.',
      hoverDetail: 'Quickly launch with prebuilt solutions tailored for various use cases.',
      link: '#'
    },
    {
      icon: '/icons/ui-kits.svg',
      title: 'UI Kits',
      description: 'Production-ready components with full flexibility.',
      hoverDetail: 'Drop-in components styled for your brand, ready for production.',
      link: '#'
    },
    {
      icon: '/icons/sdk-apis.svg',
      title: 'SDKs & APIs',
      description: 'The toolbox for when you want total control.',
      hoverDetail: 'Build your own custom chat experience with our SDKs & APIs.',
      link: '#'
    }
  ];
</script>

<section class="bg-background py-12">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
    {#each cards as card}
      <div
        class="group relative flex flex-col items-start overflow-hidden rounded-lg border border-gray-5 p-6 text-white transition-all duration-300 hover:border-brand-9 hover:shadow-xl"
      >
        <!-- Icon -->
        <div class="mb-4 flex h-10 w-10 items-center justify-center rounded bg-gray-9">
          <img src={card.icon} alt={card.title} class="h-6 w-6 opacity-80" />
        </div>

        <!-- Title -->
        <h3 class="mb-2 text-lg font-semibold">{card.title}</h3>

        <!-- Description -->
        <p class="mb-6 flex-grow text-md text-gray-11">{card.description}</p>

        <!-- Hover Detail (Hidden by default, visible on hover) -->
        <div
          class="absolute inset-0 z-10 flex translate-y-10 items-center justify-center rounded-lg px-4 text-center text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:backdrop-blur-md"
        >
          <p class="text-sm font-medium">{card.hoverDetail}</p>
        </div>

        <!-- Link -->
        <a href={card.link} class="z-20 mt-3 inline-block text-sm text-brand-9 hover:underline">
          Try Builder
        </a>
      </div>
    {/each}
  </div>
</section>
