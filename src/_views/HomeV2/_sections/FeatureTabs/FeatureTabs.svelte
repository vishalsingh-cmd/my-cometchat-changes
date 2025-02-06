<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import { Tabs, TabsList, TabsTrigger, TabsContent } from '$src/_comps/layouts/Tabs';
  import { cn } from '$src/_utils/tailwind.utils';
  import FeatureTabCnt from './FeatureTabCnt.svelte';
  import video0 from './_assets/vid0.mp4';
  import video1 from './_assets/vid1.mp4';
  import video2 from './_assets/vid2.mp4';

  const tabHeaders = ['Visualize & Build', 'Live in Minutes', 'Moderate & Scale'];
</script>

<Section className="relative isolate">
  <Container pyEnabled={false}>
    <div class="flex flex-col text-center">
      <Tabs defaultValue="tab0">
        <TabsList
          className={cn(
            [
              'relative isolate',
              'flex items-center justify-start gap-5',
              'overflow-x-auto overflow-y-clip'
            ],
            ['sm:justify-center'],
            ['lg:gap-8']
          )}
        >
          {#each tabHeaders as tabHeader, index}
            <TabsTrigger
              className={cn(
                [
                  'relative isolate py-6',
                  'font-sans font-semibold text-md text-[#FAFAFF] opacity-54 whitespace-nowrap',
                  'border-b border-b-[#6958BE] border-opacity-0',
                  'hover:opacity-100',
                  'data-[state="active"]:opacity-100 data-[state="active"]:border-opacity-100',
                  'transition-[border-bottom-color,opacity] duration-300'
                ],
                ['lg:text-[22px]']
              )}
              value={`tab${index}`}
            >
              {tabHeader}
              <div
                class={cn([
                  'group-data-[state="active"]/tabsTrigger:opacity-100',
                  'pointer-events-none absolute bottom-0 left-1/2 -z-[1] opacity-0',
                  'h-[135px] w-[203px] -translate-x-1/2 translate-y-3/4',
                  'bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(104,_82,_214,_0.12)_0%,_rgba(104,_82,_214,_0)_100%)]'
                ])}
              />
            </TabsTrigger>
          {/each}

          <div
            class={cn([
              'absolute bottom-0 left-0 right-0 h-[1px]',
              'bg-[linear-gradient(90deg,_rgba(250,_250,_255,_0)_0%,_rgba(250,_250,_255,_0.1)_5%,_rgba(250,_250,_255,_0.1)_95%,_rgba(250,_250,_255,_0)_100%)]'
            ])}
          />
        </TabsList>

        <TabsContent value="tab0">
          <FeatureTabCnt videoSrc={video0} />
        </TabsContent>

        <TabsContent value="tab1">
          <FeatureTabCnt videoSrc={video1} />
        </TabsContent>

        <TabsContent value="tab2">
          <FeatureTabCnt videoSrc={video2} />
        </TabsContent>

        <div
          class={cn([
            'absolute bottom-0 left-0 right-0 h-28',
            'bg-[linear-gradient(180deg,_rgba(10,_9,_20,_0)_0%,_rgba(10,_9,_20,_0.8)_44%,_#0A0914_100%)]'
          ])}
        />
      </Tabs>
    </div>
  </Container>
</Section>
