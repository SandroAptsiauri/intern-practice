export type TPhoto = {
  id: string;
  width: number;
  height: number;
  downloads: number;
  likes: number;
  description: string;
  urls: TPhotoUrls;
  views:number;
};
export type TPhotoUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};
