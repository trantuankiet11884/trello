import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Column from "./Column/Column";
import QueueIcon from "@mui/icons-material/Queue";
function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: "inherit",
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        // "&::-webkit-scrollbar-track": { m: 2 },
      }}
    >
      <Column />
      <Column />

      <Box
        sx={{
          minWidth: "200px",
          maxWidth: "200px",
          mx: 2,
          borderRadius: "6px",
          height: "fit-content",
          bgcolor: "#ffffff3d",
        }}
      >
        <Button
          startIcon={<QueueIcon />}
          sx={{ color: "#fff", width: "100%", py: 1 }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  );
}

export default ListColumns;
