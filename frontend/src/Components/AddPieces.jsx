import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import "./AddPieces.css";

const AddPieces = () => {
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [img, setImg] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");

  const navigate = useNavigate();

  const addPiece = () => {

    Axios.post("http://localhost:3500/api/v1/curvaa/save", {
      nombre_pieza: nombre,
      valor_costo: valor,
      img_pieza: img,
      descripcion: descripcion,
      stock: stock,
    }).then((res) => {
      if (res.data.success === true) {
        console.log("pieza agregada", res.data.success)
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
    setValor("");
    setImg("");
    setDescripcion("");
    setStock("")
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
          <h2>Registro de Producto</h2>
        </div>
        <label className="labels" htmlFor="nombre">
          Nombre de la Pieza:
        </label>
        <input
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          type="text"
          id="nombrePieza"
          name="nombrePieza"
          required
        />

        <label className="labels" htmlFor="valor">
          Valor - Costo:
        </label>
        <input
          onChange={(e) => {
            setValor(e.target.value);
          }}
          type="number"
          id="nombrePieza"
          name="nombrePieza"
          required
        />

        <label className="labels" htmlFor="valor">
          Stock:
        </label>
        <input
          onChange={(e) => {
            setStock(e.target.value);
          }}
          type="number"
          id="stock"
          name="stock"
          required
        />

        <label className="labels" htmlFor="imagenPieza">
          Imagen de la Pieza:
        </label>
        <input
          onChange={(e) => {
            setImg(e.target.value);
          }}
          type="text"
          id="imagenPieza"
          name="imagenPieza"
          required
        />

        <label className="labels" htmlFor="descripcion">
          Descripción:
        </label>
        <textarea
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
          id="descripcion"
          name="descripcion"
          rows="4"
          required
        ></textarea>

        <button onClick={addPiece} type="submit">
          Guardar
        </button>
        <a href="/" className="button">
          Volver
        </a>
      </form>
    </div>
  );
};

export default AddPieces;
