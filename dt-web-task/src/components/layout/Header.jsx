
import { Wrench, Bell, MoreVertical, House } from "lucide-react";

const Header = () => {

  return (
    <div className="w-full">
      <header className="max-w-8xl mx-auto bg-gray-50 px-6 py-5 shadow-xl rounded-lg">
        <div className="px-25 flex justify-between items-center ">
          <div className="flex items-center">
            <img src="/logo.svg" />
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#0029FF] rounded-full w-8 h-8 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-1400">
              <House size={18} className="text-white" />

            </div>
            <div className="bg-[#0029FF] rounded-full w-8 h-8 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-400">
              <Wrench size={18} className="text-white" />
            </div>
            <div className="bg-[#0029FF] rounded-full w-8 h-8 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-400">
              <Bell size={18} className="text-white"/>
            </div>
            <img
              src="/profile.png"
              alt="profile"
              className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm mx-2"
            />
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-400">
              <MoreVertical size={18} />
            </div>
          </div>
        </div>

      </header>
    </div>


  );
};

export default Header;