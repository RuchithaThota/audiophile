import { Category, HomeData, Product } from "../models/Product";
import data from "../data/products.json";

export const getHomeData = (): HomeData[] => {
  return data.home;
};

export const getCategoryList = (): Category[] => {
  return data.categoryList;
};

export const getAllCategorySlugsWithNames = (): {
  name: string;
  slug: string;
}[] => {
  return data.categoryList.map((cat) => {
    return { slug: cat.slug, name: cat.name };
  });
};

export const getAllProductSlugsWithIds = (): { id: number; slug: string }[] => {
  return data.products.map((product) => {
    return {
      id: product.id,
      slug: product.slug,
    };
  });
};

export const getCategoryProductsByName = (category: string) => {
  return data.products
    .filter((product) => product.category === category)
    .map((product) => {
      return {
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        isNew: product.new,
        description: product.description,
      };
    });
};

export const getProductById = (id: number): Product | undefined => {
  const product = data.products.find((product) => product.id === id);
  if (!product) return undefined;
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    image: product.image,
    isNew: product.new,
    slug: product.slug,
    recommended: product.others,
    features: product.features,
    boxItems: product.includedItems,
    price: product.price,
    gallery: product.gallery,
  };
};
