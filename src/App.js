import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Tab_Main from "./components/comp_tab/Tab_Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center">
        <Header />
        <Tab_Main />
      </Container>
      <Footer />
    </>
  );
}

export default App;
