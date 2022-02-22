import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import SignInLayout from "layouts/authentication/components/SignInLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import logo from "assets/images/logo.png";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <SignInLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-9}
          p={1}
          mb={1}
          textAlign="center"
        >
          <img src={logo} width="70" height="96"/>
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Login to your account
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth />
            </MDBox>

            <MDBox mt={0} mb={0} textAlign="right">
              <MDTypography variant="button" color="text">
                <MDTypography
                  component={Link}
                  to="/authentication/reset-password"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Forgot password?
                </MDTypography>
              </MDTypography>
            </MDBox>



            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                <MDTypography
                  component={Link}
                  to="https://www.imbio.com/support/"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Contact support
                </MDTypography>
              </MDTypography>
            </MDBox>

            <MDBox mt={1} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                <MDTypography
                  component={Link}
                  to="https://www.imbio.com/privacy-policy/"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Privacy policy
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </SignInLayout>
  );
}

export default Basic;
