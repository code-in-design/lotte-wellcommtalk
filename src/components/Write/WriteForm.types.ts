export interface WriteProps extends IsDesktop {
  marginBottom?: number;
  onAfterWrite: () => void;
}

export interface WriteFormValues {
  title: string;
  content: string;
  uploadImages: UploadImage[];
}

interface UploadImage {
  file: File;
  cacheImgPath: string;
}
