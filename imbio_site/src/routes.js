// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import ResetPassword from "layouts/authentication/reset-password";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Jobs",
    key: "dashboard",
    icon: <Icon fontSize="small">fact_check</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Algorithms",
    key: "tables",
    icon: <Icon fontSize="small">settings_suggest</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Profiles",
    key: "profile",
    icon: <Icon fontSize="small">engineering</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Roles",
    key: "billing",
    icon: <Icon fontSize="small">manage_accounts</Icon>,
    route: "/billing",
    component: <Billing />,
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
    key: "notifications",
    icon: <Icon fontSize="small">palette</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
];

export default routes;
