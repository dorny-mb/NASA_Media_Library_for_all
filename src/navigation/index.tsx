import React, { Suspense } from "react";
import { Route, RouteProps, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { FillLoader, Nav } from "../components";
import PageNotFound from "../containers/PageNotFound";
import { PUBLIC_ROUTES } from "./routes";

interface RouteType extends RouteProps {
  component: any;
}

export type NavItem = {
  to: string;
  title: string;
  icon: React.ReactNode;
  subMenu?: Array<{ to: string; title: string }>;
};

const PublicRoute = ({ component: Component, ...rest }: RouteType) => (
  <Route {...rest}>
    <Suspense fallback={<FillLoader color="black" />}>
      <Component />
    </Suspense>
  </Route>
);

const Navigation = () => (
  <>
    <Router>
      <Suspense fallback={<FillLoader />}>
        <Nav />
        <Switch>
          {PUBLIC_ROUTES.map((route) => {
            return <PublicRoute key={route.path} {...route} />;
          })}
          <Route render={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  </>
);

export default Navigation;
