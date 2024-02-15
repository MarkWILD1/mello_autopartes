import React, { useEffect, useState } from "react";
import axios from "axios";
import CardMain from "./CardMain";
import "./MainContainer.css";
import "./searchPiece.css";
import "bootstrap/dist/css/bootstrap.css";

function SearchClient() {
  const [cliente, setCliente] = useState([]);
  const [search, setSearch] = useState("");
  const [clientesCount, setClientesCount] = useState(0);
  

  const URL = "http://localhost:3500/api/v1/clientes";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setCliente(response.data.data.clientes);
        setClientesCount(response.data.data.clientes.length);
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

  const filteredClientes = search
    ? cliente.filter((data) =>
        data.nombre.toLowerCase().includes(search.toLowerCase())
      )
    : cliente;

  const updatePiece = async (_id, updatedData) => {
    try {
      await axios.patch(
        `http://localhost:3500/api/v1/cliente/${_id}`,
        updatedData
      );
      // Refresh the data after updating
      getCliente();
    } catch (error) {
      console.error("Error updating piece:", error);
    }
  };

  const deletePiece = async (_id) => {
    try {
      await axios.delete(`http://localhost:3500/api/v1/cliente/${_id}`);
      // Refresh the data after deleting
      getCurvaA();
    } catch (error) {
      console.error("Error deleting piece:", error);
    }
  };

  

  return (
    <div className="maincontainer">
      <div className="title">
        <h2>Buscar cliente</h2>
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Cliente que desea buscar"
        /> <hr />
        <h4>clientes registrados en el sistema: <span>{clientesCount}</span></h4>
      </div>
      <div className="left">
        <div className="cards">
          <div className="filters">
          <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Celular</th>
            <th scope="col">Email</th>
            <th scope="col">Dirección</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {filteredClientes.map((cliente) => (
            <tr key={cliente._id}>
              <td>{cliente.nombre}</td>
              <td>{cliente.celular}</td>
              <td>{cliente.email}</td>
              <td>{cliente.direccion}</td>
              <button type="button" class="btn btn-warning" onClick={updatePiece}>Editar</button>
              <button type="button" class="btn btn-danger" onClick={deletePiece}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchClient;
