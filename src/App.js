import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Tab_Main from "./components/comp_tab/Tab_Main";

function App() {
  return (
    <Container>
      <Header />
      <Tab_Main />

    </Container>
  );
}

export default App;
