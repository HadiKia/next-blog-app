export const formatFileSize = (sizeInBytes) => {
  const sizeInKB = sizeInBytes / 1024;

  if (sizeInKB < 1024) {
    return `${sizeInKB.toFixed(1)} کیلوبایت`;
  }

  const sizeInMB = sizeInKB / 1024;
  return `${sizeInMB.toFixed(2)} مگابایت`;
};
