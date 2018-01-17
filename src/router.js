import React from 'react';
import {Router, Route, Switch, routerRedux} from 'dva/router';
import HomePage from "./routes/HomePage/HomePage"
import PublishPage from "./routes/PublishPage/PublishPage";
import MePage from "./routes/MePage/MePage";
import DetailPage from "./routes/DetailPage/DetailPage";
import ProvidePlanPage from "./routes/ProvidePlanPage/ProvidePlanPage";
import Test from "./routes/Test/Test";
// import Auth from "./components/Auth/Auth";
import dynamic from 'dva/dynamic';

const {ConnectedRouter} = routerRedux;

export default function RouterConfig({history, app}) {
  /* 定义路由配置 */
  const routes = [{
    path: "/",
    models: () => [import('./models/user')],
    component: () => (HomePage)
  }, {
    path: "/publish",
    models: () => [import('./models/upload')],
    component: () => (PublishPage)
  }, {
    path: "/me",
    models: () => [import('./models/solutions'),import("./models/me")],
    component: () => (MePage)
  }, {
    path: "/provide",
    models: () => [import('./models/solutions'), import('./models/upload'), import('./models/me')],
    component: () => (ProvidePlanPage)
  }, {
    path: "/detail",
    models: () => [import('./models/me')],
    component: () => (DetailPage)
  }, {
    path: "/test",
    component: () => (Test)
  }];

  return (
    <ConnectedRouter history={history}>
      <div>
        {/*<Auth/>*/}
        <Switch>
          {
            routes.map(({path, ...dynamics}, key) => {
              return (
                <Route
                  exact
                  key={key}
                  path={path}
                  breadcrumbName={path}
                  component={dynamic({
                    app,
                    ...dynamics
                  })}
                />
              )
            })
          }
        </Switch>
      </div>
    </ConnectedRouter>
  )
    ;
}

