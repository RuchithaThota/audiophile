export type ImageAsset = { url: string };
export type ProductImage = { mobile: string; tablet: string; desktop: string };
export type RecommendedProduct = {
  slug: string;
  name: string;
  image: ProductImage;
};
export type BoxItem = { quantity: number; item: string };
export type ProductGallery = {
  first: ProductImage;
  second: ProductImage;
  third: ProductImage;
};
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
export interface Product extends CategoryProduct {
  recommended: RecommendedProduct[];
  features: string;
  boxItems: BoxItem[];
  price: number;
  gallery: ProductGallery;
  cartImage: string;
  shortName: string;
}
