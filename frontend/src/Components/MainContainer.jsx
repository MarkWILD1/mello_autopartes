import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainContainer.css";
import Banner from "../img/logo.jpg";
import CardMain from "./CardMain";
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottomCard from "./MainRightBottomCard";

function MainContainer({ searchQuery }) {
  const [data, setData] = useState([]);
  const [piecesCount, setPiecesCount] = useState(0);


  const getCurvaA = async () => {
    try {
      const url = 'http://localhost:3500/api/v1/curvaa';
      const response = await axios.get(url);
      const result = response.data?.data?.pieces || [];
      setPiecesCount(response.data.data.pieces.length)
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const updatePiece = async (_id, updatedData) => {
    try {
      await axios.patch(`http://localhost:3500/api/v1/curvaa/${_id}`, updatedData);
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


  useEffect(() => {
    getCurvaA(searchQuery);
  }, [searchQuery]);

  const dataArray = Array.isArray(data) ? data : [data];

  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <h2>Total productos en sistema:</h2>
            <h1>{piecesCount}</h1>
            {/* <p>Vendida por Marcos Mello</p> */}
            <div className="bid">
              <a href="/AddPieces" className="button">
                Agregar Producto
              </a>
              {/* <p>
                Restantes <span>80 piezas</span>
              </p> */}
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            {/* <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button2">
                Popular
              </a>
            </div> */}
            {/* <div className="filter_buttons">
              <a href="#" className="button">
                All
              </a>
              <a href="#" className="button2">
                Illustration
              </a>
              <a href="#" className="button2">
                Art
              </a>
              <a href="#" className="button2">
                Games
              </a>
            </div> */}
          </div>

          <main>
            {
              dataArray.map(curvaa => {
                return <CardMain 
                          key={curvaa._id} 
                          curvaa = {curvaa} 
                          updatePiece={updatePiece}
                          deletePiece={deletePiece}
                        />
              })
            }
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div>
    </div>
  );
}

export default MainContainer;
