import React, { useEffect, useState } from "react";
import CardMain from "./CardMain";
import "./MainContainer.css";
import "./searchPiece.css";
import "bootstrap/dist/css/bootstrap.css";

function SearchPiece() {
  const [curvaa, setCurvaa] = useState([]);
  const [search, setSearch] = useState("");
  const [piecesCount, setPiecesCount] = useState(0);
  

  const URL = "http://localhost:3500/api/v1/curvaa";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setCurvaa(data.data.pieces);
        setPiecesCount(data.data.pieces.length)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //funcion para realizar busqueda
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCurvaa = search
    ? curvaa.filter((data) =>
        data.nombre_pieza.toLowerCase().includes(search.toLowerCase())
      )
    : curvaa;

  const updatePiece = async (_id, updatedData) => {
    try {
      await axios.patch(
        `http://localhost:3500/api/v1/curvaa/${_id}`,
        updatedData
      );
      // Refresh the data after updating
      getCurvaA();
    } catch (error) {
      console.error("Error updating piece:", error);
    }
  };

  const deletePiece = async (_id) => {
    try {
      await axios.delete(`http://localhost:3500/api/v1/curvaa/${_id}`);
      // Refresh the data after deleting
      getCurvaA();
    } catch (error) {
      console.error("Error deleting piece:", error);
    }
  };

  return (
    <div className="maincontainer">
      <div className="title">
        <h2>Buscar Producto</h2>
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Produto que desea buscar"
        /> <hr />
        <h4>Productos registrados en el sistema: <span>{piecesCount}</span></h4>
      </div>
      <div className="left">
        <div className="cards">
          <div className="filters">
            <main>
              {filteredCurvaa.map((piece) => (
                <CardMain
                  key={piece._id}
                  curvaa={piece}
                  updatePiece={updatePiece}
                  deletePiece={deletePiece}
                />
              ))}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPiece;
