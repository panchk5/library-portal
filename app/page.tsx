import { Grid } from "@mui/material";
import Image from "next/image";
import Item from "@mui/material/Grid";
import OpenCard from "./components/opencard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
      <div className="z-10 items-center font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-bold text-center">
            Welcome to McMaster Libraries
          </h1>
          <p className="text-center">
            Central hub for all library resources at McMaster University (student hub).
          </p>
          
          <div className="grid grid-cols-2 p-1 mt-8 gap-3 w-max h-max" style={{ width: "100%" }}>
            <OpenCard />
            <OpenCard />
          </div>
          
        </div>
      </div>
    </main>
  );
}
