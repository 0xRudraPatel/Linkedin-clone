import logo from "../static/linkedin-icon.png";
import NavLink from "./NavLink";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHouse,
  faUserGroup,
  faBell,
  faBriefcase,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function MainNavbar() {
  return (
    <>
      <header className="sticky top-0 z-40 bg-white flex items-center justify-around py-1.5 px-3 shadow-lg">
        <div className="flex item-center space-x-2 w-full max-w-xs">
          <Image src={logo} width="50px" height="50px" alt="logo" />
          <div className="flex item-center space-x-1 py-2.5 px-4 rounded w-full">
            <FontAwesomeIcon icon={faSearch} className="!h-4" />
            <input
              type="text"
              placeholder="Search"
              className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 flex-grow"
            />
          </div>
        </div>

        <div className="flex item-center space-x-6">
          <NavLink icon={faHouse} text="Home" feed />
          <NavLink icon={faUserGroup} text="My Network" feed />
          <NavLink icon={faBriefcase} text="Jobs" feed />
          <NavLink icon={faMessage} text="Messaging" feed />
          <NavLink icon={faBell} text="Notifications" feed />
          <NavLink icon={faUser} text="Me" feed />
        </div>
      </header>
    </>
  );
}

export default MainNavbar;
