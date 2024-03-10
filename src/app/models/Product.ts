type DeviceSizes = "mobile" | "tablet" | "desktop";

export type ImageAsset = { url: string };

export type RecommendedProduct = {
  slug: string;
  name: string;
  image: ProductImage;
  placeholderImage: ProductImage;
};
export type BoxItem = { quantity: number; item: string };

export type ProductImage = Record<DeviceSizes, string>;

export type GalleryItem = {
  image: ProductImage;
  placeholderImage: ProductImage;
};

export type ProductGallery = {
  first: GalleryItem;
  second: GalleryItem;
  third: GalleryItem;
};
export interface HomeData {
  id: number;
  slug: string;
  name: string;
  isNew: boolean;
  image: ProductImage;
  placeholderImage: ProductImage;
  description?: string;
}
export interface Category {
  id: number;
  name: string;
  slug: string;
  image: ImageAsset;
  placeholderImage: ImageAsset;
}
export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  categoryImage: GalleryItem;
  isNew: boolean;
  slug: string;
}
export interface ProductDetails extends Product {
  cartImage: string;
  shortName: string;
  image: ProductImage;
  price: number;
  placeholderImage: ProductImage;
  recommended: RecommendedProduct[];
  features: string;
  boxItems: BoxItem[];
  gallery: ProductGallery;
}
