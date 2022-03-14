/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import img1 from "assets/images/lung-1.png";
import img2 from "assets/images/lung-2.png";
import img3 from "assets/images/lung-3.png";
import img4 from "assets/images/lung-4.png";
import img5 from "assets/images/lung-5.png";
import img6 from "assets/images/lung-6.png";

export default function data() {
  const Jname = ({ name, description }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{description}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Pname = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
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
    <MDBox display="flex" alignItems="center" lineHeight={2}>
      <MDAvatar src={image} name={name} size="sm" />
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
      { Header: "Actions", accessor: "action", align: "center" },
    ],

    rows: [
      {
        jname: <Jname name="J-1643199061" description="ACC #: 10020579759" />,
        pname: <Pname title="0uJux5PoLyvgcA" description="Id: TdUfu1ad" />,
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:13:13 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img1} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit, Delete
          </MDTypography>
        ),
      },
      {
        jname: <Jname name="J-1643199061" description="ACC #: 10020579759" />,
        pname: <Pname title="0uJux5PoLyvgcA" description="Id: TdUfu1ad" />,
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:13:13 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img2} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit, Delete
          </MDTypography>
        ),
      },
      {
        jname: <Jname name="J-1643199061" description="ACC #: 10020579759" />,
        pname: <Pname title="0uJux5PoLyvgcA" description="Id: TdUfu1ad" />,
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:13:13 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img3} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit, Delete
          </MDTypography>
        ),
      },
      {
        jname: <Jname name="J-1643199061" description="ACC #: 10020579759" />,
        pname: <Pname title="0uJux5PoLyvgcA" description="Id: TdUfu1ad" />,
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:13:13 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img4} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit, Delete
          </MDTypography>
        ),
      },
      {
        jname: <Jname name="J-1643199061" description="ACC #: 10020579759" />,
        pname: <Pname title="0uJux5PoLyvgcA" description="Id: TdUfu1ad" />,
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:13:13 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img5} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit, Delete
          </MDTypography>
        ),
      },
      {
        jname: <Jname name="J-1643199061" description="ACC #: 10020579759" />,
        pname: <Pname title="0uJux5PoLyvgcA" description="Id: TdUfu1ad" />,
        group: <Group title="imbio" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="complete" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        upload: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1/26/2022, 12:13:13 PM
          </MDTypography>
        ),
        algo: <Algorithm image={img6} name="Lung Texture Analysis" description="2.1" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit, Delete
          </MDTypography>
        ),
      },
    ],
  };
}
