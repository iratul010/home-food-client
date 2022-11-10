import { createBrowserRouter } from "react-router-dom";
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
        path: "/serviceall",
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
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
export default router;
