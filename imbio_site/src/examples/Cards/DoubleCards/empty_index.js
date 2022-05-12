// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// React context
import { useMaterialUIController } from "context";

function DoubleCards({ name }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      px={44}
      py={33.5}
      mt={0}
      ml={1}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox
          display="flex"
          alignItems={{ xs: "flex-start", sm: "left" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <MDTypography variant="h4" fontWeight="medium" textTransform="capitalize">
            {name}
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Typechecking props for the Bill
DoubleCards.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DoubleCards;
