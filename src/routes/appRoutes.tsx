import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import ProfilePage from "../pages/profile/ProfilePage";
import HomeResourcesPage from "../pages/home/HomeResourcesPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    path: "/",
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/home",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <HomeIcon  />
    }
  },
  {
    path: "/perfil",
    element: <ProfilePage />,
    state: "perfil",
    sidebarProps: {
      displayText: "Perfil",
      icon: <AccountCircleIcon />
    }
  },
  {
    path: "/home/recursos/:id/:title",
    element: <HomeResourcesPage />,
    state: "home.recursos"
  },
  // {
  //   path: "/component",
  //   element: <ComponentPageLayout />,
  //   state: "component",
  //   sidebarProps: {
  //     displayText: "Components",
  //     icon: <AppsOutlinedIcon />
  //   },
  //   child: [
  //     {
  //       path: "/component/alert",
  //       element: <AlertPage />,
  //       state: "component.alert",
  //       sidebarProps: {
  //         displayText: "Alert"
  //       },
  //     },
  //     {
  //       path: "/component/button",
  //       element: <ButtonPage />,
  //       state: "component.button",
  //       sidebarProps: {
  //         displayText: "Button"
  //       }
  //     }
  //   ]
  // },
];

export default appRoutes;