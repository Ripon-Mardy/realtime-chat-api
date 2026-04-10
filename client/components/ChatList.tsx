"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Image from "next/image";

// images
import profile from "@/public/profile.jpg";

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
    <div>
      <div className="flex items-center justify-center gap-2">
        {/* left side  */}
        <div className="basis-full md:basis-1/3 bg-gray-100 h-screen">
          <h3 className="text-2xl font-semibold">Chats</h3>

          {/* chat lists  */}
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-300 p-2 rounded-xl transition-all duration-150 "
              >
                {/* image  */}
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={profile}
                    width={12}
                    height={12}
                    className="w-full"
                    alt="profile"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Ripon Mardy</h2>
                  <p className="text-gray-600 text-sm">
                    hello Axel How are you
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right side  */}
        <div className="md:basis-full"></div>
      </div>
    </div>
  );
}
