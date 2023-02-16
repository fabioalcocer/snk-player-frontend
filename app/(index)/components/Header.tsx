import Image from "next/image";
import logo from "../assets/logo-snk.png";
import AudioBtn from "./AudioBtn";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-20 bg-zinc-900 bg-opacity-60 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-2 px-5">
        <div className="relative h-full w-44">
          <Image className="w-full object-cover" fill src={logo} alt="" />
        </div>
        <h1 className="inline-block bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-2xl font-bold text-transparent">
          SNK Moments
        </h1>
      </div>
      <AudioBtn />
    </header>
  );
}

export default Header;
