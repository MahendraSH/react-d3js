import { FC } from "react";
import { Separator } from "../ui/separator";

interface RectLinesProps {}

const RectLines: FC<RectLinesProps> = ({}) => {
  const genFiexdArray = (n: number) => {
    return Array(n)
      .fill(0)
      .map((_i, index) => index);
  };

  return (
    <div className=" w-full min-h-screen">
      <svg className=" w-full min-h-screen *:fill-primary">
        {genFiexdArray(70).map((i, index) => (
          <rect key={index} width={10} height={600} x={10 * i + 10 * index} />
        ))}
      </svg>
      <Separator className=" bg-indigo-500  h-3" />

      <svg className=" w-full min-h-screen *:fill-primary">
        {genFiexdArray(30).map((i, index) => (
          <rect key={index} width={1400} height={10} y={10 * i + 10 * index} />
        ))}
      </svg>
   
    </div>
  );
};

export default RectLines;
