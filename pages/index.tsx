import React, { useEffect, useState } from "react";

export default function Home() {
  let [leftWidth, setLeftWidth] = useState(0);
  useEffect(() => {
    const leftPostition = () => {
      setLeftWidth(window.screen.width);
    };
    leftPostition();
  }, []);
  const snowsFor = () => {
    let snowArr = [];
    for (let i = 0; i < 35; i++) {
      snowArr.push(
        <div className="" key={i}>
          {React.createElement("div", {
            className: "snow-div absolute ",
            style: {
              left: Math.random() * leftWidth - 10,
            },
          })}
        </div>
      );
    }
    return snowArr;
  };
  return (
    <div className="h-screen w-screen overflow-hidden bg-sky-200">
      <div className="overflow-hidden ">{snowsFor()}</div>
    </div>
  );
}
