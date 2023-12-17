import { Route } from "react-router-dom";
import HomeRoutes from "./containers/Home/routes/routes";
import LingoLadderRoutes from "./containers/LingoLadder/routes/routes";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";

const routes = [
  ...HomeRoutes,
  ...LingoLadderRoutes,
]

const renderRoute = (route, props) => (
  <Route
    key={route.path}
    path={route.path}
    exact={route.exact}
    element={
      route.path == "/" ?
        <div>
          <Navbar />
          <route.component {...props} />
          <FooterSection mt="0px" />
        </div>
      :
        <div>
          <route.component {...props} />
          <FooterSection />
        </div>
    }
  />
);

export const routeGenerator = ({ ...props }) =>
  routes.map((route) =>
    renderRoute(route, {
      ...props
    })
);