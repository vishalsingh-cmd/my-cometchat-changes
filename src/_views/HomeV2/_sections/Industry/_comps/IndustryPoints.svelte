<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Icon from '$src/components/icon/icon.svelte';
</script>

<div class="flex flex-col">
  <ul class={cn('flex flex-col gap-3')}>
    <li class="flex-start flex gap-2">
      <Icon icon="star-04" size="xs" class={cn('mt-1 flex-shrink-0', 'text-brand-9')} />
      <p class="text-xl font-medium leading-snug tracking-wide opacity-74">
        Prevent platform disintermediation with monitored conversations.
      </p>
    </li>

    <li class="flex-start flex gap-2">
      <Icon icon="star-04" size="xs" class={cn('mt-1 flex-shrink-0', 'text-brand-9')} />
      <p class="text-xl font-medium leading-snug tracking-wide opacity-74">
        Drive faster deal closure with file sharing, interactive messages and payments.
      </p>
    </li>

    <li class="flex-start flex gap-2">
      <Icon icon="star-04" size="xs" class={cn('mt-1 flex-shrink-0', 'text-brand-9')} />
      <p class="text-xl font-medium leading-snug tracking-wide opacity-74">
        Keep conversations organized with order-context messaging.
      </p>
    </li>
  </ul>
  <!-- <img src={indurstryShow} alt="indurstry features" /> -->
</div>
