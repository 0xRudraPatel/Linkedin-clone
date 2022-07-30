import type { NextPage } from "next";
import MainNavbar from "../components/MainNavbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Home: NextPage = () => {
  return (
    <>
      <MainNavbar />
      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar />
          <Feed />
        </div>
      </main>
    </>
  );
};

export default Home;
