import { Category, CategoryName, HomeData } from "../models/Product";
import data from "../data/products.json";

export const getHomeData = (): HomeData[] => {
  return data.home;
};

export const getCategoryList = (): Category[] => {
  return data.categoryList;
};

export const getCategoryNames = (): CategoryName[] => {
  return data.categoryList.map((cat) => cat.name.toLowerCase());
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
