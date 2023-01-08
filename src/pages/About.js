import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>오늘의 이벤트</div>
      <Outlet></Outlet>
    </>
  );
};

export default About;
