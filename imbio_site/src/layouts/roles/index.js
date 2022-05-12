// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// React components
import MDBox from "components/MDBox";

// React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import IconLabelButtons from "examples/Items/Buttons/Roles_buttons";
import DoubleCards from "examples/Cards/DoubleCards/index";
import EmptyCard from "examples/Cards/DoubleCards/empty_index";

function Roles() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={2}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <IconLabelButtons />
              </MDBox>
              <MDBox pt={1} pb={2} px={2}>
                <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                  <DoubleCards name="SysAdmin" />
                  <DoubleCards name="GroupAdmin" />
                  <DoubleCards name="ClinicalUser" />
                  <DoubleCards name="QA reviwer" />
                  <DoubleCards name="Overreader" />
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid item xs={12} md={6} lg={3.95}>
              <MDBox mb={3}>
                <EmptyCard />
              </MDBox>
            </Grid>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Roles;
