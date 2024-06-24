<script lang="ts">
  import { slide } from 'svelte/transition';
  import { circInOut } from 'svelte/easing';
  import { createEventDispatcher, getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  /* 
      User can provide an id 
      useful when using groups and wants to start with a specific accordion expanded
    */
  export let id: string = crypto.randomUUID();
  /* Only works when not in a group */
  export let expanded = false;
  export let neverCollapse = false;
  const dispatch = createEventDispatcher();
  /* when in a group, we get our expanded from its context (only one at a time) */
  let groupExpanded = getContext<Writable<string | null>>('accordion-group-expanded');

  $: isExpanded = neverCollapse
    ? true
    : $groupExpanded !== undefined
    ? $groupExpanded === id
    : expanded;
  const handleClick = () => {
    if (neverCollapse) return;
    dispatch('click', { id });
    if ($groupExpanded !== undefined) {
      /* control group accordion */
      groupExpanded.update((value) => (value === id ? null : id));
    } else {
      /* control independent accordion */
      expanded = !expanded;
    }
  };
</script>

<div {...$$restProps}>
  <slot
    name="header"
    expanded={isExpanded}
    onClick={handleClick}
    attributes={{
      id: `accordion-header-${id}`,
      'aria-expanded': isExpanded,
      'aria-controls': `accordion-panel-${id}`
    }}
  />
  {#if isExpanded}
    <section
      id={`accordion-panel-${id}`}
      aria-labelledby={`accordion-header-${id}`}
      transition:slide|local={{ duration: 300, easing: circInOut }}
    >
      <slot />
    </section>
  {/if}
</div>
