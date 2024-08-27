import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import BasicCharts from "./components/basicCharts";

export const AppRoutes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <BasicCharts />,
        },
        {
          path: "basic-echarts",
          element: <BasicCharts />,
        },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
    },
  }
);

function App() {
  return <RouterProvider router={AppRoutes} />;
}

export default App;
