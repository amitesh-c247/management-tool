import React from "react";

const HomePage = React.lazy(() => import("./Container/Home"));
const AboutPage = React.lazy(() => import("./Components/about"));
const Blog = React.lazy(() => import("./Container/Blog"));
const BlogDetail = React.lazy(() => import("./Container/Blog/blogDetail"));
const Login = React.lazy(() => import("./Container/Auth/login"));
const Signup = React.lazy(() => import("./Container/Auth/signup"));
const ContactUs = React.lazy(() => import("./Container/ContactUs"));
const Dashboard = React.lazy(() => import("./Container/Dashboard/dashboard"));
const Profile = React.lazy(() => import("./Container/Dashboard/profile"));
const NotFound = React.lazy(() => import("./Container/NotFound"));
const DefaultLayout = React.lazy(() =>import("./Container/DefaultLayout"));
const DashboardLayout = React.lazy(() =>import("./Container/DashboardLayout"));
const Editor = React.lazy(() =>import("./Container/Dashboard/editor"));
const CropperTool = React.lazy(() =>import("./Container/Cropper"));
const PdfPage = React.lazy(() =>import("./Container/Pdf"))
const Movies = React.lazy(() =>import("./Container/Movies"))

const routes = [
    {
        path: "/",
        exact: true,
        name: "Home",
        component: HomePage,
        layout: DefaultLayout
    },
    {
        path: "/about",
        exact: true,
        name: "About",
        component: AboutPage,
        layout: DefaultLayout
    },
    {
        path: "/blog",
        exact: true,
        name: "Blog",
        component: Blog,
        layout: DefaultLayout
    },
    {
        path: "/cropper",
        exact: true,
        name: "CropperTool",
        component: CropperTool,
        layout: DefaultLayout
    },
    {
        path: "/blog/detail/:id",
        exact: true,
        name: "BlogDetail",
        component: BlogDetail,
        layout: DefaultLayout
    },
    {
        path: "/movies",
        exact: true,
        name: "Movies",
        component: Movies,
        layout: DefaultLayout
    },
    {
        path: "/login",
        exact: true,
        name: "Login",
        component: Login,
        layout: DefaultLayout
    },
    {
        path: "/signup",
        exact: true,
        name: "Signup",
        component: Signup,
        layout: DefaultLayout
    },
    {
        path: "/dashboard",
        exact: true,
        name: "Dashboard",
        component: Dashboard,
        layout: DashboardLayout
    },
    {
        path: "/profile",
        exact: true,
        name: "Profile",
        component: Profile,
        layout: DashboardLayout
    },
    {
        path: "/editor",
        exact: true,
        name: "Editor",
        component: Editor,
        layout: DashboardLayout
    },
    {
        path: "/contact-us",
        exact: true,
        name: "ContactUs",
        component: ContactUs,
        layout: DefaultLayout
    },
    {
        path: "/pdf",
        exact: true,
        name: "pdf",
        component: PdfPage,
        layout: DefaultLayout
    },
    {
        path: "*",
        exact: false,
        name: "404",
        component: NotFound,
        layout: DefaultLayout
    },    
]




export default routes;
