import React, { useEffect, useState } from "react";

export default function Home() {
  const [leftWidth, setLeftWidth] = useState(0);
  useEffect(() => {
    const leftPostition = () => {
      setLeftWidth(window.screen.width);
    };
    leftPostition();
  }, []);
  const snowsFor = () => {
    let snowArr: any = [];
    for (let i = 0; i < 40; i++) {
      const snowFlake = React.createElement("div", {
        className: "snow-div absolute",
        style: {
          left: Math.random() * leftWidth - 10,
          animationDelay: `${Math.random() * 10}s`,
          opacity: Math.random(),
          animation: `snowFalls ${Math.random() * 20 + 10}s linear infinite`,
        },
      });
      const makeSnow = (
        <div id={i + ""} key={i}>
          {snowFlake}
        </div>
      );
      snowArr.push(makeSnow);
    }
    return snowArr;
  };
  return (
    <div className="h-screen w-screen overflow-hidden bg-sky-200">
      <div className="overflow-hidden ">{snowsFor()}</div>
    </div>
  );
}
