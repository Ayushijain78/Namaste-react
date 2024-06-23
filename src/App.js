import React from "react";
import "./index.css";
import Header from "./components/Header";

//component composition when you use one component in another component i.e known as comp composition

const Restaurant = () => {
  return (
    <div className="res-container">
      <img
        className="card-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
      />
      <p>Seema Food</p>
      <p>Juice, briyani</p>
      <p>Rating 4.5</p>
      <p>38 minutes</p>
    </div>
  );
};
const Search = () => {
  return (
    <div className="search-cntr">
      <input type="search" className="search" />
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <Search />
      <div className="res-cntr">
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />{" "}
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default App;
