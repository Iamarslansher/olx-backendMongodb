// Dashboard.js
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../Cards.js";
import Footer from "../../ReUseAble/Footer/index.js";
import pic from "./my_pic.jpg";
import "./dashboard.css";

function Dashboard() {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.data));
  });
  // console.log(products);
  const imageUrls = [
    "https://img.freepik.com/free-photo/still-life-care-products_23-2149371308.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711756800&semt=ais",
    "https://www.oberlo.com/media/1603958036-new-products.jpg",
    "https://queue-it.com/media/ppcp1twv/product-drop.jpg",
    "https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.jpg?s=612x612&w=0&k=20&c=BXNMs3xZNXP__d22aVkeyfvgJ5T18r6HuUTEESYf_tE=",
    "https://newsimg.giznext.com/mobile/production/news/wp-content/uploads/2022/04/08235522/Smartphone-not-available-in-India.jpg",
    "https://img.etimg.com/thumb/width-640,height-480,imgsize-14732,resizemode-75,msid-103609061/top-trending-products/health-fitness/exercise-fitness/6-best-selling-kids-cycles-discover-the-joy-of-riding-with-colorful-and-safe-cycles/kids-cycle.jpg",
    "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/honda-select-model-black-with-red-2023-1691751779637.png?q=80",
    "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg",
    "https://t4.ftcdn.net/jpg/01/23/68/71/360_F_123687102_3rPakqjpruQ7hV0yImMYcSYBXGkTCwE5.jpg",
    "https://a.storyblok.com/f/165154/1500x700/52871e9dfe/product-images.jpg/m/",
    "https://img.freepik.com/premium-photo/beautiful-spa-composition-towels-spa-accessories_441923-12178.jpg",
    "https://www.atlashonda.com.pk/wp-content/uploads/2023/09/cg125s-black-red-1.png",
    "https://img.freepik.com/free-vector/green-tractor-with-big-wheels_1308-82084.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1711756800&semt=sph",
    "https://www.bagx.pk/cdn/shop/files/WhatsAppImage2023-11-14at12.35.04PM_1.jpg?v=1699947408",
    "https://static.vecteezy.com/system/resources/thumbnails/010/005/706/small_2x/cricket-bat-illustrations-clip-art-best-unique-set-design-white-background-with-premium-file-free-download-creative-concept-and-hi-quality-design-vector.jpg",
  ];
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo">OLX</div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#" onClick={() => Navigate("/addCard")}>
              Add Card
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
        <div className="profile">
          <img
            src={pic}
            // src="https://i.pinimg.com/originals/f1/68/53/f16853fb8fd80a8556a178ccdb40541a.jpg"
            alt="Profile"
          />
        </div>
      </nav>
      <div className="content">
        <div className="image-container">
          {imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
      {/* design Card */}

      <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
          </div>
          <div className="card_title title-white"></div>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
          </div>
          <div className="card_title"></div>
        </div>
        <div className="card 4">
          <div className="card_image">
            <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
          </div>
          <div className="card_title title-black"></div>
        </div>
      </div>

      <div>
        {!products.length ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              // height: "30%",
            }}
          >
            <img
              src="https://i.pinimg.com/originals/d0/e3/ca/d0e3ca45bb78d6cf92bb88aaefdc020e.gif"
              style={{
                borderRadius: "20px",
              }}
            />
            {/* <h2>loading</h2> */}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 50,
            }}
          >
            {products.map((item, index) => {
              return <Cards item={item} />;
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
