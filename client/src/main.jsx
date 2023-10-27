import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
 createBrowserRouter,
 createRoutesFromElements,
 Route,
 RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import { StyledEngineProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
   <Route index element={<Home />} />
  </Route>
 )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <QueryClientProvider client={queryClient}>
   <StyledEngineProvider injectFirst>
    <RouterProvider router={router} />
   </StyledEngineProvider>
  </QueryClientProvider>
 </React.StrictMode>
);
