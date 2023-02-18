import VideoPlayer from "@/app/(index)/components/VideoPlayer";
import Link from "next/link";
import { IoMdReturnLeft } from "react-icons/io";

type Props = {
  character: {
    name: string;
    image: string;
    description: string;
    poster: string;
    src: string;
  };
};

function PlayerContainer({ character }: Props) {
  return (
    <div className="text-xl text-white">
      <div className="mt-7 flex flex-col items-start justify-between gap-5 sm:flex-row sm:gap-0">
        <div className="max-w-lg">
          <h1 className="mb-2 pb-2 inline-block bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl">
            {character.name}
          </h1>
          <p className="text-base text-zinc-200">{character.description}</p>
        </div>
        <Link
          href="/"
          className="group mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-zinc-50 py-3 px-4 text-sm font-extrabold text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-700/50 dark:text-zinc-200 dark:hover:bg-zinc-700/70 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 lg:text-[15px]"
        >
          <IoMdReturnLeft className="mr-2 text-lg" />
          Volver
        </Link>
      </div>
      <VideoPlayer character={character} />
    </div>
  );
}

export default PlayerContainer;
