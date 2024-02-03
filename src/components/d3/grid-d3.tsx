import { FC } from "react";

interface GridD3Props {}

const GridD3: FC<GridD3Props> = ({}) => {
  const genFiexdArray = (n: number) => {
    return Array(n)
      .fill(0)
      .map((_i, index) => index);
  };
  return (
    <div>
      <svg className=" w-full min-h-screen *:fill-primary">
        {genFiexdArray(30).map((i, index) => (
          <rect key={index} width={1400} height={10} y={10 * i + 10 * index} />
        ))}
        {genFiexdArray(70).map((i, index) => (
          <rect key={index} width={10} height={600} x={10 * i + 10 * index} />
        ))}
      </svg>
    </div>
  );
};

export default GridD3;
