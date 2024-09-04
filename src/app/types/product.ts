import { ImageCover } from "./imageCover";

export interface Product {
  id: number;
  name: string;
  description: string;
  color: string;
  image_cover: ImageCover[];
}

export interface CreateProduct {
  name: string;
  description: string;
  color: string;
}
