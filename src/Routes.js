import { Router, Switch, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { history } from "./history";

const Fallback = () => <div>falling back</div>;
const Justtheapp = lazy(() => import("./Justtheapp"));

export const Routes = () => (
  <Router history={history}>
    <Suspense fallback={<Fallback />}>
      <Switch>
        <Route matchRoutes path="/bug/troublesome" component={lazy(() => import(/* webpackPreload: true, webpackChunkName: "timesheets" */"./RendererOfComponent"))} />
        <Route matchRoutes path="/bug" component={lazy(() => import(/* webpackPreload: true, webpackChunkName: "timesheets" */"./RendererOfComponent"))} />
    <Route
      matchRoutes
      path="/"
      component={Justtheapp}
    />
  </Switch>
    </Suspense>
  </Router>
);
