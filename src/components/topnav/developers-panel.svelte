<script lang="ts">
  import TopnavItem from './topnav-item.svelte';
</script>

<div class="container mx-auto flex items-stretch px-4">
  <div class="flex-1 p-12 pl-0">
    <h3 class="mb-8 text-lg opacity-54">Technologies documentation</h3>
    <div class="grid grid-cols-3 gap-8">
      <TopnavItem href="/" title="React" asset={{ icon: 'react', color: 'secondary' }} />
      <TopnavItem href="/" title="Angular" asset={{ icon: 'angular', color: 'secondary' }} />
      <TopnavItem href="/" title="Vue" asset={{ icon: 'vue', color: 'secondary' }} />
      <TopnavItem href="/" title="React Native" asset={{ icon: 'react', color: 'secondary' }} />
      <TopnavItem href="/" title="iOS" asset={{ icon: 'swift', color: 'secondary' }} />
      <TopnavItem href="/" title="Android Java" asset={{ icon: 'android', color: 'secondary' }} />
      <TopnavItem href="/" title="Android Kotlin" asset={{ icon: 'android', color: 'secondary' }} />
      <TopnavItem href="/" title="Ionic/Capacitor" asset={{ icon: 'ionic', color: 'secondary' }} />
      <TopnavItem href="/" title="Flutter" asset={{ icon: 'flutter', color: 'secondary' }} />
      <TopnavItem href="/" title="WordPress" asset={{ icon: 'wordpress', color: 'secondary' }} />
      <TopnavItem href="/" title="PHP" asset={{ icon: 'php', color: 'secondary' }} />
      <TopnavItem href="/" title="Laravel" asset={{ icon: 'laravel', color: 'secondary' }} />
    </div>
  </div>
  <div class="w-px bg-divider-gradient-vertical" />
  <div class="flex-1 p-12 pr-0">
    <h3 class="mb-8 text-lg opacity-54">Documentation</h3>
    <div class="grid grid-cols-2 gap-8">
      <TopnavItem href="/" title="All Documentation" asset={{ icon: 'file-05' }} />
      <TopnavItem href="/" title="Product updates" asset={{ icon: 'refresh-cw-01' }} />
      <TopnavItem href="/" title="Open-source Apps" asset={{ icon: 'grid-01' }} />
      <TopnavItem href="/" title="Product status" asset={{ icon: 'check-verified-02' }} />
      <TopnavItem href="/" title="Tutorials" asset={{ icon: 'play-square' }} />
      <TopnavItem href="/" title="Glossary" asset={{ icon: 'glossary' }} />
    </div>
  </div>
</div>
