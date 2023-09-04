<script lang="ts">
  import ClickableBadge from '$components/clickable-badge.svelte';
  import type { ComponentProps } from 'svelte';

  type $$Props = ComponentProps<ClickableBadge>;
</script>

<div data-theme="light" class="flex h-[200px] items-center gap-10 px-5">
  <ClickableBadge review={3.3} />
</div>
<div data-theme="dark" class="flex h-[200px] items-center gap-10 bg-gray-3 px-5">
  <ClickableBadge review={3.3} />
</div>
