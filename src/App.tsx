import {
  Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./components/pages/HomePage";
import CategoryLayout from "./components/layout/CategoryLayout";
import CategoryPageTemplate from "./components/templates/CategoryPageTemplate";
import { getCategoryNames } from "./utils/product";
import { CategoryName } from "./models/Product";

function App() {
  const categoryNames: CategoryName[] = getCategoryNames();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/category" element={<CategoryLayout />}>
          <Route index element={<Navigate to="/" />} />
          {categoryNames.map((catName, index) => (
            <Route key={index} path={catName} element={<CategoryPageTemplate
              categoryName={catName} />} />
          ))}
        </Route>
      </Route>
    )
  )
  return <RouterProvider router={router}></RouterProvider>
}

export default App;


