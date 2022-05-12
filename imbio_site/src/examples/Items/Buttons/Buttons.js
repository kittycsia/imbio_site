import * as React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../components/MDTypography";

export default function IconLabelButtons() {
  return (
    <Stack direction="row">
      <Grid container alignItems="center">
        <MDTypography variant="h5" color="white">
          Job List
        </MDTypography>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="white" startIcon={<EditIcon />}>
            CREATE JOB
          </Button>
          <Button variant="outlined" color="white" startIcon={<SendIcon />}>
            AGGREGATE CSV
          </Button>
        </Stack>
      </Grid>
    </Stack>
  );
}
