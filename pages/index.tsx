import React, { useEffect, useState } from "react";
import Message from "../components/message";
import LocalStorage from "../libs/utils";
import SnowsFor from "../components/snow";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const messageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const messageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputText(event.target.value);
  };
  const showMessage = () => {
    if (LocalStorage.getItem("message") != null) {
      return <Message message="" />;
    }
  };
  const sendBtn = () => {
    if (inputText === "") {
      return (
        <>
          <div className="flex h-7 w-7 items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
              />
            </svg>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </div>
        </>
      );
    } else if (inputText != "") {
      return (
        <>
          <button
            type="submit"
            className="ml-9 h-full w-12 text-sm text-indigo-400"
          >
            보내기
          </button>
        </>
      );
    }
  };
  return (
    <div className="h-screen w-screen overflow-hidden bg-sky-200">
      <div className="overflow-hidden ">{SnowsFor()}</div>
      <div className="flex h-full w-full items-center justify-center ">
        <div className="absolute right-20 h-[34rem] w-[22rem] rounded-lg bg-white p-3 shadow-2xl ">
          <div className="h-full w-full border-2 border-indigo-200 shadow-lg ">
            <div className="mt-4 flex flex-col justify-center p-3">
              <div className="h-[27rem] w-full">
                {/* <Message message={inputText} />
                <Message message="non reverse" />
                <Message message="reversed" reverse={true} /> */}
              </div>
              <div className="flex h-9 w-full items-center justify-center rounded-full border border-indigo-200  ">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-bl from-indigo-500 to-sky-300 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="transparent"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    />
                  </svg>
                </div>
                <form onSubmit={messageSubmit}>
                  <input
                    type="text"
                    onChange={messageChange}
                    placeholder="Send Message..."
                    className="ml-2 flex w-[10.5rem] items-center justify-start text-sm text-indigo-400 placeholder:text-indigo-400 focus:outline-none"
                  />
                </form>
                {sendBtn()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
