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
    let snowArr = [];
    for (let i = 0; i < 40; i++) {
      // const snowFlake = React.createElement("div", {
      //   className: "snow-div absolute",
      //   style: {
      //     left: Math.random() * leftWidth - 10,
      //     animationDelay: `${Math.random() * 10}s`,
      //     opacity: Math.random(),
      //     animation: `snowFalls ${Math.random() * 20 + 10}s linear`,
      //   },
      // });
      snowArr.push(
        <div key={i}>
          {React.createElement("div", {
            className: "snow-div absolute",
            style: {
              left: Math.random() * leftWidth - 10,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random(),
              animation: `snowFalls ${Math.random() * 20 + 10}s linear`,
            },
          })}
          {/* {snowFlake} */}
        </div>
      );
    }
    return snowArr;
  };
  const snowFunc = () => {
    const removeDiv = (e: any) => {
      // e.target.parentElement.parentElement.remove();
      e.currentTarget.parentNode.remove();
    };
    setTimeout(() => {
      removeDiv(snowsFor());
      snowsFor();
    }, Math.random() * 10 + (Math.random() * 20 + 10));
    return snowsFor();
  };
  return (
    <div className="h-screen w-screen overflow-hidden bg-sky-200">
      {/* <div className="overflow-hidden ">{snowFunc()}</div> */}
      <div className="overflow-hidden ">{snowsFor()}</div>
    </div>
  );
}
