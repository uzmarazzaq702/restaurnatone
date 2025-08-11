import React from "react";

import Flickity from "../components/home/Flickity";
import Online from "../components/home/Online";
import Super from "../components/home/Super";
import PizzaCard from "../components/home/Pizza";
import Burger from "../components/home/Burger";
import Chicken from "../components/home/Chicken";
import BBQ from "../components/home/BBQ";
import Soup from "../components/home/Soup";
import Show from "../components/home/Show";
import Showbutton from "../components/home/Showbutton";
import Specialpizza from "../components/home/Specialpizza";
// import Button from "../components/home/Button";
import All from "../components/home/All";
import Whypepole from "../components/home/Whypepole";
import Meet from "../components/home/Meet";
import Latest from "../components/home/Latest";
import HowMy from "../components/home/HowMy";
import Download from "../components/home/Download";
import Productlist from "../components/home/Productlist";

const Home = () => {
  return (
    <div>
      <Online />
      <Flickity />
      <Super />
      <div className="sticky top-0 bg-white z-[-10] shadow-sm">
        <PizzaCard />
      </div>
      <div className="sticky top-0 bg-white z-[-10] shadow-sm">
        <Burger />
      </div>
      <div className="sticky top-0 bg-white z-[-10] shadow-sm">
        <Chicken />
      </div>
      <div className="sticky top-0 bg-white z-[-10] shadow-sm">
      <BBQ />
      </div>
       
      <Soup />
      <Showbutton />
      <Show />
      <Specialpizza />
      {/* <Button /> */}
      <All />
      <Whypepole/>
      <Meet/>
      <Latest/>
      <Download/>
      <HowMy/>
      <Productlist/>
    </div>
  );
};

export default Home;
