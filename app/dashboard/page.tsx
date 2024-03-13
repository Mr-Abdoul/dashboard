import Image from "next/image";
import Login from "../(login)/signIn/login";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import LesTache from "../taches/listeTaches";

export default function Home() {
  return (
    <main>
        {/* <Header/>
        <Sidebar/>
        <Footer/> */}
        <LesTache/>
    </main>
  );
}
