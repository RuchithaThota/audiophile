export type ImageAsset = { url: string };
export type ProductImage = { mobile: string; tablet: string; desktop: string };
export type CategoryName = string;
export interface HomeData {
  id: number;
  slug: string;
  name: string;
  isNew: boolean;
  image: ImageAsset[];
  description?: string;
}
export interface Category {
  id: number;
  name: string;
  slug: string;
  image: ImageAsset;
}
export interface CategoryProduct {
  id: number;
  name: string;
  description: string;
  image: ProductImage;
  isNew: boolean;
  slug: string;
}
