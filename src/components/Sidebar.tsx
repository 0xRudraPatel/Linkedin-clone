import { faBookmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="space-y-2 min-w-max max-w-lg">
      <div className="bg-white rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 ">
        <div className="relative w-full h-14">
          <Image src="https://rb.gy/i26zak" alt="bg" layout="fill" priority />
        </div>
        <div className="!mt-2">
          <Image
            src="https://rb.gy/gz3pd2"
            alt="profile"
            width="50rem"
            height="50rem"
            className="rounded-full cursor-pointer align-bottom"
          />
        </div>
        <div className="mt-2 my-4 space-x-0.5">
          <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
            Vitalik Buterin
          </h4>
          <p className="text-black/60 text-sm">vitalik</p>
        </div>

        <div className="hidden md:inline text-left text-sm">
          <div className="font-medium sidebarButton space-y-0.5 border-b border-t border-black/20">
            <div className="flex justify-between space-x-2">
              <h4>Who viewed your profile</h4>
              <span className="text-blue-500">321</span>
            </div>
            <div className="flex justify-between space-x-2">
              <h4>Views of your post</h4>
              <span className="text-blue-500">1,892</span>
            </div>
          </div>

          <div className="sidebarButton border-b border-black/20">
            <h4 className="leading-4 text-xs">
              Access exclusive tools & insights
            </h4>
            <h4 className="font-medium">
              <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
              Try Premium for free
            </h4>
          </div>

          <div className="sidebarButton flex items-center space-x-1.5">
            <FontAwesomeIcon icon={faBookmark} className="!-ml-1 !h-5" />
            <h4 className="font-medium">My items</h4>
          </div>
        </div>
      </div>
      <div className="hidden md:flex bg-white text-black/70 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 border border-gray-300">
        <p className="sidebarLink">Groups</p>
        <div className="flex items-center justify-between">
          <p className="sidebarLink">Events</p>
          <FontAwesomeIcon icon={faPlus} className="!h-4 mr-2" />
        </div>
        <p className="sidebarLink">Followed Hashtags</p>
        <div className="sidebarButton text-center border-t border-black/20">
          <h4 className="font-medium text-sm">Discover More</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
