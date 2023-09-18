import React, { useState } from "react";
import { Link } from "react-router-dom";

const Chatbox = () => {
  const [groupChats] = useState([
    { id: 1, name: "Group Chat 1" },
    { id: 2, name: "Group Chat 2" },
    { id: 3, name: "Group Chat 3" },
    // Add more group chats as needed
  ]);
  return (
    <>
      <div className="fixed bottom-[80px] right-20 bg-white w-[734px] border border-gray-300 p-4 rounded-lg shadow-lg">
        <div className="container mx-auto mt-4">
          <h2 className="text-2xl font-semibold mb-4">Group Chats</h2>
          <ul>
            {groupChats.map((chat) => (
              <li key={chat.id} className="mb-2">
                <Link
                  to={`/chat/${chat.id}`} // Use the Link component to navigate to the chat room
                  className="text-blue-500 hover:underline"
                >
                  {chat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
