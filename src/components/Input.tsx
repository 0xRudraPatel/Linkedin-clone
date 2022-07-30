import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faBriefcase,
  faFileVideo,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { useRecoilState } from "recoil";
import Image from "next/image";
import { modalState, modalTypeState } from "../atoms/modalAtom";

/* eslint-disable @next/next/no-img-element */
function Input() {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);

  return (
    <div className="bg-white rounded-lg p-3 space-y-3 border border-gray-300">
      <div className="flex items-center space-x-2">
        <Image
          src="https://rb.gy/gz3pd2"
          alt="profile"
          width="50rem"
          height="50rem"
          className="rounded-full cursor-pointer"
        />
        <button
          className="rounded-full border border-gray-400 py-2.5 px-3 opacity-80 hover:opacity-100 font-medium w-full text-left"
          onClick={() => {
            setModalOpen(true);
            setModalType("dropIn");
          }}
        >
          Start a post
        </button>
      </div>
      <div className="flex items-center flex-wrap gap-4 justify-center md:gap-x-10">
        <button className="inputButton group">
          <FontAwesomeIcon icon={faImage} className="text-blue-400 !h-5" />
          <h4 className="opacity-80 group-hover:opacity-100">Photo</h4>
        </button>
        <button className="inputButton group">
          <FontAwesomeIcon icon={faFileVideo} className="text-green-400 !h-5" />
          <h4 className="opacity-80 group-hover:opacity-100">Video</h4>
        </button>
        <button className="inputButton group">
          <FontAwesomeIcon icon={faBriefcase} className="text-blue-300 !h-5" />
          <h4 className="opacity-80 group-hover:opacity-100">Job</h4>
        </button>
        <button className="inputButton group">
          <FontAwesomeIcon icon={faPenToSquare} className="text-red-400 !h-5" />
          <h4 className="opacity-80 group-hover:opacity-100 whitespace-nowrap">
            Write Article
          </h4>
        </button>
      </div>
    </div>
  );
}

export default Input;
