import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./card.css";

import { BiCartAdd } from "react-icons/bi";

function Cards(props) {
  const navigate = useNavigate();
  const { item } = props;

  const deleteFunc = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this product!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await fetch(`http://localhost:3001/products/delete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((res) => console.log(res));
          console.log(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {}
  };
  return (
    <div className="userCard">
      <img src={item.image} alt="image" title="image" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{item.title}</h2>
        <p className="card-description">{item.description}</p>
        <p className="card-price">${item.price}</p>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="card-button" onClick={() => deleteFunc(item._id)}>
            Delete
          </button>
          <button
            className="card-button"
            onClick={() =>
              navigate("/updateCard", {
                state: item,
              })
            }
          >
            Update
          </button>
        </div>
        <BiCartAdd title="Add to cart" className="cartBtn" />
      </div>
    </div>
  );
}

export default Cards;
