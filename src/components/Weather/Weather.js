import React, { useEffect } from "react";
import styles from "./Weather.module.css";
import Nav from "../../common/Nav/Nav";
import SunAnimation from "../../common/components/SunAnimation/SunAnimation";
import { getCities } from "../../utils/api";

const Weather = () => {
  const { container } = styles;

  useEffect(() => {
    getCities();
  }, []);
  return (
    <div className={container}>
      <Nav />
      <SunAnimation />
    </div>
  );
};

export default Weather;
