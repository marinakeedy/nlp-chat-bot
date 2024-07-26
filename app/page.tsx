
export default function Home() {
  return (
    <div className="flex flex-col h-screen p-2">
      <h1 className="text-blue-500 text-3xl text-center">Care Bot</h1>
      <div className="flex flex-col border-gray-400 border rounded-xl flex-1 p-4">
        <div className="flex-1">Chat</div>
       <input className="border-gray-600 border px-4 py-2 rounded-xl " placeholder="please enter you question..." />
      </div>
    </div>
  );
}
