/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function Nav() {
  return (
    <section className="flex flex-col justify-center gap-2 items-center mt-5">
      <h1 className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-right text-3xl sm:text-5xl font-bold text-transparent inline-block sm:text-left">
        SNK Moments
      </h1>
      <p className="mx-auto max-w-2xl mt-3 mb-7 text-center text-base sm:text-xl text-zinc-200">
        Encuentra y disfruta de los momentos más emocionantes y significativos
        de los personajes de Shingeki no Kyojin. Puedes seleccionar un personaje
        específico y ver su momento destacado durante toda la serie.
      </p>
      <div className="relative z-20 mx-auto mt-10 mb-5 inline-flex gap-8 opacity-90">
        <div className="group">
          <img
            className="absolute -top-16 -left-12 -z-10 w-32 transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"
            src="https://res.cloudinary.com/daobmfotr/image/upload/v1676436644/anime-imgs/Captain-Levi-Ackerman-Transparent-PNG_bkwoua.png"
            alt="levi ackerman png"
          />
          <Link href="/humans">
            <button className="relative rounded-md bg-zinc-700/80 py-3 px-6 font-bold text-zinc-100 transition-all duration-300 hover:scale-105">
              Humans
            </button>
          </Link>
        </div>
        <div className="group">
          <img
            className="absolute -top-8 -right-10 -z-10 w-12 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-2"
            src="https://i.pinimg.com/originals/70/e7/a6/70e7a6c6025b0bff30aa204b6bc56fb6.png"
            alt="titan colosal png"
          />
          <Link href="/titans">
            <button className="min-w-[118px] rounded-md bg-red-700/80 py-3 px-6 font-bold text-zinc-100 transition-all duration-300 hover:scale-105">
              Titans
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Nav;
