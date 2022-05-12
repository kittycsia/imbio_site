/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// MD2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// @material-ui core components
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PDFIcon from "@mui/icons-material/PictureAsPdf";
import InfoIcon from "@mui/icons-material/Info";
import CSVIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";

// Images
import img1 from "assets/images/lung-1-lg.png";
import img2 from "assets/images/lung-2-lg.png";
import img3 from "assets/images/lung-3-lg.png";
import img4 from "assets/images/lung-4-lg.png";
import img5 from "assets/images/lung-5-lg.png";
import img6 from "assets/images/lung-6-lg.png";
import MDAvatar from "../../../components/MDAvatar";

export default function data() {
  const Jname = ({ name, description }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{description}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Pname = ({ title, description1, description2 }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description1}</MDTypography>
      <br />
      <MDTypography variant="caption">{description2}</MDTypography>
    </MDBox>
  );

  const Group = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const Algorithm = ({ image, name, description }) => (
    <MDBox selfAlign="left" display="flex" lineHeight={3}>
      <MDAvatar src={image} variant="square" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{description}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Job name", accessor: "jname", align: "left" },
      { Header: "Patient name", accessor: "pname", align: "left" },
      { Header: "Group", accessor: "group", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Initial upload (UTC)", accessor: "upload", align: "center" },
      { Header: "Algorithm", accessor: "algo", align: "center" },
      { Header: "Actions", accessor: "action", align: "center", disableSortBy: true },
    ],

    rows: [
      {
        jname: <Jname name="J-1643198836" description="No Accesson Num." />,
        pname: (
          <Pname
            title="10005Q_NJC_COPD"
            description1="ID: 10005Q_NJC_COPD"
            description2="DOB: Unknown"
          />
        ),
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:13:13 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img1} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <Stack direction="row" alignItems="center">
            <IconButton aria-label="Download PDF report" color="dark">
              <PDFIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Job details" color="dark">
              <InfoIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Download CSV report" color="dark">
              <CSVIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Delete patient info" color="dark">
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </Stack>
        ),
      },
      {
        jname: <Jname name="J-1643198994" description="No Accesson Num." />,
        pname: (
          <Pname
            title="10009Y_NJC_COPD"
            description1="ID: 10009Y_NJC_COPD"
            description2="DOB: Unknown"
          />
        ),
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:10:40 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img2} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <Stack direction="row" alignItems="center">
            <IconButton aria-label="Download PDF report" color="dark">
              <PDFIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Job details" color="dark">
              <InfoIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Download CSV report" color="dark">
              <CSVIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Delete patient info" color="dark">
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </Stack>
        ),
      },
      {
        jname: <Jname name="J-1643199061" description="ACC #: 10020579759" />,
        pname: (
          <Pname title="0uJux5PoLyvgcA" description1="ID: TdUfu1ad" description2="DOB: Unknown" />
        ),
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:09:27 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img3} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <Stack direction="row" alignItems="center">
            <IconButton aria-label="Download PDF report" color="dark">
              <PDFIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Job details" color="dark">
              <InfoIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Download CSV report" color="dark">
              <CSVIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Delete patient info" color="dark">
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </Stack>
        ),
      },
      {
        jname: <Jname name="J-1643198927" description="No Accesson Num." />,
        pname: (
          <Pname
            title="10009Y_NJC_COPD"
            description1="ID: 10009Y_NJC_COPD"
            description2="DOB: Unknown"
          />
        ),
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:08:25 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img4} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <Stack direction="row" alignItems="center">
            <IconButton aria-label="Download PDF report" color="dark">
              <PDFIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Job details" color="dark">
              <InfoIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Download CSV report" color="dark">
              <CSVIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Delete patient info" color="dark">
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </Stack>
        ),
      },
      {
        jname: <Jname name="J-1642210335" description="ACC #: 10040536789" />,
        pname: (
          <Pname
            title="10004D_NJC_COPD"
            description1="ID: 10009Y_NJC_COPD"
            description2="DOB: Unknown"
          />
        ),
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:05:11 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img5} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <Stack direction="row" alignItems="center">
            <IconButton aria-label="Download PDF report" color="dark">
              <PDFIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Job details" color="dark">
              <InfoIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Download CSV report" color="dark">
              <CSVIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Delete patient info" color="dark">
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </Stack>
        ),
      },
      {
        jname: <Jname name="J-1899546678" description="No Accesson Num." />,
        pname: (
          <Pname
            title="100033_NJC_COPD"
            description1="ID: 100033_NJC_COPD"
            description2="DOB: Unknown"
          />
        ),
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:02:19 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img6} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <Stack direction="row" alignItems="center">
            <IconButton aria-label="Download PDF report" color="dark">
              <PDFIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Job details" color="dark">
              <InfoIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Download CSV report" color="dark">
              <CSVIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="Delete patient info" color="dark">
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </Stack>
        ),
      },
    ],
  };
}
