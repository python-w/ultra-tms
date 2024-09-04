import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import CustomDrawer from "../components/Navigation/CustomDrawer";
import FirstSubItem from '../pages/MainSetup';

const UTRouter = createBrowserRouter([
  {
    path: "/",
    element: <CustomDrawer />,
    children: [
      {
        path: "/fm-first-sub-item",
        element: <FirstSubItem />,
      },
      {
        path: "/fm-second-sub-item",
        element: <FirstSubItem />,
      },
    ],
  },
]);


export default UTRouter;