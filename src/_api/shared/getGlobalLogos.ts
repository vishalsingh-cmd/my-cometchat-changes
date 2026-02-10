export const getGlobalLogos = async (storyblokApi: any, { version }: { version: string }) => {
  try {
    const { data } = await storyblokApi.get('cdn/stories/shared-blocks/home-client-v2-shared', {
      version
    });

    // Find the logo_carousel or home_clients block in the story content
    const content = data.story?.content;
    const body = content?.body || [];
    const logoCarousel = body.find((blk: any) =>
      ['logo_carousel', 'home_clients', 'home_clients_v2'].includes(blk.component)
    );

    // Return the clients array from the block, or empty array if not found
    return logoCarousel?.clients || [];
  } catch (error) {
    console.error('Error fetching global logos:', error);
    return [];
  }
};
