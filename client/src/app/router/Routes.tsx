import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import Home from "../../features/home/Home";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/form/ActivityForm";
import ActivityDetail from "../../features/activities/details/ActivityDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "activities", element: <ActivityDashboard /> },
      { path: `activities/:id`, element: <ActivityDetail /> },
      { path: "createActivity", element: <ActivityForm key='create' /> },
      { path: "manage/:id", element: <ActivityForm /> }
    ]
  }
])
