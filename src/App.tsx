import { Link, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import RandomCircle from "./components/d3/random-circles";
import { Button } from "./components/ui/button";
import { Loader } from "lucide-react";
import Rain from "./components/d3/rain";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/radmon-circle" element={<RandomCircle />} />
        <Route path="/rain" element={<Rain />} />
      </Route>
      <Route
        path="/*"
        element={
          <div className="flex justify-center items-center h-screen w-full">
            <Link to={"/"}>
              <Button variant={"outline"} size={"lg"}>
                <Loader className=" w-5 h-5 animate-spin mr-3 " />
                404 not found{" "}
              </Button>
            </Link>
          </div>
        }
      />
    </Routes>
  );
}
