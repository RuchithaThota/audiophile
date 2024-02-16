import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
    </Route>
  ));
  return (
    <RouterProvider router={router} />
  );
}

export default App;
