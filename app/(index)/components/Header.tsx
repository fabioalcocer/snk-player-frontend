import Image from "next/image";
import logo from "../assets/logo-snk.png";

function Header() {
  return (
    <header className="fixed top-0 z-50 right-0 left-0 flex h-20 bg-zinc-900 bg-opacity-60 backdrop-blur-sm">
      <div className="mx-auto p-2 px-5 flex w-full max-w-7xl items-center justify-between">
        <div className="relative h-full w-44">
          <Image className="w-full object-cover" fill src={logo} alt="" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-red-600 inline-block text-transparent bg-clip-text">SNK Moments</h1>
      </div>
    </header>
  );
}

export default Header;
