import Image from "next/image";

// icons
import { Plus, SendHorizontal } from "lucide-react";

// images
import profile from "@/public/profile.png";

const ChatWindow = () => {
  return (
    <div className="flex flex-col">
      {/* Messages area */}
      <div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={profile}
                width={40}
                height={40}
                className="w-full h-full object-cover"
                alt="profile pic"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Input box */}
      <div className="">
        <div className=" p-3 border-t bg-white flex items-center gap-2">
          <Plus className="cursor-pointer" />

          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 outline-none px-3 py-2 rounded-lg bg-gray-100"
          />

          <SendHorizontal className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
