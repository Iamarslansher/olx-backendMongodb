import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateCard } from "../../config/firebase";
import Swal from "sweetalert2";
import "./updateCard.css";

function UpdateCard(props) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    setTitle(state.title);
    setDescription(state.description);
    setPrice(state.price);
  }, []);

  const updateFun = async () => {
    const imgUrl = await updateCard({ image });

    await fetch(`http://localhost:3001/products/update/${state._id}`, {
      method: "PUT",
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
      title: "Your product update successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="updateCard">
        <div className="card-image">
          <div>
            <img src={state.image} style={{ width: "100%" }} />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
        </div>
        <div className="card-content">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="card-input"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="card-input"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="card-input"
          />
        </div>
        <button onClick={updateFun}>Update</button>
      </div>
    </div>
  );
}

export default UpdateCard;
