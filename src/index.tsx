// PART 1 - Routing
// Section 1
// Implement the router with react-router-dom
// https://reactrouter.com/
// The lib is installed, all you need to do is import it

// Requirements:
// Home component only renders for path /
// Retailer component only renders for path /retailerType/:wmid
// where retailerType is dispensaries | deliveries | doctors

import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/";
import Retailer from "./pages/retailer";
import { useGlobal, GlobalContext } from "./context";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const queryCache = new QueryCache();
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: sans-serif;
  }
`;

type IRoutes = {
  path: string | string[];
  exact: boolean;
  component: JSX.Element;
}[];

/* Elush- I created an array of routes here so that it is easier to add
 * routes through the lifetime of the app
 */
const routes: IRoutes = [
  {
    /* Elush- could not tell if you wanted retailerType to also be generic like
     * :wmid, but that would have been path: "/:retailerType/:wmid", and I
     * would desturcture and read it accordingly in retailer.tsx
     */
    path: "/(dispensaries|deliveries|doctors)/:wmid",
    exact: true,
    component: <Retailer />,
  },
  {
    path: "/",
    exact: true,
    component: <Home />,
  },
];

function ContextWrapper() {
  const globalValues = useGlobal();
  return (
    <GlobalContext.Provider value={globalValues}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Router>
          <GlobalStyle />
          <Switch>
            {routes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                children={route.component}
              />
            ))}
            {/* Elush- I set a default redirect to / for unrecognized routes.
             Ideal would have been an ideal 404 page but did not have time */}
            <Route key={"default-redirect"}>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </ReactQueryCacheProvider>
    </GlobalContext.Provider>
  );
}

render(<ContextWrapper />, document.getElementById("root"));
