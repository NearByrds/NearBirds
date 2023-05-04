import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MapPage from "./pages/MapPage/MapPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import * as Sentry from "@sentry/react";

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes)

const App = () => {
  return (
    <div>
      <SentryRoutes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/team" element={<TeamPage />} />
      </SentryRoutes>

    </div>
  );
};

export default Sentry.withProfiler(App);
