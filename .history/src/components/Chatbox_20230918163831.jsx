import React, { useState } from "react";

const ChatListPage = () => {
  const [groupChats] = useState([
    {
      id: 1,
      name: "Group Chat 1",
      messages: [
        {
          sender: "John Doe",
          text: "Hai, apa kabar?",
          date: "2023-09-17T10:30:00Z",
          read: false,
        },
        // Tambahkan pesan-pesan lain di sini
      ],
    },
    {
      id: 2,
      name: "Group Chat 2",
      messages: [
        {
          sender: "Alice Smith",
          text: "Sudah siap untuk pertemuan besok?",
          date: "2023-09-16T15:45:00Z",
          read: true,
        },
        // Tambahkan pesan-pesan lain di sini
      ],
    },
    // Tambahkan lebih banyak group chat jika diperlukan
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fungsi untuk mendapatkan pesan terakhir dan pengirim terakhir dari grup chat
  const getLastMessageAndSender = (chat) => {
    const lastMessage = chat.messages[chat.messages.length - 1];
    return {
      sender: lastMessage.sender,
      message: lastMessage.text,
      date: lastMessage.date,
      read: lastMessage.read,
    };
  };

  // Fungsi untuk mengurutkan grup chat berdasarkan tanggal pesan terakhir
  const sortChatsByLastMessageDate = (chats) => {
    return chats.sort((a, b) => {
      const lastMessageDateA = new Date(a.date);
      const lastMessageDateB = new Date(b.date);
      return lastMessageDateB - lastMessageDateA;
    });
  };

  // Mengelompokkan grup chat yang belum dibaca dan yang sudah dibaca
  const unreadChats = [];
  const readChats = [];
  groupChats.forEach((chat) => {
    const lastMessage = chat.messages[chat.messages.length - 1];
    if (!lastMessage.read) {
      unreadChats.push(getLastMessageAndSender(chat));
    } else {
      readChats.push(getLastMessageAndSender(chat));
    }
  });

  // Mengurutkan grup chat
  const sortedUnreadChats = sortChatsByLastMessageDate(unreadChats);
  const sortedReadChats = sortChatsByLastMessageDate(readChats);

  const sortedChats = [...sortedUnreadChats, ...sortedReadChats];

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-semibold mb-4">Group Chats</h2>

      <div className="mb-4 relative">
        <div className="absolute inset-y-0 right-6 pl-3 flex items-center pointer-events-none">
          <svg
            width="15"
            height="15"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.21143 7.54717H8.75345L12.1771 10.9777L11.1548 12L7.72429 8.57633V8.03431L7.53905 7.8422C6.75688 8.51458 5.74145 8.91938 4.63682 8.91938C2.17369 8.91938 0.177124 6.92281 0.177124 4.45969C0.177124 1.99657 2.17369 0 4.63682 0C7.09994 0 9.09651 1.99657 9.09651 4.45969C9.09651 5.56432 8.6917 6.57976 8.01932 7.36192L8.21143 7.54717ZM1.54933 4.4597C1.54933 6.16811 2.92841 7.54718 4.63681 7.54718C6.34522 7.54718 7.72429 6.16811 7.72429 4.4597C7.72429 2.7513 6.34522 1.37222 4.63681 1.37222C2.92841 1.37222 1.54933 2.7513 1.54933 4.4597Z"
              fill="#333333"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search group chats..."
          value={searchTerm}
          onChange={handleSearch}
          className="py-2 pl-10 pr-4 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <ul>
        {sortedChats.map((chat, index) => (
          <li key={index} className="mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl">
                  {chat.sender.charAt(0).toUpperCase()}
                  {chat.read === false && (
                    <span className="w-2 h-2 ml-2 bg-red-500 rounded-full inline-block"></span>
                  )}
                </div>
                <div className="ml-4">
                  <div className="text-blue-500 hover:underline">
                    {chat.sender}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(chat.date).toLocaleDateString()}{" "}
                    {new Date(chat.date).toLocaleTimeString()}
                  </div>
                </div>
              </div>
              <div className="text-gray-700">{chat.message}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatListPage;
