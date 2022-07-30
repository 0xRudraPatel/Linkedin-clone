import Backdrop from "./Backdrop";
import ContentForm from "./ContentForm";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const gifYouUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

const Modal = ({ handleClose, type }: { handleClose: any; type: string }) => {
  return (
    <Backdrop onClick={handleClose}>
      {type === "dropIn" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="rounded-xl flex flex-col justify-center bg-white w-full max-w-lg md:-mt-96 mx-6"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex items-center justify-between border-b border-black/40 px-4 py-2.5">
            <h4 className="text-xl">Create a post</h4>
            <button onClick={handleClose}>
              <FontAwesomeIcon
                icon={faXmark}
                className="h-5 w-5 text-black/70"
              />
            </button>
          </div>

          <div className="p-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Image
                src="https://rb.gy/gz3pd2"
                alt="profile"
                width="50rem"
                height="50rem"
                className="rounded-full cursor-pointer align-bottom"
              />
              <h6>Vitalik Buterin</h6>
            </div>

            <ContentForm />
          </div>
        </motion.div>
      )}

      {type === "gifYouUp" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="rounded-l-lg flex bg-[#1D2226] w-full max-w-6xl -mt-[7vh] mx-6"
          variants={gifYouUp}
          initial="hidden"
          animate="visible"
          exit="exit"
        ></motion.div>
      )}
    </Backdrop>
  );
};

export default Modal;
