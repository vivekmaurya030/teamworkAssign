import React from "react";
import "./loader.scss";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div className="loader">
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
      </Stack>
    </div>
  );
};

export default Loader;
