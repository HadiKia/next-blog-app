const getUrlExtension = (url: string): string => {
  return url.split(/[#?]/)[0].split(".").pop()?.trim() ?? "";
};

const getFilename = (url: string): string => {
  // const  filename = url.substr( url.lastIndexOf("/") + 1);
  return url.split("/").pop() ?? "image";
};

export const imageUrlToFile = async (imgUrl: string): Promise<File> => {
  // imageUrl: http://localhost:5000/uploads/coverImage/2024/7/19/1724017069375-549767148.png
  // var imgExt = getUrlExtension(imgUrl);

  const response = await fetch(imgUrl);
  const blob = await response.blob();
  const file = new File([blob], getFilename(imgUrl), {
    type: blob.type,
  });
  return file;
};
