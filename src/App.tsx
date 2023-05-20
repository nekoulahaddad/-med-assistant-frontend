import React from "react";
import "./App.css";
import DragDrop from "./components/DragAndDrop";
import EnhancedTable from "./components/EnhancedTable";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container sx={{ mt: 2 }} maxWidth="lg">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <DragDrop />
        </Grid>
        <EnhancedTable />
      </Container>
    </div>
  );
}

export default App;
