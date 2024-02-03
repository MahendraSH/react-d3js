import * as d3 from "d3";
import { FC, useState } from "react";
import { useInterval } from "usehooks-ts";
import { Separator } from "../ui/separator";

interface RainProps {}

interface data {
  width: number;
  x: number;
  height: number;
  colorName: string;
}

const colorArray = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];
const randomColor = () => {
  return colorArray[Math.floor(Math.random() * colorArray.length)];
};
const randomHeight = () => {
  const radHeight = Math.floor(Math.random() * (window.innerHeight - 100));

  return radHeight;
};

const Rain: FC<RainProps> = ({}) => {
  const [datax, setDatax] = useState<data[]>([]);
  const [datay, setDatay] = useState<data[]>([]);

  useInterval(() => {
    let n = 70;
    const datagen = d3.range(n).map((d) => ({
      width: 10,
      x: d * 20,
      height: 20 + randomHeight() + Math.cos(n * 1) * d,

      colorName: randomColor(),
    }));
    setDatax(datagen);
  }, 2000);
  useInterval(() => {
    let n = 20;
    const datagen = d3.range(n).map((d) => ({
      height: 10,
      x: d * 30,
      width: 20 + randomHeight() + Math.cos(n * 1) * d,

      colorName: randomColor(),
    }));
    setDatay(datagen);
  }, 2000);

  return (
    <div className=" min-h-screen  w-full">
      <svg className=" w-full h-screen ">
        {datax.map((item) => (
          <rect
            key={item.height}
            width={item.width}
            height={item.height}
            x={item.x}
            fill={item.colorName}
          />
        ))}
      </svg>
      <Separator />
      <svg className=" w-full h-screen ">
        {datay.map((item) => (
          <rect
            key={item.width}
            width={item.width}
            height={item.height}
            y={item.x}
            fill={item.colorName}
          />
        ))}
      </svg>
    </div>
  );
};

export default Rain;
