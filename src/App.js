import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import CategoryLayout from "./layout/CategoryLayout";
import HeadphonesPage from "./pages/HeadphonesPage";
import EarphonesPage from "./pages/EarphonesPage";
import SpeakersPage from "./pages/SpeakersPage";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="category" element={<CategoryLayout />} >
        <Route path="headphones" element={<HeadphonesPage />} />
        <Route path="earphones" element={<EarphonesPage />} />
        <Route path="speakers" element={<SpeakersPage />} />
      </Route>
    </Route>
  ));
  return (
    <RouterProvider router={router} />
  );
}

export default App;
