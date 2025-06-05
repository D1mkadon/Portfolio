import Link from "next/link";
import Main from "./Main/main";

export default function Home() {
  return (
    <div className="flex bg-blue-[200] flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-[#161616] via-zinc-600/20 to-[#161616]">
      <nav className=" animate-fade-in navi ">
        <Link className="duration-500 hover:underline" href="/">Home</Link>
        <Link className="duration-500 hover:underline" href="/#About">About</Link>
        <Link className="duration-500 hover:underline" href="/#Skills">Skills</Link>
        <Link className="duration-500 hover:underline" href="/#Projects">Projects</Link>
        <Link className="duration-500 hover:underline" href="/#Contact">Contact</Link>
      </nav>
      <Main />
      <div>

      </div>
    </div>
  );
}
