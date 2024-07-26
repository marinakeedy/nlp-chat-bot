import ChatBox from "@/components/ChatBox";
import { FaPaperPlane } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col h-screen p-2">
      <h1 className="text-blue-500 text-3xl text-center p-4">Care Bot</h1>
      <div className="flex flex-col border-gray-400 border rounded-xl flex-1 p-4">
        <ChatBox />
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
    </div>
  );
}
