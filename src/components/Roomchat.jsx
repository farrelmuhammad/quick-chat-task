import React, { useState } from "react";

const Roomchat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // Add the new message to the list of messages
      setMessages([...messages, { text: newMessage, sender: "You" }]);
      // Clear the input field
      setNewMessage("");
    }
  };

  return (
    <>
      <div className="fixed bottom-[80px] right-20 bg-white w-[734px] border border-gray-300 p-4 rounded-lg shadow-lg">
        <div className="h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <span className="font-semibold">{message.sender}:</span>{" "}
              {message.text}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full border border-gray-300 p-2 rounded-lg"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-lg mt-2"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Roomchat;
