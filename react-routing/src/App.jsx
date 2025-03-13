import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import { Children } from "react";
import Courses from "./components/Courses";
import Mocktests from "./components/Mocktests";
import Reports from "./components/Reports";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: 
      <div>
        <Navbar />
        <Dashboard />
      </div>,
    children : [//This is nested routing
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'mocktests',
          element:<Mocktests/>
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
  },
  {
    path:"/:id",
    element:(
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
  {
    path:'*',
    element:<NotFound/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
