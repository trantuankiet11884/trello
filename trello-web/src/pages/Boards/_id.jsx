//  Board Details
import React from "react";
import Container from "@mui/material/Container";
import AppBar from "~/components/AppBar/index.jsx";
import BoardBar from "./BoardBar/index.jsx";
import BoardContent from "./BoardContent/index.jsx";

const Board = () => {
  return (
    <>
      <Container sx={{ height: "100vh" }} disableGutters maxWidth={false}>
        <AppBar />
        <BoardBar />
        <BoardContent />
      </Container>
    </>
  );
};

export default Board;
