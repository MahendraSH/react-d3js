import { Circle } from "lucide-react";
import { FC, useState } from "react";
import { useInterval } from "usehooks-ts";

interface SineWaveProps {}

const SineWave: FC<SineWaveProps> = ({}) => {
  const [data, setData] = useState<number[][]>([]);
  const sineNumbers = (n: number, x: number) => {
    const sinx = 5 + Math.sin(n * Math.random() * x) * n;

    return Array(Math.ceil(sinx))
      .fill(0)
      .map((_val, index) => [30 * index, 300 + Math.sin(index * x) * 190]);
  };

  useInterval(() => setData(sineNumbers(20, 0.4)), 2000);

  return (
    <div className=" w-full min-h-screen">
      <svg className=" w-full h-screen  *:fill-primary">
        {data.map(([x, y], index) => (
          <circle cx={x} cy={y + index} r={10} />
        ))}
      </svg>
    </div>
  );
};

export default SineWave;
