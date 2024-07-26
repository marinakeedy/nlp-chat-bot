export default function ChatBox({ messages }: { messages: any[] }) {
  return (
    <div className="flex flex-col gap-4 border-gray-400 border rounded-xl flex-1 p-4 bg-white overflow-auto ">
      <div className="min-h-[65vh]"></div>
      {messages?.map((message: any, i: number) => (
        <div
          key={i}
          className={`flex ${message.user === "You" && "justify-end"}`}
        >
          <div
            className={`w-3/5 ${
              message.user === "You"
                ? "bg-blue-200 border-blue-400"
                : "bg-gray-300 border-gray-400"
            } p-2 border  rounded-md`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}
