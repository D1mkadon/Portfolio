import Link from "next/link";
import Main from "./Main/main";
import About from "./About/About";



export default function Home() {
  return (
    <div className="flex bg-blue-[200] min-w-screen min-h-screen overflow-hidden flex-col items-center justify-center bg-gradient-to-tl from-[#161616] via-zinc-600/20 to-[#161616]">
      <nav className=" animate-fade-in navi ">
        <Link className="duration-500 hover:underline" href="/">Home</Link>
        <Link className="duration-500 hover:underline" href="/#About">About</Link>
        <Link className="duration-500 hover:underline" href="/#Skills">Skills</Link>
        <Link className="duration-500 hover:underline" href="/#Projects">Projects</Link>
        <Link className="duration-500 hover:underline" href="/#Contact">Contact</Link>
      </nav>
      <Main />
      <About />

    </div>

  );
}
