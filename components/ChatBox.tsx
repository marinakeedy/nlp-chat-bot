"use client";
import useChatScroll from "@/custom-hook/useChatScroll";
import { BiBot } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

export default function ChatBox({ messages }: { messages: any[] }) {
  const ref = useChatScroll(messages);
  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 border-gray-400 border rounded-xl flex-1 p-4 bg-white overflow-auto "
    >
      <div className="min-h-[65vh]"></div>
      {messages?.map((message: any, i: number) => (
        <div
          key={i}
          className={`flex gap-4 ${message.user === "You" && "justify-end"}`}
        >
          <div
            className={`w-4/5 flex flex-col ${
              message.user === "You" && "items-end"
            } gap-2`}
          >
            <div className="rounded-full flex w-fit text-xl border p-2">
              {message.user === "You" ? <FaUser /> : <BiBot />}
            </div>
            <div
              className={`w-4/5 ${
                message.user === "You"
                  ? "bg-blue-200 border-blue-400"
                  : "bg-gray-300 border-gray-400"
              } p-2 border  rounded-md`}
            >
              {message.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
