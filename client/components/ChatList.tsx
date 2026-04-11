"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Image from "next/image";

// icons
import { Search } from "lucide-react";

// images
import profile from "@/public/profile.png";

export default function ChatList() {
  const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const res = await api.get("/users"); // we'll add later
  //       setUsers(res.data);
  //     };

  //     fetchUsers();
  //   }, []);

  return (
    <div className=" bg-gray-100 h-screen px-3 py-2 space-y-2">
      <h3 className="text-2xl font-semibold">Chats</h3>

      {/* search box  */}
      <div className="flex items-center justify-center gap-2 border border-gray-400 shadow focus-within:ring-1 p-1.5 rounded-xl">
        <Search className="text-sm text-gray-600 w-5 h-5" />
        <input
          type="text"
          className="w-full outline-none"
          placeholder="Search & start a new chat"
        />
      </div>

      {/* chat lists  */}
      <div className="space-y-2 mt-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-xl transition-all duration-150 "
          >
            {/* image  */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={profile}
                width={12}
                height={12}
                className="w-full"
                alt="profile"
              />
            </div>
            <div>
              <h2 className="text-base font-semibold">Ripon Mardy</h2>
              <p className="text-gray-600 text-sm">hello Axel How are you</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
