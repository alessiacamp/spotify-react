import React from "react";
import logo from "./logo.svg";
import "./style.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMain from "./components/MyMain";
import MyFavourite from "./components/MyFavourite";
import MyResult from "./components/MyResult";
import MyPlayer from "./components/MyPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="p-0">
        <Row>
          <MyNav />
          <Routes>
            <Route path="/" element={<MyMain></MyMain>}></Route>
            <Route path="/favourites" element={<MyFavourite></MyFavourite>}></Route>
            <Route path="/search/:query" element={<MyResult></MyResult>} />
          </Routes>
        </Row>
      </Container>
      <MyPlayer></MyPlayer>
    </BrowserRouter>
  );
}

export default App;
