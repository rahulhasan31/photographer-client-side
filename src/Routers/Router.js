import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Pages/PrivateRoute";
import Register from "../Pages/Register/Register";
import Reviews from "../Shared/Reviews";
import Services from "../Shared/Services";
import ServicesDetails from "../Shared/ServicesDetails";

const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [

        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>

        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'/services',
          element:<PrivateRoute><Services></Services></PrivateRoute>,
          loader: ()=> fetch('http://localhost:5000/services')
        },
        {
          path: "/services/:id",
          element: <ServicesDetails></ServicesDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`) 
        },
       
        {
            path : '/reviews',
            element: <Reviews></Reviews>
        }
    
    ]
    
  }

])
   




export default router