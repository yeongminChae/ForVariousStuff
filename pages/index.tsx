import React, { useEffect, useState } from "react";

export default function Home() {
  const [leftWidth, setLeftWidth] = useState(0);
  const leftPostition = () => {
    setLeftWidth(Math.random() * window.screen.width);
  };
  useEffect(() => {
    leftPostition();
  }, []);
  console.log(leftWidth);
  const makeSnow = () => {
    const snowFlake = React.createElement("div", { className: "snow-div" });
  };
  return (
    <div className="h-screen w-screen overflow-hidden bg-sky-200">
      <div className="" />
    </div>
  );
}
