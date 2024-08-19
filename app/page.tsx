import { Grid } from "@mui/material";
import Image from "next/image";
import Item from "@mui/material/Grid";
import ThodeCard from "./components/thodecard";
import MillsCard from "./components/millscard";

export default function Home() {
  return (
    <main className="static flex min-h-screen flex-col items-center justify-between p-6 pt-9 sm:p-24 bg-hero-pattern bg-cover">
      <div className="z-10 items-center font-mono text-sm lg:flex backdrop-blur-sm bg-white/30 rounded-lg p-2">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-xl sm:text-4xl font-bold text-center font-sans">
            Welcome to McMaster Libraries
          </h1>
          <p className="text-center">
            Central hub for all library resources at McMaster University
            (student hub).
          </p>

          <div
            className="grid grid-cols-1 p-1 mt-4 sm:mt-8 gap-3 w-max h-max md:grid-cols-2"
            style={{ width: "100%" }}
          >
            <ThodeCard />
            <MillsCard />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <p>Gif credits: TorinoGT</p>
        <p className="font-bold text-red-700">
          Notice: Only frontend implemented
        </p>
      </div>
    </main>
  );
}
