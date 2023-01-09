import { useState } from "react";
import { cls } from "../libs/utils";

interface IMessage {
  message: string;
  reverse?: boolean;
  profilePic?: string;
}

const Message = ({ message, profilePic, reverse }: IMessage) => {
  const [isRev, setIsRev] = useState(false);
  return (
    <div
      className={cls(
        "mb-2 flex ",
        reverse ? "flex flex-row-reverse space-x-reverse" : "space-x-2"
      )}
    >
      <div
        className={cls(
          "flex h-12 w-4/5 items-center rounded-3xl border border-indigo-200 p-3 ",
          reverse ? "bg-slate-200" : ""
        )}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
