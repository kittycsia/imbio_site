// @mui material components
import Grid from "@mui/material/Grid";

// React components
import MDBox from "components/MDBox";

// React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/profile/components/Header/index";
import { useState } from "react";
import { Switch } from "@material-ui/core";
import SplitButton from "layouts/profile/components/Header/Language";
import SeparatorCard from "../../examples/Cards/SeparatorCards/index";
import MDTypography from "../../components/MDTypography";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";

function Overview() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={3} />
      <Header />
      <MDBox>
        <Grid container spacing={3} marginLeft={-0.1}>
          <Grid item xs={12} md={6} lg={3.95}>
            <MDBox mb={3}>
              <SeparatorCard
                icon="person"
                count="Personal information"
                title="Your name and your e-mail you have signed in with."
                content={
                  <MDBox pt={1} pb={2} px={2} lineHeight={1.5}>
                    <MDTypography
                      variant="caption"
                      fontWeight="bold"
                      color="text"
                      textTransform="uppercase"
                    >
                      Name
                    </MDTypography>
                    <MDBox mb={2}>
                      <MDInput type="name" label="Gipsz Jakab" disabled fullWidth />
                    </MDBox>
                    <MDTypography
                      variant="caption"
                      fontWeight="bold"
                      color="text"
                      textTransform="uppercase"
                    >
                      E-mail
                    </MDTypography>
                    <MDBox mb={2}>
                      <MDInput type="email" label="gipsz.jakab@gmail.com" disabled fullWidth />
                    </MDBox>
                    <MDBox mb={2} pt={2}>
                      <SplitButton />
                    </MDBox>
                  </MDBox>
                }
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3.95}>
            <MDBox mb={2}>
              <SeparatorCard
                icon="lock"
                count="Password"
                title="Review compliance rules below the password fields."
                content={
                  <MDBox pt={1} pb={2} px={2} lineHeight={1.5}>
                    <MDTypography
                      variant="caption"
                      fontWeight="bold"
                      color="text"
                      textTransform="uppercase"
                    >
                      Your current password
                    </MDTypography>
                    <MDBox mb={2.5}>
                      <MDInput type="password" label="Old Password" fullWidth required />
                    </MDBox>
                    <MDTypography
                      variant="caption"
                      fontWeight="bold"
                      color="text"
                      textTransform="uppercase"
                    >
                      New password
                    </MDTypography>
                    <MDBox mb={2}>
                      <MDInput type="password" label="New Password" fullWidth required />
                    </MDBox>
                    <MDTypography
                      variant="caption"
                      fontWeight="bold"
                      color="text"
                      textTransform="uppercase"
                    >
                      New password again
                    </MDTypography>
                    <MDBox mb={2}>
                      <MDInput type="password" label="New Password" fullWidth required />
                    </MDBox>
                  </MDBox>
                }
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3.95}>
            <MDBox mb={3}>
              <SeparatorCard
                icon="notifications"
                count="Enabled Notifications"
                title="You can change your notification preferences here."
                content={
                  <MDBox pt={1} pb={2} px={2} lineHeight={1.25}>
                    <MDTypography
                      variant="caption"
                      fontWeight="bold"
                      color="text"
                      textTransform="uppercase"
                    >
                      Reviewer notifications
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                      <MDBox mt={0.5}>
                        <Switch
                          checked={followsMe}
                          onChange={() => setFollowsMe(!followsMe)}
                          color="inherit"
                        />
                      </MDBox>
                      <MDBox width="80%" ml={0.5}>
                        <MDTypography variant="button" fontWeight="regular" color="text">
                          Daily QA Overdue aggregate
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                      <MDBox mt={0.5}>
                        <Switch
                          checked={answersPost}
                          onChange={() => setAnswersPost(!answersPost)}
                          color="default"
                        />
                      </MDBox>
                      <MDBox width="80%" ml={0.5}>
                        <MDTypography variant="button" fontWeight="regular" color="text">
                          Waiting for Overread
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                    <MDBox mt={3}>
                      <MDTypography
                        variant="caption"
                        fontWeight="bold"
                        color="text"
                        textTransform="uppercase"
                      >
                        iccp failure
                      </MDTypography>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                      <MDBox mt={0.5}>
                        <Switch
                          checked={newLaunches}
                          onChange={() => setNewLaunches(!newLaunches)}
                          color="inherit"
                        />
                      </MDBox>
                      <MDBox width="80%" ml={0.5}>
                        <MDTypography variant="button" fontWeight="regular" color="text">
                          Export failure
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                      <MDBox mt={0.5}>
                        <Switch
                          checked={productUpdate}
                          onChange={() => setProductUpdate(!productUpdate)}
                          color="inherit"
                        />
                      </MDBox>
                      <MDBox width="80%" ml={0.5}>
                        <MDTypography variant="button" fontWeight="regular" color="text">
                          Failure
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" mb={0.5} ml={-1.5}>
                      <MDBox mt={0.5}>
                        <Switch
                          checked={newsletter}
                          onChange={() => setNewsletter(!newsletter)}
                          color="inherit"
                        />
                      </MDBox>
                      <MDBox width="80%" ml={0.5}>
                        <MDTypography variant="button" fontWeight="regular" color="text">
                          Input review
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                  </MDBox>
                }
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox display="flex" justifyContent="flex-end" marginRight={3}>
        <MDButton color="success" variant="gradient">
          Save
        </MDButton>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}
export default Overview;
