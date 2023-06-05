<script lang="ts">
  import TopnavItem from './topnav-item.svelte';
</script>

<div class="container mx-auto flex px-4">
  <div class="flex-1 p-12 pl-0">
    <h3 class="mb-8 text-lg opacity-54">By use cases</h3>
    <div class="grid grid-cols-3 gap-8">
      <TopnavItem
        href="/"
        title="Team Comms & Workflows"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ illustration: 'community' }}
      />
      <TopnavItem
        href="/"
        title="Healthcare"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ illustration: 'education' }}
      />
      <TopnavItem
        href="/"
        title="Events & Streaming"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ illustration: 'events' }}
      />
      <TopnavItem
        href="/"
        title="Community & Social"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ illustration: 'healthcare' }}
      />
      <TopnavItem
        href="/"
        title="On-demand & Marketplaces"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ illustration: 'matrimonial' }}
      />
      <TopnavItem
        href="/"
        title="SaaS & Multi-Tenant"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ illustration: 'on-demand' }}
      />
      <TopnavItem
        href="/"
        title="Dating"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ illustration: 'saas' }}
      />
      <TopnavItem
        href="/"
        title="Online Education"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ illustration: 'sports' }}
      />
      <TopnavItem
        href="/"
        title="Sports & Gaming"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ illustration: 'team' }}
      />
    </div>
  </div>
  <div
    class="relative w-[480px] gap-12 border-l border-gray-5 bg-gray-4 p-12 pr-0 before:absolute before:left-full before:top-0 before:h-full before:w-screen before:bg-gray-4"
  >
    <h3 class="mb-8 text-lg opacity-54">By company type</h3>
    <div class="flex flex-col gap-8">
      <TopnavItem
        href="/"
        title="Enterprise"
        description="Simply copy and paste a few lines of code to add text, voice, and video to your."
        asset={{ icon: 'sun' }}
      />
      <TopnavItem
        href="/"
        title="Startups"
        description="Simply copy and paste a few lines of code to add text, voice, and video to your."
        asset={{ icon: 'sun-setting-01' }}
      />
    </div>
  </div>
</div>
