import React, { Suspense, lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Shimmer from './Shimmer/Shimmer';
import ErrorPage from './pages/ErrorPage';
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const CategoryLayout = lazy(() => import("./layout/CategoryLayout"));
const HeadphonesPage = lazy(() => import("./pages/HeadphonesPage"));
const EarphonesPage = lazy(() => import("./pages/EarphonesPage"));
const SpeakersPage = lazy(() => import("./pages/SpeakersPage"));

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"
      element={<Suspense fallback={<Shimmer />}><AppLayout /></Suspense>}
      errorElement={<ErrorPage />}
    >
      <Route index
        element={<Suspense fallback={<Shimmer />}><HomePage /></Suspense>} />
      <Route path="category"
        element={<Suspense fallback={<Shimmer />}><CategoryLayout /></Suspense>} >
        <Route path="headphones"
          element={<Suspense fallback={<Shimmer />}><HeadphonesPage /></Suspense>} />
        <Route path="earphones"
          element={<Suspense fallback={<Shimmer />}><EarphonesPage /></Suspense>} />
        <Route path="speakers"
          element={<Suspense fallback={<Shimmer />}><SpeakersPage /></Suspense>} />
      </Route>
    </Route>
  ));
  return (
    <RouterProvider router={router} />
  );
}

export default App;
