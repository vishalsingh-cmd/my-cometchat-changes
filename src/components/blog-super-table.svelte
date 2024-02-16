<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { BlogAnnouncementSidebarStoryblok } from '$types/bloks';
  import { cn } from '$lib/utils';

  export let block: BlogAnnouncementSidebarStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'wrap sticky top-[80px] flex h-fit max-w-[272px] flex-col gap-3 space-y-3 overflow-clip rounded-3xl bg-white p-6 text-black shadow-lg md:block'
    )}
  >
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="divide-gray-300 min-w-full divide-y">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="text-gray-900 py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6"
                    >Name</th
                  >
                  <th scope="col" class="text-gray-900 px-3 py-3.5 text-left text-sm font-semibold"
                    >Title</th
                  >
                  <th scope="col" class="text-gray-900 px-3 py-3.5 text-left text-sm font-semibold"
                    >Email</th
                  >
                  <th scope="col" class="text-gray-900 px-3 py-3.5 text-left text-sm font-semibold"
                    >Role</th
                  >
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-gray-200 divide-y bg-white">
                <tr>
                  <td
                    class="text-gray-900 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6"
                    >Lindsay Walton</td
                  >
                  <td class="text-gray-500 whitespace-nowrap px-3 py-4 text-sm"
                    >Front-end Developer</td
                  >
                  <td class="text-gray-500 whitespace-nowrap px-3 py-4 text-sm"
                    >lindsay.walton@example.com</td
                  >
                  <td class="text-gray-500 whitespace-nowrap px-3 py-4 text-sm">Member</td>
                  <td
                    class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit<span class="sr-only">, Lindsay Walton</span></a
                    >
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
