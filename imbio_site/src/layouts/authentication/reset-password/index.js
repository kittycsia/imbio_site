// @mui material components
import Card from "@mui/material/Card";

// Components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";
import { Link } from "react-router-dom";

function Cover() {
  return (
    <CoverLayout coverHeight="40vh" image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="success"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-9}
          p={3.5}
          mb={0}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={2}>
            Enter your email address associated with this account and we will send a link to reset
            your password. If you can not remember your email address, please contact the
            administrator.
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={4}>
              <MDInput color="success" type="email" label="Email" variant="standard" fullWidth />
            </MDBox>

            <MDBox mt={6} mb={1}>
              <MDButton variant="gradient" color="success" fullWidth>
                reset
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                <MDTypography
                  component={Link}
                  to="/dashboard"
                  variant="button"
                  color="success"
                  fontWeight="medium"
                  textGradient
                >
                  Cancel
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
