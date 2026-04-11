import ChatList from "@/components/ChatList";
import ChatWindow from "@/components/ChatWindow";
import Image from "next/image";
// images
import profile from "@/public/profile.png";

import { Plus, SendHorizontal } from "lucide-react";

const page = () => {
  return (
    <div className="flex items-start justify-start gap-2">
      <div className="basis-full md:basis-1/3">
        <ChatList />
      </div>

      <div className="relative basis-full flex flex-col w-full h-screen py-5 px-5">
        {/* Messages area */}
        <div className="space-y-5 px-5">
          {/* message left */}
          <div className="flex items-center gap-2 w-2/3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={profile}
                width={40}
                height={40}
                className="w-full h-full object-cover"
                alt="profile pic"
              />
            </div>

            <div className="bg-green-300/70 backdrop-blur-md rounded-xl p-3">
              <p className="text-gray-900 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* message right */}
          <div className="flex justify-end">
            <div className="flex items-center gap-2 w-2/3 justify-end">
              <div className="bg-green-300/70 backdrop-blur-md rounded-xl p-3">
                <p className="text-gray-900 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src={profile}
                  width={40}
                  height={40}
                  className="w-full object-cover"
                  alt="profile pic"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Input box */}
        <div className="absolute left-0 bottom-0 w-full">
          <div className=" p-3 bg-white flex items-center gap-2">
            <Plus className="cursor-pointer" />

            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 outline-none px-3 py-2 border border-gray-700 rounded-lg bg-gray-100"
            />

            <SendHorizontal className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
