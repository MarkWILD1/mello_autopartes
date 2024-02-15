import { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import "./AddPieces.css";
import { useNavigate, useParams } from "react-router-dom";

const EditPiece = () => {
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [img, setImg] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();
  const { _id } = useParams();

  console.log("id_pieza: " + _id);

  useEffect(() => {
    if (_id) {
      Axios.get(`http://localhost:3500/api/v1/curvaa/${_id}`)
        .then((res) => {
          console.log("API Response:", res.data);
          setNombre(res.data.nombre_pieza);
          setValor(res.data.valor_costo);
          setImg(res.data.img_pieza);
          setDescripcion(res.data.descripcion);
          setStock(res.data.stock)
        })
        .catch((err) => {
          console.error("API Error:", err);
        });
    }
  }, [_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.patch(`http://localhost:3500/api/v1/curvaa/${_id}`, {
      nombre_pieza: nombre,
      valor_costo: valor,
      img_pieza: img,
      descripcion: descripcion,
      stock: stock,
    }).then((res) => {
      if (res.data.updated) {
        navigate("/");
      } else {
        console.log(res);
      }
      successAdd();
    });
  };

  const successAdd = () => {
    Swal.fire({
      title: "Pieza ACTUALIZADA exitosamente!",
      text: "",
      icon: "success",
    });
  };

  return (
    <div className="addPieceContainer">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h2>Editar Pieza</h2>
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
          value={nombre}
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
          id="valorPieza"
          name="valorPieza"
          value={valor}
          required
        />

        <label className="labels" htmlFor="valor">
          Cantidad - stock:
        </label>
        <input
          onChange={(e) => {
            setStock(e.target.value);
          }}
          type="number"
          id="cantidad"
          name="cantidad"
          value={stock}
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
          value={img}
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
          value={descripcion}
          required
        ></textarea>

        <button onClick={handleSubmit}>Guardar</button>
      </form>
    </div>
  );
};

export default EditPiece;
