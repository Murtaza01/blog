import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  { createBrowserRouter, RouterProvider} from "react-router-dom"
import Root from "./routes/Root.tsx";

const  router = createBrowserRouter([
  {
  path:'/',
  element:<Root />
  }
])
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
