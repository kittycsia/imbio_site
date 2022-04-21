import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SummIcon from "@mui/icons-material/Summarize";
import MDBox from "../../components/MDBox";

const actions = [
  { icon: <FileCopyIcon />, name: "Create job" },
  { icon: <SummIcon />, name: "Aggregate CV" },
];

export default function FloatingActionButtons() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      shadow="sm"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="black"
    >
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </MDBox>
  );
}
