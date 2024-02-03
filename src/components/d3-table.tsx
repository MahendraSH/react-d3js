import { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { d3Links } from "@/lib/d3Links";
import { Button } from "./ui/button";
import { Link2 } from "lucide-react";
import { Link } from "react-router-dom";

interface D3TableProps {}

const D3Table: FC<D3TableProps> = ({}) => {
  const d3_link = d3Links;

  return (
    <Table className=" max-w-fit mx-auto max-h-96 overflow-auto">
      <TableCaption> D3 react components </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-52"> id </TableHead>
          <TableHead className="w-52"> label </TableHead>
          <TableHead className="w-52"> to link </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {d3_link.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.label}</TableCell>
            <TableCell>
              <Link to={item.to}>
                <Button variant="ghost" size={"icon"}>
                  <Link2 className="w-5 h-5 " />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default D3Table;
