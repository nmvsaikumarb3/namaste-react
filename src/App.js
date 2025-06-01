import { lazy, Suspense,useState, useEffect,UserContext,Provider } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Error from "./components/Errror";
import RestorentMenu from "./components/RestorentMenu";
import { Provider, Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const [userName,setUserName] = useState();

  useEffect(()=>{
    const data = {
      name:"sai kumar",
    }; 
    setUserName(data.name)
  },[]);
  return (
    <Provider store={appStore} >
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const LazyGrocery = lazy(() => import("./components/Grocery")); // Rename the lazy-loaded component

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restorent/:id",
        element: <RestorentMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <LazyGrocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);