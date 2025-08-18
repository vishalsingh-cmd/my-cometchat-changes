<script>
  import AgentsHero from '$lib/components/agents_hero.svelte';
  import TrustedBy from '$src/lib/components/trusted_by.svelte';
  import ShowCase from '$src/lib/components/agent_platform_showcase.svelte';
  import ScrollInfo from '$src/lib/components/scroll_info.svelte';
  import PathSelector from '$src/lib/components/path_selector.svelte';
  import TitleBlock from '$src/lib/components/title_block.svelte';
  // import AgentRole from '$src/lib/components/agent_role.svelte';
  import AgentRoleTest from '$src/lib/components/agent_role_test.svelte';
  import TitleBlock2 from '$src/lib/components/title_blok_2.svelte';
  import Cards from '$src/lib/components/card.svelte';
  import Prefooter from '$src/lib/components/prefooter.svelte';
  import TitleBlock3 from '$src/lib/components/title_block3.svelte';
  import LockVector from '$src/_views/HomeV2/_sections/Secure/_comp/LockVector.svelte';
  import Card2 from '$src/lib/components/card2.svelte';
  // import Section from '$src/_comps/layouts/Section.svelte';
  // import Container from '$src/_comps/layouts/Container.svelte';
  import TitleBlocknew from '$src/lib/components/title_blocknew.svelte';
  // import Title from '$src/components/title.svelte';
</script>

<svelte:head>
  <title>Full Stack AI Agent Platform | CometChat</title>

  <meta
    name="description"
    content="Developer-friendly full stack agent platform with chat UI, moderation, multichannel notifications, and analytics - so your AI agents ship faster and safer."
  />
  <meta name="robots" content="noindex" />

  <meta
    property="og:image"
    content="https://a.storyblok.com/f/231922/1200x630/d639d0748b/open-graph-image.png"
  />

  <meta property="og:title" content="Full Stack AI Agent Platform | CometChat" />
  <meta
    property="og:description"
    content="Developer-friendly full stack agent platform with chat UI, moderation, multichannel notifications, and analytics - so your AI agents ship faster and safer."
  />

  <link rel="canonical" href="https://www.cometchat.com/full-stack-agent-platform" />

  <script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-59ZJRV2');
  </script>
  <!-- End Google Tag Manager -->
</svelte:head>

<!-- Google Tag Manager (noscript) -->
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-59ZJRV2"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  />
</noscript>
<!-- End Google Tag Manager (noscript) -->

<AgentsHero />
<TrustedBy />
<ShowCase />
<ScrollInfo />
<img src="/agent_lp_images/AI_Chip.png" alt="" class="mx-auto lg:mt-[100px]" />
<TitleBlocknew />
<PathSelector />
<TitleBlock />
<!-- <AgentRole /> -->
<AgentRoleTest />
<TitleBlock2 />
<Cards />
<LockVector />
<TitleBlock3 />
<Card2 />
<Prefooter />
