import React from "react";

const HomePage = React.lazy(() => import("./Container/Home"));
const Login = React.lazy(() => import("./Container/Auth/login"));
const Signup = React.lazy(() => import("./Container/Auth/signup"));
const Dashboard = React.lazy(() => import("./Container/Dashboard/dashboard"));
const Profile = React.lazy(() => import("./Container/Dashboard/profile"));
const NotFound = React.lazy(() => import("./Container/NotFound"));
const DefaultLayout = React.lazy(() => import("./Container/DefaultLayout"));
const DashboardLayout = React.lazy(() => import("./Container/DashboardLayout"));

const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: HomePage,
    layout: DefaultLayout,
  },
  {
    path: "/login",
    exact: true,
    name: "Login",
    component: Login,
    layout: DefaultLayout,
  },
  {
    path: "/signup",
    exact: true,
    name: "Signup",
    component: Signup,
    layout: DefaultLayout,
  },
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
    layout: DashboardLayout,
  },
  {
    path: "/profile",
    exact: true,
    name: "Profile",
    component: Profile,
    layout: DashboardLayout,
  },
  {
    path: "*",
    exact: false,
    name: "404",
    component: NotFound,
    layout: DefaultLayout,
  },
];

export default routes;
