"use client";
import ChatBox from "@/components/ChatBox";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Home() {
  const [messages, setMessages] = useState(msgs);
  return (
    <div className="flex flex-col gap-4 h-full max-h-screen overflow-hidden p-2 bg-slate-100">
      <h1 className="text-blue-500 text-3xl text-center pt-4">Care Bot</h1>

      <ChatBox messages={messages} />
      <div className="flex gap-2">
        <input
          className="border-gray-600 border px-4 py-2 rounded-xl w-full"
          placeholder="please enter you question..."
        />
        <div className="flex justify-center w-12 h-12 items-center bg-blue-400 text-white p-2 rounded-full cursor-pointer">
          <FaPaperPlane />
        </div>
      </div>
    </div>
  );
}

const msgs = [
  {
    user: "You",
    text: "How are you?",
  },
  {
    user: "CareBot",
    text: "Fine!",
  },
  {
    user: "You",
    text: "What's going on?",
  },
];
