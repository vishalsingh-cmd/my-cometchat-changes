export const getFileExtension = (filename: string): string => {
  const parts = filename.split('.');
  return parts[parts.length - 1];
};

export const VIDEO_EXTENSIONS = ['mp4', 'webm', 'ogg', 'mov'];
export const IMAGE_EXTENSIONS = ['png', 'webp', 'jpeg', 'gif', 'svg'];
