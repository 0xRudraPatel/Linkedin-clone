import type { NextPage } from "next";
import MainNavbar from "../components/MainNavbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

import { AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import NewsWidgets from "../components/NewsWidgets";

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);

  return (
    <>
      <MainNavbar />
      <main className="flex justify-center mt-3 gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar />
          <Feed />
        </div>
        <NewsWidgets />
        <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Home;
