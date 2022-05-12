import * as React from "react";
import Button from "@mui/material/Button";
import SyncIcon from "@mui/icons-material/Sync";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../components/MDTypography";

export default function IconLabelButtons() {
  return (
    <Stack direction="row">
      <Grid container alignItems="center">
        <MDTypography variant="h5" color="white">
          Algorithms
        </MDTypography>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="white" startIcon={<SyncIcon />}>
            TOOL SYNCHRONIZE
          </Button>
        </Stack>
      </Grid>
    </Stack>
  );
}
