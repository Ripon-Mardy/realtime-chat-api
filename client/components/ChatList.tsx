"use client";
import { useEffect, useRef, useState } from "react";
import { api } from "@/lib/api";
import Image from "next/image";
import { useClickOutside } from "@/hooks/UseClickOutside";
import { useChat } from "@/context/ChatContext";

// icons
import { Search, Ellipsis, LogOut } from "lucide-react";

// images
import profile from "@/public/profile.png";

// types define
type User = {
  _id: String;
  name: String;
  email: String;
};

export default function ChatList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const { setSelectedUser } = useChat();

  const [showBarPopup, setShowBarPopup] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setShowBarPopup(false));

  // fetching users
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await api.get("/users");
        setUsers(res.data.data || []);
      } catch (error) {
        console.error("error", error);
        console.log("error message", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // handle logout
  const handleLogOut = () => {};

  return (
    <div className=" bg-gray-100 h-screen px-3 py-2 space-y-2">
      {/* chats heading txt  */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-2xl font-semibold">Chats</h3>

        {/* 3 dots icons  */}
        <div ref={ref} className="relative">
          <Ellipsis
            onClick={() => setShowBarPopup(true)}
            className="w-5 h-5 text-gray-900 cursor-pointer"
          />
          {/* show bar popup  */}
          {showBarPopup && (
            <div className="absolute -right-20 top-full bg-white shadow p-3 rounded-md text-xs z-30 border border-gray-300">
              <span
                onClick={handleLogOut}
                className="flex items-center gap-2 cursor-pointer"
              >
                <LogOut className="w-4 h-4" /> Logout
              </span>
            </div>
          )}
        </div>
      </div>

      {/* search box  */}
      <div className="flex items-center justify-center gap-2 border border-gray-400 shadow focus-within:ring-1 p-1.5 rounded-xl mt-4">
        <Search className="text-sm text-gray-600 w-5 h-5" />
        <input
          type="text"
          className="w-full outline-none"
          placeholder="Search & start a new chat"
        />
      </div>

      {/* chat lists  */}
      <div className="space-y-2 mt-3">
        {loading ? (
          <div className="space-y-2">
            <div className="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
            <div className="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
            <div className="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
          </div>
        ) : users.length > 0 ? (
          users.map((user, index) => (
            <div
              key={index}
              onClick={() => setSelectedUser(user)}
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
                <h2 className="text-base font-semibold"> {user.name} </h2>
                <p className="text-gray-600 text-sm">hello Axel How are you</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-sm text-gray-500 text-center mt-4">
            No users found
          </div>
        )}
      </div>
    </div>
  );
}
