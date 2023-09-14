import React from "react";
import { useLocation } from "react-router-dom";

type TModule = {
  name: string;
  path: string;
};

interface useModuleCountInit {
  userName?: string;
  currentModule?: TModule;
}

const useModuleCount = (payload: useModuleCountInit) => {
  const [hasVisited, setHasVisited] = React.useState<boolean>(false);

  React.useEffect(() => {
    const visitedModulesFromLocalStorage =
      window.localStorage.getItem("visitedModules");

    if (!visitedModulesFromLocalStorage) {
      setHasVisited(false);
      return window.localStorage.setItem(
        "visitedModules",
        JSON.stringify([{ ...payload.currentModule }])
      );
    }

    let visitedModules = JSON.parse(
      visitedModulesFromLocalStorage
    ) as TModule[];

    const foundVisitedModules = visitedModules.find(
      (module) => module.name === payload.currentModule?.name
    );

    if (!foundVisitedModules) {
      setHasVisited(false);
      return window.localStorage.setItem(
        "visitedModules",
        JSON.stringify([...visitedModules, { ...payload.currentModule }])
      );
    }

    if (foundVisitedModules) {
      return setHasVisited(true);
    }
  }, []);

  console.log(location);
  return [hasVisited];
};

export default useModuleCount;
