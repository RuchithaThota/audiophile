import {
  Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import CategoryLayout from "./components/layout/CategoryLayout";
import CategoryPageTemplate from "./components/templates/CategoryTemplate";
import { getAllCategorySlugsWithNames, getAllProductSlugsWithIds } from "./utils/product";
import ProductLayout from "./components/layout/ProductLayout";
import ProductPageTemplate from "./components/templates/ProductTemplate";

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
          {allProductSlugsWithIds.map((prod, index) =>
            <Route key={index} path={prod.slug}
              element={<ProductPageTemplate productId={prod.id} />} />)}
        </Route>
      </Route>
    )
  )
  return <RouterProvider router={router}></RouterProvider>
}

export default App;


