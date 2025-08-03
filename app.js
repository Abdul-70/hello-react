import React from "react";
import { createRoot } from "react-dom/client";

/*
--Header
    --Logo
    --Nav Item
        --Home
        --Contact Us
        --About Us
        --Cart
--Body
    --Search
    --Restaurent Container
    --restaurent Card
--Footer
    --Copyright
    --Links
    --Address
    --Contacts
*/
const Header = () => {
    
  return (
    
    <div className="header">
      <div className="appLogo">
        <img
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-express-by-gigih-rudya-designcrowd.png"
          alt="applogo"
        />
      </div>
      <div className="navItem">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="card-container">
        <CardContainer resName="Dominose" cuisine="Burger, Biryani, Bread" />
        <CardContainer resName="ChaiWala" cuisine="Chai, Samosa, Bread"/>
        
      </div>
    </div>
  );
};

const CardContainer = (props) => {
    console.log(props)
  return (
    <div className="card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/61a19651-713d-4f7d-849d-f4ba3a8d5e5f_152971.JPG"
        alt=""
        className="cardImg"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>$10</h4>
      <h4>3.9</h4>
      <h4>25 minuts</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
