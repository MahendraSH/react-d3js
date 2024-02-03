import { FC, useState } from "react";
import { useInterval } from "usehooks-ts";

interface RandomCircleProps {}

const getRadmonData = () =>
  Array(10)
    .fill(0)
    .map(() => [Math.random() * 300 + 10, Math.random() * 200 + 10]);
const RandomCircle: FC<RandomCircleProps> = ({}) => {
  const [data, setData] = useState<number[][]>([]);

  useInterval(() => setData(getRadmonData()), 2000);

  return (
    <svg className=" w-full h-screen *:fill-primary">
      {data.map(([x, y], index) => (
        <circle cx={x} cy={y} r={10} key={index} />
      ))}
    </svg>
  );
};

export default RandomCircle;
