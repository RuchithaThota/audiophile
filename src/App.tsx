import React, { Suspense } from "react";
import {
  Navigate,
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import ModalContextProvider from "./context/ModalContext";
import ToastContextProvider from "./context/ToastContext";
import { getAllCategorySlugsWithNames, getAllProductSlugsWithIds } from "./app/utils/product";
import PrivateRoutes from "./routes/PrivateRoutes";
import LoginPage from "./app/pages/LoginPage";
import Fallback from "./app/components/atoms/Fallback";
const AppLayout = React.lazy(() => import("./app/components/layout/AppLayout"));
const CheckoutPage = React.lazy(() => import("./app/pages/CheckoutPage"));
const HomePage = React.lazy(() => import("./app/pages/HomePage"));
const CategoryPageTemplate = React.lazy(() =>
  import("./app/components/templates/CategoryTemplate"))
const ProductPageTemplate = React.lazy(() =>
  import("./app/components/templates/ProductTemplate"))

function App() {
  const allCategorySlugsWithNames: { name: string, slug: string }[] = getAllCategorySlugsWithNames();

  const allProductSlugsWithIds: { id: number, slug: string }[] = getAllProductSlugsWithIds();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Suspense fallback={<Fallback />}><AppLayout /></Suspense>}>
        <Route index element={<Suspense fallback={<Fallback />}><HomePage /></Suspense>} />
        {allCategorySlugsWithNames.map((cat, index) => (
          <Route key={index} path={`category/${cat.slug}`}
            element={<Suspense fallback={<Fallback />}>
              <CategoryPageTemplate categoryName={cat.name} /></Suspense>}
          />
        ))}
        <Route path="login" element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="checkout" element={<Suspense fallback={<Fallback />}><CheckoutPage /></Suspense>} />
        </Route>
        {allProductSlugsWithIds.map((prod, index) =>
          <Route key={index} path={`product/${prod.slug}`}
            element={<Suspense fallback={<Fallback />}>
              <ProductPageTemplate productId={prod.id} /></Suspense>} />)}
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



