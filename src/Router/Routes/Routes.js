import { createBrowserRouter } from "react-router-dom";
import Four04page from "../../Four04Page/Four04page";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import FullDetails from "../../Pages/Home/FullDetails/FullDetails";
import Home from "../../Pages/Home/Home/Home";
import ServicesAll from "../../Pages/Home/Services/ServicesAll.js";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import SignUp from "../../Pages/Shared/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "/allservices",
        element: <ServicesAll></ServicesAll>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoutes>
            <MyReviews></MyReviews>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/fulldetails/:id",
        element: <FullDetails></FullDetails>,
        loader: ({ params }) => fetch(`https://home-food-server-app.vercel.app/services/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Four04page></Four04page>,
  },
]);
export default router;
