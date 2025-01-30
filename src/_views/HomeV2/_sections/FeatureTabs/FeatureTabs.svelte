<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import { Tabs, TabsList, TabsTrigger, TabsContent } from '$src/_comps/layouts/Tabs';
</script>

<Section className="relative isolate">
  <Container isHero={true}>
    <div class="flex flex-col text-center">
      <script lang="ts">
        import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/Tabs';
      </script>

      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Password</TabsTrigger>
          <TabsTrigger value="tab3">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="tab1">
          <h3>Account</h3>
          <p>Make changes to your account settings here.</p>
        </TabsContent>

        <TabsContent value="tab2">
          <h3>Password</h3>
          <p>Change your password here.</p>
        </TabsContent>

        <TabsContent value="tab3">
          <h3>Settings</h3>
          <p>Manage your preferences here.</p>
        </TabsContent>
      </Tabs>
    </div>
  </Container>
</Section>
