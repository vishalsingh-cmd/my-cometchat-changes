import { isStatusError } from '$lib/error';
import { Storyblok } from '$lib/storyblok';
import { ISbStoryData } from '@storyblok/js';
import { error } from '@sveltejs/kit';
import type { NewHeaderStoryblok } from '$src/_bricks/NewHeader_V3/newHeader.types';

interface Props {
  storyblok: Storyblok;
  version: 'draft' | 'published';
}
export const getNewHeaderV3 = async (props: Props) => {
  const { storyblok, version } = props;
  try {
    const newHeader = await storyblok.get('cdn/stories/configuration/new-header-v3', {
      version
    });

    return newHeader.data.story as ISbStoryData<NewHeaderStoryblok>;
  } catch (err) {
    if (isStatusError(err) && err.status === 404) throw error(404, 'Not found');
    throw new Error('Failed to load layout data', { cause: err });
  }
};
