import {
  Navigate,
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./app/components/layout/AppLayout";
import { getAllCategorySlugsWithNames, getAllProductSlugsWithIds } from "./app/utils/product";
import HomePage from "./app/pages/HomePage";
import CategoryPageTemplate from "./app/components/templates/CategoryTemplate";
import ProductPageTemplate from "./app/components/templates/ProductTemplate";
import CheckoutPage from "./app/pages/CheckoutPage";
import { Provider } from "react-redux";
import { store } from "./store";
import ModalContextProvider from "./context/ModalContext";
import ToastContextProvider from "./context/ToastContext";
import LoginPage from "./app/pages/LoginPage";

function App() {
  const allCategorySlugsWithNames: { name: string, slug: string }[] = getAllCategorySlugsWithNames();

  const allProductSlugsWithIds: { id: number, slug: string }[] = getAllProductSlugsWithIds();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        {allCategorySlugsWithNames.map((cat, index) => (
          <Route key={index} path={`category/${cat.slug}`}
            element={<CategoryPageTemplate categoryName={cat.name} />}
          />
        ))}
        <Route path="login" element={<LoginPage />} />
        {allProductSlugsWithIds.map((prod, index) =>
          <Route key={index} path={`product/${prod.slug}`}
            element={<ProductPageTemplate productId={prod.id} />} />)}
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    )
  )
  return <ModalContextProvider>
    <ToastContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ToastContextProvider >
  </ModalContextProvider>
}

export default App;


