import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userCardItem } from "../../config/firebase";
import Swal from "sweetalert2";
import "./addCard.css";

const AddCard = ({ onAddItem }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const imgUrl = await userCardItem({ image });
      await fetch("http://localhost:3001/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          price,
          image: imgUrl,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your product has been addedd successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <h2>Add New Item</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Select Image</label>
        <input
          type="file"
          id="image"
          //   value={image}
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddCard;
