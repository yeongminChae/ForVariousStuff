import React, { useEffect, useState } from "react";
import Message from "../components/message";

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
      const snowFlake = React.createElement("div", {
        className: "snow-div absolute",
        style: {
          left: Math.random() * leftWidth - 10,
          animationDelay: `${Math.random() * 10}s`,
          opacity: Math.random() + 0.3,
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
      <div className="flex h-full w-full items-center justify-center ">
        <div className="absolute right-20 h-[34rem] w-[22rem] rounded-lg bg-white p-3 shadow-2xl ">
          <div className="h-full w-full border-2 border-indigo-200 shadow-lg ">
            <div className="mt-10 flex flex-col p-3">
              <Message message="non reverse" />
              <Message message="test1" />
              <Message message="reversed" reverse={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
