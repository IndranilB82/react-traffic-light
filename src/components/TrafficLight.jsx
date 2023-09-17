import Light from "./Light";
import React, { useState, useEffect } from "react";

const lightDurations = [3000, 20000, 5000];
const lightDurations1 = [3000, 40000, 5000];
const lightDurations2 = [3000, 10000, 5000];

const TrafficLight = ({ initialValue, className, direction }) => {
  const [colorIndex, setColorIndex] = useState(initialValue);

  useEffect(() => {
    let timer;
    const today = new Date().getHours();
    if ((today >= 8 && today <= 10) || (today >= 17 && today <= 19)) {
      let dirc;
      if(direction=="North" || direction=="South"){
        dirc = lightDurations1
      }
      if(direction=="East" || direction=="West"){
        dirc = lightDurations2
      }
      timer = setTimeout(() => {
        setColorIndex((colorIndex + 1) % 3);
      }, dirc[colorIndex]);
    } else {
      timer = setTimeout(() => {
        setColorIndex((colorIndex + 1) % 3);
      }, lightDurations[colorIndex]);
    }

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={className}>
      <div>{direction}</div>
      <Light color="#f00" active={colorIndex === 0} />
      <Light color="#ff0" active={colorIndex === 2} />
      <Light color="#0c0" active={colorIndex === 1} />
    </div>
  );
};

export default TrafficLight;
