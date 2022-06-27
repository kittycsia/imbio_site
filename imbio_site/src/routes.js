// Layouts
import Algorithms from "layouts/algorithms";
import Roles from "layouts/roles";
import Tables from "layouts/tables";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import ResetPassword from "layouts/authentication/reset-password";

// @mui icons
import Icon from "@mui/material/Icon";

function Profiles() {
  return null;
}

const routes = [
  {
    type: "collapse",
    name: "Jobs",
    key: "jobs",
    icon: <Icon fontSize="small">fact_check</Icon>,
    route: "/jobs",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Algorithms",
    key: "algorithms",
    icon: <Icon fontSize="small">settings_suggest</Icon>,
    route: "/algorithms",
    component: <Algorithms />,
  },
  {
    type: "collapse",
    name: "Profiles",
    key: "profiles",
    icon: <Icon fontSize="small">engineering</Icon>,
    route: "/profiles",
    component: <Profiles />,
  },
  {
    type: "collapse",
    name: "Roles",
    key: "roles",
    icon: <Icon fontSize="small">manage_accounts</Icon>,
    route: "/roles",
    component: <Roles />,
  },
  {
    type: "collapse",
    name: "Users",
    key: "sign-in",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Groups",
    key: "reset-password",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/authentication/reset-password",
    component: <ResetPassword />,
  },
  {
    type: "collapse",
    name: "Theme",
    key: "theme",
    icon: <Icon fontSize="small">palette</Icon>,
    route: "/theme",
    component: <Notifications />,
  },
  {
    type: "",
    name: "",
    key: "",
    icon: "",
    route: "/profile",
    component: <Profile />,
  },
];

export default routes;
