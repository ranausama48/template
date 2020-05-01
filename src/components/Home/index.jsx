import React from "react";
import Slider from "./slider";
import Fram from "./farming";
import Featured from "./featured";
import Work from "./work";
import WhyChoseUs from "./why-chose-us";
import Testimonials from "./testimonials";
import Blog from "./blog";
const index = () => {
  return (
    <div>
      <Slider />
      <Fram />
      <Featured />
      <Work />
      <WhyChoseUs />
      <Testimonials />
      <Blog />
    </div>
  );
};
export default index;
