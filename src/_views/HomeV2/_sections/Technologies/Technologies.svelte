<script>
  import { cn } from '$src/_utils/tailwind.utils';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import Button from '$src/components/buttons/button.svelte';
  import ChipCard from './_comps/ChipCard.svelte';
  import { techLeftData, techRightData } from './_datas/techs.data';
  import ChipCircle from './_comps/ChipCircle.svelte';
  import ChipBorder from './_comps/ChipBorder.svelte';
  import MotherChipVector from './_comps/MotherChipVector.svelte';
</script>

<Section>
  <Container>
    <div class="flex flex-col items-center">
      <HeadingLatest as="h2" varient="h6" class="text-center text-[#6852D6]">
        Technologies
      </HeadingLatest>
      <HeadingLatest as="h3" class={cn(['mt-2 text-center'], ['lg:mt-3'])}>
        Framework-agnostic. <br /> Developer-approved
      </HeadingLatest>
      <Button
        class={cn(['mt-5 w-max'], ['lg:mt-8'])}
        variant="secondary"
        href="/docs"
        target="_blank"
        as="a"
      >
        See documentation
      </Button>
    </div>

    <div
      class={cn(
        ['relative isolate', 'mt-10 grid grid-cols-1 gap-6'],
        ['lg:mx-auto lg:w-max lg:grid-cols-[auto_auto_auto] lg:gap-10'],
        ['xl:gap-12']
      )}
    >
      <div class={cn(['relative isolate', 'grid grid-cols-1'])}>
        <ChipBorder direction="vertical" className="-z-[1] translate-y-3 lg:translate-y-0" />
        {#each techLeftData as _, i}
          {#if i % 2 === 0}
            <div
              class={cn(
                [
                  'group/chipRow',
                  'relative isolate',
                  'grid grid-cols-2 gap-4 py-2',
                  'mx-auto w-max'
                ],
                ['lg:py-3']
              )}
            >
              <ChipCard icon={techLeftData[i].icon} href={techLeftData[i].href} />
              {#if techLeftData[i + 1]}
                <ChipCard icon={techLeftData[i + 1].icon} href={techLeftData[i + 1].href} />
              {/if}

              <ChipBorder
                direction="horizontal"
                className={cn(['group-last-of-type/chipRow:hidden'], ['lg:w-[calc(100%+16px)]'])}
              />
              <ChipCircle
                position="bottomMiddle"
                className={cn(['group-last-of-type/chipRow:hidden'])}
              />

              <ChipBorder
                direction="vertical"
                className={cn(
                  ['hidden group-[:nth-of-type(3)]/chipRow:block'],
                  ['lg:w-[1px] lg:h-full right-[unset] left-[calc(100%+16px)] -translate-x-1/2']
                )}
              />
            </div>
          {/if}
        {/each}
      </div>

      <MotherChipVector className={cn(['w-full relative z-[2]'], ['lg:my-auto'])} />

      <div class={cn(['relative isolate', 'grid grid-cols-1'])}>
        <ChipBorder direction="vertical" className="-z-[1] -translate-y-10 lg:translate-y-0" />
        {#each techRightData as _, i}
          {#if i % 2 === 0}
            <div
              class={cn(
                [
                  'group/chipRow',
                  'relative isolate',
                  'grid grid-cols-2 gap-4 py-2',
                  'mx-auto w-max'
                ],
                ['lg:py-3']
              )}
            >
              <ChipCard icon={techRightData[i].icon} href={techRightData[i].href} />
              {#if techRightData[i + 1]}
                <ChipCard icon={techRightData[i + 1].icon} href={techRightData[i + 1].href} />
              {/if}

              <ChipBorder
                direction="horizontal"
                className={cn(
                  ['group-last-of-type/chipRow:hidden'],
                  ['lg:w-[calc(100%+16px)] lg:translate-x-[-16px]']
                )}
              />
              <ChipCircle
                position="bottomMiddle"
                className={cn(['group-last-of-type/chipRow:hidden'])}
              />

              <ChipBorder
                direction="vertical"
                className={cn(
                  ['hidden group-[:nth-of-type(3)]/chipRow:block'],
                  ['lg:w-[1px] lg:h-full right-[unset] left-[calc(0%-16px)] -translate-x-1/2']
                )}
              />
            </div>
          {/if}
        {/each}
      </div>

      <ChipBorder
        direction="horizontal"
        className={cn(
          [
            'hidden lg:block',
            'w-[225px] left-1/2 top-1/2 z-[-1]',
            '-translate-x-1/2 -translate-y-1/2'
          ],
          ['xl:w-[240px]']
        )}
      />
    </div>
  </Container>
</Section>
