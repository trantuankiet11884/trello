//  Board Details
import React from "react";
import Container from "@mui/material/Container";
import AppBar from "~/components/AppBar/Appbar.jsx";
import BoardBar from "./BoardBar/BoardBar.jsx";
import BoardContent from "./BoardContent/BoardContent.jsx";
import { mockData } from "~/apis/mock-data";
const Board = () => {
  return (
    <>
      <Container sx={{ height: "100vh" }} disableGutters maxWidth={false}>
        <AppBar />
        <BoardBar board={mockData?.board} />
        <BoardContent board={mockData?.board} />
      </Container>
    </>
  );
};

export default Board;
