<script lang="ts">
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import TopnavItem from './topnav-item.svelte';
</script>

<div class="container mx-auto flex px-4">
  <div
    class="relative w-[480px] border-r border-gray-5 bg-gray-4 p-12 pl-0 before:absolute before:right-full before:top-0 before:h-full before:w-screen before:bg-gray-4"
  >
    <div class="flex flex-col gap-12">
      <div>
        <TopnavItem
          size="big"
          href="/"
          title="Chat & Messaging"
          description="Simply copy and paste a few lines of code to add text, voice, and video to your."
          asset={{ illustration: 'events' }}
        />
        <GhostButton class="mt-4" label="View feature" variant="highlighted" />
      </div>
      <div>
        <TopnavItem
          size="big"
          href="/"
          title="Voice & Video Calls/Conference"
          description="Simply copy and paste a few lines of code to add text, voice, and video to your."
          asset={{ illustration: 'events' }}
        />
        <GhostButton class="mt-4" label="View feature" variant="highlighted" />
      </div>
    </div>
  </div>
  <div class="flex-1 p-12">
    <h3 class="mb-8 text-lg opacity-54">Other features</h3>
    <div class="grid grid-cols-3 gap-8">
      <TopnavItem
        href="/"
        title="Security & Compliance"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ icon: 'shield-tick' }}
      />
      <TopnavItem
        href="/"
        title="Extensions"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ icon: 'puzzle-piece' }}
      />
      <TopnavItem
        href="/"
        title="Analytics & Insights"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ icon: 'bar-chart-square-02' }}
      />
      <TopnavItem
        href="/"
        title="Webhooks & Bots"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ icon: 'terminal-square' }}
      />
      <TopnavItem
        href="/"
        title="Moderation"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ icon: 'scissors-02' }}
      />
    </div>

    <div class="my-8 flex h-px w-full bg-divider-gradient" />

    <h3 class="mb-8 text-lg opacity-54">Implementation</h3>
    <div class="grid grid-cols-3 gap-8">
      <TopnavItem
        href="/"
        title="Widgets"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ icon: 'rocket' }}
      />
      <TopnavItem
        href="/"
        title="UI Kits"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ icon: 'stars-02' }}
      />
      <TopnavItem
        href="/"
        title="SDKs & APIs"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget"
        asset={{ icon: 'atom-01' }}
      />
    </div>
  </div>
</div>
