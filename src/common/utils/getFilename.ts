export const getFilenameFromImageUrl = (imageUrl: string) => {
  return decodeURIComponent(imageUrl).split('?')[0].split('/').pop();
};
