import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Create from "./pages/create/Create";
import NotFound from "pages/NotFound";
import Userdetails from "pages/Details/Userdetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="add" element={<Create />} />
      <Route path="userDetails/:id" element={<Userdetails />} />
      <Route path="*" element={<NotFound />} />

    </Route>
  )
);
function App() {
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;
