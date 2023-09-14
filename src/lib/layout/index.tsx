import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { routes } from "lib/router/routes";
import { useAuth } from "lib/store/auth";

import DashboardLayout from "./dashboard";
import LandingLayout from "./landing";
import { useLayout } from "lib/store/layout";
import shallow from "zustand/shallow";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const location = useLocation();
  const [isUsingLandingLayout, setIsUsingLandingLayout] = useLayout(
    (state) => [state.isUsingLandingLayout, state.setIsUsingLandingLayout],
    shallow
  );

  const currentPathConfig = React.useMemo(() => {
    const pathConfig = routes.find(({ path }) => {
      return path === location.pathname || path.includes(location.pathname);
    });

    setIsUsingLandingLayout(pathConfig?.layout === "landing");
    return pathConfig;
  }, [location]);

  React.useEffect(() => {
    if (currentPathConfig?.isRestricted && token) {
      navigate("/");
    }
  }, [currentPathConfig?.isRestricted, navigate, token]);

  // React.useEffect(() => {
  //   if (window) {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   }
  // }, [location.pathname]);

  if (isUsingLandingLayout) {
    return <LandingLayout>{children}</LandingLayout>;
  }
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
