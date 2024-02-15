import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./Components/Menu";
import Container from "./Components/Container";
import AddPieces from "./Components/AddPieces";
import EditPiece from "./Components/EditPiece";
import SearchPiece from "./Components/SearchPiece";
import AddClient from "./Components/AddClient";
import SearchClient from "./Components/SearchClient";

function App() {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query); // Actualizar la búsqueda en el estado del componente principal
  };

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/AddPieces" element={<AddPieces />} />
        <Route path="/AddClient" element={<AddClient />} />
        <Route path="/SearchClient" element={<SearchClient />} />
        <Route path="/SearchPiece" element={<SearchPiece />} />
        <Route path="/" element={<Container searchQuery={searchQuery} />} />
        <Route path="/curvaa/:_id" element={<EditPiece />} />
      </Routes>
    </div>
  );
}

export default App;
