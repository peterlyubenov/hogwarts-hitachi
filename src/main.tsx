import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { theme, ConfigProvider } from "antd";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

import "./index.css";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const antTheme = {
  token: {
    colorPrimary: "#75af64",
    colorInfo: "#75af64",
    sizeStep: 4,
  },

  algorithm: [theme.darkAlgorithm],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={antTheme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
