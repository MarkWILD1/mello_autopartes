import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import "./AddPieces.css";

const AddClient = () => {
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  const navigate = useNavigate();

  const addCliente = () => {

    Axios.post("http://localhost:3500/api/v1/clientes/saveCliente", {
      nombre: nombre,
      celular: celular,
      email: email,
      direccion: direccion,
    }).then((res) => {
      if (res.data.success === true) {
        console.log("Cliente agregado", res.data.success)
        navigate("/frontend/src/App.jsx")
      } else {
        errorAlert(res.data.message);
      }
        cleanFields()
        successAlert()
    })
  };

  const cleanFields = () => {
    setNombre("");
    setCelular("");
    setEmail("");
    setDireccion("");
    setId("");
    setEditar(false);
  };

  const successAlert = () => {
    Swal.fire({
      title: "Pieza AGREGADA exitosamente!",
      text: "",
      icon: "success",
    });
  };

  return (
    <div className="addPieceContainer">
      <form>
        <div className="title">
          <h2>Registro de Cliente</h2>
        </div>
        <label className="labels" htmlFor="nombre">
          Nombre del cliente:
        </label>
        <input
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          type="text"
          id="nombreCliente"
          name="nombreCliente"
          required
        />

        <label className="labels" htmlFor="valor">
          Celular:
        </label>
        <input
          onChange={(e) => {
            setCelular(e.target.value);
          }}
          type="number"
          id="nombrePieza"
          name="nombrePieza"
          required
        />

        <label className="labels" htmlFor="valor">
          Email:
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          id="email"
          name="email"
          required
        />

        <label className="labels" htmlFor="imagenPieza">
          Direccion:
        </label>
        <input
          onChange={(e) => {
            setDireccion(e.target.value);
          }}
          type="text"
          id="imagenPieza"
          name="imagenPieza"
          required
        />

        <button onClick={addCliente} type="submit">
          Guardar
        </button>
        <a href="/" className="button">
          Volver
        </a>
      </form>
    </div>
  );
};

export default AddClient;
