<script lang="ts">
  import Button from '$components/buttons/button.svelte';
  import Icon from '$components/icon/icon.svelte';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';
  import { paragraph } from '$components/rich-text/rich-text-store';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { PricingHeroQ3Y24CardV1Storyblok } from '$types/bloks';

  export let block: PricingHeroQ3Y24CardV1Storyblok;
  export let value;

  let price;
  $: price = value?.price ?? '';

  let isBilledAnnually;
  $: isBilledAnnually = value?.isBilledAnnually ?? false;
</script>

{#if block}
  {@const { name, description, credits, highlights, cta, custom_price, tag, custom_label } = block}
  <div
    class={cn(
      'w-full md:h-full',
      tag && 'mt-8 rounded-b-3xl border border-brand-9/25 lg:mt-0',
      !tag && 'rounded-3xl border border-gray-12/[0.1]',
      ' bg-brand-12/[0.03] backdrop-blur-[30px]'
    )}
    style="background: {!tag
      ? 'linear-gradient(0deg, rgba(250, 250, 255, 0.04) 0%, rgba(250, 250, 255, 0.04) 100%), #0A0914;'
      : 'linear-gradient(180deg, rgba(104, 83, 214, 0.06) 0%, rgba(104, 83, 214, 0.006) 100%), rgba(250, 250, 255, 0.09)'};
box-shadow:{!tag ? '' : '0px 0px 40px rgba(104, 83, 214, 0.24)'}"
  >
    {#if tag}
      <p
        class="absolute -left-[1.5px] -top-10 flex h-10 w-[101%] items-center justify-center rounded-t-3xl border border-brand-12/2 bg-brand-9 text-md font-[640]"
      >
        {tag}
      </p>{/if}
    <div class={cn('p-5 md:p-6', 'flex w-full flex-shrink-0 flex-grow-0 flex-col justify-between')}>
      <div class={cn('flex flex-col')}>
        <div class={cn('flex flex-col text-gray-12')}>
          <div class="flow-row flex w-full items-center justify-between">
            <p class={cn('text-xl/tighter font-semibold')}>
              {name}
            </p>
          </div>
          {#if description}
            {#if typeof description != 'string' && description.content}
              {#each description.content as content}
                <p
                  class={cn(
                    paragraph,
                    'mt-3 h-14 text-sm/snug font-medium tracking-wide opacity-64'
                  )}
                >
                  {@html resolver.render(content)}
                </p>
              {/each}
            {:else}
              <p class="py-1 text-lg/snug font-medium tracking-wide opacity-64">{description}</p>
            {/if}
          {/if}

          {#if credits}
            <div class="mt-[40px] flex items-center gap-2">
              <Icon icon="zap-circle" class="h-[19px] w-[19px] flex-shrink-0 text-gray-11" />
              <p class="text-md/snug font-medium leading-snug tracking-wide opacity-75">
                {credits}
                {'Credits'}
              </p>
            </div>
            <div class="mt-6 h-px w-full bg-gray-12/[0.1]" />
          {/if}

          <div
            class={cn(
              'mb-8 mt-8 flex h-[68px] flex-col gap-2 text-2xl/tighter font-semibold lg:mt-6'
            )}
          >
            <p
              class={cn(
                'font-semibold tracking-wide',
                price.startsWith('$') && 'text-2xl/snug',
                !price.startsWith('$') && 'text-xl/normal'
              )}
            >
              {#if custom_price}
                {custom_price}
              {:else if price}
                {price}
              {/if}
              {#if price.startsWith('$')}
                <span class="-ml-1.5 text-md/snug font-medium opacity-64">/month</span>
              {/if}
            </p>

            <p class="text-md/snug font-medium opacity-64">
              {#if custom_label}
                {custom_label}
              {:else if isBilledAnnually && price.startsWith('$')}
                {'Billed annually'}
              {:else if custom_price}
                {'Free Forever'}
              {/if}
            </p>
          </div>

          {#if cta[0].link && price.startsWith('$')}
            {@const { href, target, rel } = getAnchorFromCmsLink(cta[0].link)}
            <Button
              as="a"
              variant={cta[0].variant}
              {href}
              {target}
              {rel}
              class="w-full self-start md:w-fit">{cta[0].label}</Button
            >
          {:else}
            {@const { href, target, rel } = getAnchorFromCmsLink(cta[1].link)}
            <Button
              as="a"
              variant={cta[0].variant}
              {href}
              {target}
              {rel}
              class="w-full self-start md:w-fit">{cta[1].label}</Button
            >
          {/if}
        </div>

        <div class="mt-6 h-px w-full bg-gray-12/[0.1]" />

        {#if highlights[0]?.highlights1?.length > 0}
          <div class="mt-6 flex flex-col gap-2">
            {#if highlights[0]?.title}
              <p class="mb-1 text-lg/tight font-semibold">{highlights[0]?.title}</p>
            {/if}
            {#each highlights[0]?.highlights1 as highlight, index}
              <div class="flex items-start gap-2">
                <Icon icon="star-04" class="mt-1.5 h-3.5 w-3.5 flex-shrink-0 text-brand-9" />
                {#if typeof highlight.value != 'string' && highlight?.value?.content}
                  <div>
                    {#each highlight.value.content as content}
                      <p
                        class={cn(
                          paragraph,
                          'text-md/snug font-medium tracking-wide opacity-[85%]'
                        )}
                      >
                        {@html resolver.render(content)}
                      </p>
                    {/each}
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        {/if}
        {#if highlights[0]?.highlights2?.length > 0}
          <div class="mt-4 flex flex-col gap-3 border-t border-gray-6 pt-4">
            <div class="flex flex-col gap-2">
              {#each highlights[0]?.highlights2 as highlight}
                <div class="flex items-start gap-2">
                  <Icon icon="check" class="mt-1.5 h-3.5 w-3.5 flex-shrink-0 text-orange-9" />
                  {#if typeof highlight.value != 'string' && highlight?.value?.content}
                    <div>
                      {#each highlight.value.content as content}
                        <p
                          class={cn(
                            paragraph,
                            'text-md/snug font-medium tracking-wide opacity-[85%]'
                          )}
                        >
                          {@html resolver.render(content)}
                        </p>
                      {/each}
                    </div>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
