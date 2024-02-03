import { FC } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { GithubIcon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="footer footer-center p-4  border-t-2  pb-10 flex justify-start ">
      <p className="text-accent-foreground font-semibold">
        <Link to={"https://github.com/MahendraSH/"} target="_blank">
          Buit by <Button variant={"underline"}> Mahendra S H</Button>{" "}
        </Link>
      </p>
      <Link to={"https://github.com/MahendraSH/react-d3js"} target="_blank">
        <Button variant={"ghost"} size={"icon"}>
          {" "}
          <GitHubLogoIcon className=" w-6 h-6 " />
        </Button>
      </Link>
    </footer>
  );
};

export default Footer;
