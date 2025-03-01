<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import Logo from './_comps/Logo.svelte';
  import NavCtas from './_comps/NavCtas.svelte';
  import NavItems from './_comps/NavItems.svelte';
</script>

<header class={cn(['relative z-50'])}>
  <Container pyEnabled={false} className="py-6">
    <nav class={cn(['flex items-center justify-between'])}>
      <Logo />
      <NavItems />
      <NavCtas />
    </nav>
  </Container>
</header>
