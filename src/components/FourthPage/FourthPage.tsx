import React, { useEffect } from "react";
import Parallax from "parallax-js";

import style from "./style.module.css";

import layer1 from "./assets/layer1.png";
import layer2 from "./assets/layer2.png";
import layer3 from "./assets/layer3.png";
import layer4 from "./assets/layer4.png";
import layer5 from "./assets/layer5.png";
import layer6 from "./assets/layer6.png";

interface Layer {
  name: string;
  image: string;
  dataDepth: string;
}

export const FourthPage = () => {
  const layers: Layer[] = [
    {
      name: "layer6",
      image: layer6,
      dataDepth: "-0.15",
    },
    {
      name: "layer5",
      image: layer5,
      dataDepth: "-0.2",
    },
    {
      name: "layer4",
      image: layer4,
      dataDepth: "-0.15",
    },
    {
      name: "layer3",
      image: layer3,
      dataDepth: "-0.25",
    },
    {
      name: "layer2",
      image: layer2,
      dataDepth: "-0.15",
    },
    {
      name: "layer1",
      image: layer1,
      dataDepth: "-0.2",
    },
  ];

  useEffect(() => {
    const content = document.getElementById("content");
    new Parallax(content);
  });

  return (
    <div className={style.container}>
      <div className={style.content} id="content">
        {layers.map((layer, index, arr) => (
          <img
            key={index + arr.length}
            data-depth={layer.dataDepth}
            src={layer.image}
            alt={layer.name}
          />
        ))}
      </div>
    </div>
  );
};
