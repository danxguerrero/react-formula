import { useState, useEffect } from "react";

export const MessageBoard = () => {
  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState("guest");
  const [messageInput, setMessageInput] = useState("");

  const fetchMessages = () => {
    // Unathorized when not using the react formula platform
    fetch(
      "https://api.react-formula.com/learning-api/demos/message-board/messages"
    )
      .then((response) => response.json())
      .then((data) => setMessages(data));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        "https://api.react-formula.com/learning-api/demos/message-board/messages",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, message: messageInput }),
        }
      );
      if (!response.status !== 201) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        console.log("Message added")
      }
      
    } catch (err) {
      console.error("There was an error adding new message: ", err);
    } finally {
      setMessageInput("");
      fetchMessages();
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const messageItems = messages.map((message, idx) => (
    <div
      key={idx}
      className="p-6 m-4 border border-gray-300 rounded-md shadow-md"
    >
      <div className="mb-2 text-lg font-medium">{message.username}</div>
      <div>{message.message}</div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-full max-w-xl ">{messageItems}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-slate-500 rounded-md w-24 mr-3 pl-1"
          placeholder="guest"
        />
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="border border-slate-500 rounded-md w-[300px] mr-3 pl-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-1 px-3 rounded-md"
        >
          submit
        </button>
      </form>
    </div>
  );
};