import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {/* py-3 classname gives a padding of 3 on the y axis */}
      <main className="py-3">
        {/* Container gives the margin/padding to the text */}
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
