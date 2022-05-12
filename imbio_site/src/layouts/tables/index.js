// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import IconLabelButtons from "examples/Items/Buttons/Buttons";

// Data
import jobTableData from "layouts/tables/data/jobTableData";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ViewIcon from "@mui/icons-material/ViewCarousel";
import FilterIcon from "@mui/icons-material/FilterList";
import CalendarIcon from "@mui/icons-material/CalendarMonth";

function Tables() {
  const { columns, rows } = jobTableData();
  const damn = (
    <Stack direction="row" alignItems="right" justifyContent="flex-end" paddingRight={2}>
      <IconButton aria-label="Search" color="secondary" variant="gradient">
        <SearchIcon fontSize="medium" />
      </IconButton>
      <IconButton aria-label="View columns" color="secondary" variant="gradient">
        <ViewIcon fontSize="medium" />
      </IconButton>
      <IconButton aria-label="Filter tables" color="secondary" variant="gradient">
        <FilterIcon fontSize="medium" />
      </IconButton>
      <IconButton aria-label="Data filter" color="secondary" variant="gradient">
        <CalendarIcon fontSize="medium" />
      </IconButton>
    </Stack>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
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
              <MDBox pt={3}>
                {damn}
                <DataTable
                  table={{ columns, rows }}
                  isSorted
                  entriesPerPage
                  showTotalEntries
                  noEndBorder
                  // canSearch
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
