import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";
import HeadphonesPage from "./pages/HeadphonesPage";
import EarphonesPage from "./pages/EarphonesPage";
import SpeakersPage from "./pages/SpeakersPage";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="headphones" element={<HeadphonesPage />} />
      <Route path="earphones" element={<EarphonesPage />} />
      <Route path="speakers" element={<SpeakersPage />} />
    </Route>
  ));
  return (
    <RouterProvider router={router} />
  );
}

export default App;
