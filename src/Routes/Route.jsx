import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import CardDetails from "../components/DataCard/CardDetails";
import Login from "../Pages/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";




const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path:'/about',
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:'/contact',
        element:<PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path:'/dataCard/:id',
        element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader:()=> fetch('/data.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

export default router;