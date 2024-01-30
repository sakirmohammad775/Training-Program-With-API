import {createBrowserRouter} from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Root from "../Component/Root/Root";
import Details from "../Details/Details";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../NotFound/NotFound";


const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path:"/services/:id",
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:()=>fetch('../service.json')
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'*',
          element:<NotFound></NotFound>

        }
      ]
    }
  
  ]);

export default router