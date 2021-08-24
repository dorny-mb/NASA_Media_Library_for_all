import { lazy } from "react";
import { RouteProps } from "react-router";

export interface PrivateRouteObject extends RouteProps {
  exact: boolean;
  path: string;
  breadcrumb: string;
  component: any;
  title: string;
}

const Home = lazy(() => import("../containers/Home"));
const Search = lazy(() => import("../containers/Search"));
const Show = lazy(() => import("../containers/Show"));
const PUBLIC_ROUTES = [
  {
    exact: true,
    title: "Home",
    path: "/",
    component: Home,
  },
  {
    exact: false,
    title: "Search",
    path: "/search",
    component: Search,
  },
  {
    exact: false,
    title: "Show",
    path: "/show",
    component: Show,
  },
];

export { PUBLIC_ROUTES };
