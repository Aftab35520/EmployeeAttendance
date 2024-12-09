"use client";
import { useState } from "react";
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";
export default function Page2({ children }) {
  const [witdth, setwidths] = useState(275);
  const getWidth = (e) => {
    setwidths(e);
    console.log(e);
  };
  return (

      <div className="flex justify-center relative">
        <div className=" w-[calc(100%-50px)] h-dvh flex justify-end">
          <div
            className={` h-dvh `}
            style={{ width: `calc(100% - ${witdth}px)` }}
          >
            <Navbar getWidth={getWidth} />
            <Headers />
            {children}
          </div>
        </div>
      </div>

  );
}
