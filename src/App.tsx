import {
  Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./app/components/layout/AppLayout";
import CategoryLayout from "./app/components/layout/CategoryLayout";
import ProductLayout from "./app/components/layout/ProductLayout";
import { getAllCategorySlugsWithNames, getAllProductSlugsWithIds } from "./app/utils/product";
import HomePage from "./app/pages/HomePage";
import CategoryPageTemplate from "./app/components/templates/CategoryTemplate";
import ProductPageTemplate from "./app/components/templates/ProductTemplate";

function App() {
  const allCategorySlugsWithNames: { name: string, slug: string }[] = getAllCategorySlugsWithNames();

  const allProductSlugsWithIds: { id: number, slug: string }[] = getAllProductSlugsWithIds();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/category" element={<CategoryLayout />}>
          <Route index element={<Navigate to="/" />} />
          {allCategorySlugsWithNames.map((cat, index) => (
            <Route key={index} path={cat.slug}
              element={<CategoryPageTemplate categoryName={cat.name} />}
            />
          ))}
        </Route>
        <Route path="/product" element={<ProductLayout />}>
          <Route index element={<Navigate to="/" />} />
          {allProductSlugsWithIds.map((prod, index) =>
            <Route key={index} path={prod.slug}
              element={<ProductPageTemplate productId={prod.id} />} />)}
        </Route>
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router}></RouterProvider>
}

export default App;


