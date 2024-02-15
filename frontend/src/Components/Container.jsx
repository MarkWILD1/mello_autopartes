import React, { useState } from "react";
import "./Container.css";
import TopContainer from "./TopContainer";
import MainContainer from "./MainContainer";

function Container() {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query); // Actualizar la búsqueda en el estado del componente principal
  };

  console.log("searchQuery:", searchQuery);



  return (
    <div className="container">
      <TopContainer onSearch={handleSearch} />
      <MainContainer searchQuery={searchQuery} />
    </div>
  );
}

export default Container;