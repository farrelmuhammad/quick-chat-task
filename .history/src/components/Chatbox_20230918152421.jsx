import React, { useState } from "react";

const Chatbox = () => {
  const [groupChats] = useState([
    { id: 1, name: "Group Chat 1" },
    { id: 2, name: "Group Chat 2" },
    { id: 3, name: "Group Chat 3" },
    // Add more group chats as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredChats = groupChats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="fixed bottom-[80px] right-20 bg-white w-[734px] border border-gray-300 p-4 rounded-lg shadow-lg">
        <div className="container mx-auto">
          {/* <h2 className="text-2xl font-semibold mb-4">Group Chats</h2> */}
          <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search group chats..."
          value={searchTerm}
          onChange={handleSearch}
          className="py-2 pl-10 pr-4 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {/* <FontAwesomeIcon icon={faSearch} className="text-gray-400" />{" "} */}
          {/* Ikon search */}
        </div>
      </div>
          <ul>
            {groupChats.map((chat) => (
              <li key={chat.id} className="mb-2">
                <p>{chat.name}</p>
                {/* <Link
                  to={`/chat/${chat.id}`} // Use the Link component to navigate to the chat room
                  className="text-blue-500 hover:underline"
                >
                  {chat.name}
                </Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
