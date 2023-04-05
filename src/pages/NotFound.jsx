import React from "react";
import Typography from "@mui/material/Typography";
import { Box,useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h4" color={theme.palette.error.main} sx={{ marginTop: "30px" }}>
        There is No design yet
        <br></br>
        <Typography
          variant="h6"
          color={theme.palette.error.main}
          sx={{ marginTop: "30px", marginLeft: "60px" }}
        >
          Pease try again later
        </Typography>
      </Typography>
    </Box>
  );
};

export default NotFound;
