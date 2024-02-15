import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CardMain = ({ curvaa, updatePiece, deletePiece }) => {
  const { _id, nombre_pieza, valor_costo, img_pieza, descripcion, stock } = curvaa
  const percent = 1.3;


  const handleDelete = () => {
    Swal.fire({
      title: "¿Está seguro que desea eliminar esta pieza?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePiece(_id);
      }
    });
  };

 
  return (
    <>
      <div className="card_main">
        <img src={img_pieza} alt="" className="card_main_img" />
        <div className="card_main_name">
          <h2>{nombre_pieza}</h2>
          <div className="card_main_icon">
            <i>
              <FaDollarSign /> <span>{valor_costo * percent}</span>
            </i>
          </div>
      </div>

      <div className="stat">
        <div>
          <p>
            Descripcion: <span>{descripcion}</span>
          </p>
        </div>
        <h2 style={{ color: "white"}}> Stock: {stock}</h2>
      </div>

      <div className="card_main_button">
        <button
          className="button2 btn"
        > <Link to={`/curvaa/${curvaa._id}`}>Editar</Link>
        </button>
        <button className="button btn" onClick={handleDelete}>
            Eliminar
        </button>
      </div>
      </div>
    </>
    
  );
}

export default CardMain;
