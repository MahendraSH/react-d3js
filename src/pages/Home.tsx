import D3Table from "@/components/d3-table";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div className=" flex  h-screen justify-center  mt-10">
      <D3Table />
    </div>
  );
};

export default Home;
