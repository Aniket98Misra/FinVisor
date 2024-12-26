import { NavLink } from "react-router-dom";
import CandlestickChartTwoToneIcon from "@mui/icons-material/CandlestickChartTwoTone";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();

  // Define styles for active and inactive links
  const activeStyle = {
    color: "inherit",
    textDecoration: "inherit",
  };

  const inactiveStyle = {
    color: palette.grey[700],
    textDecoration: "inherit",
  };

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <CandlestickChartTwoToneIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          FinVisor
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Dashboard
          </NavLink>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <NavLink
            to="/predictions"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Predictions
          </NavLink>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
