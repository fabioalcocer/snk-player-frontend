/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type Props = {
  character: {
    _id: number;
    image: string;
    name: string;
    status: string;
    description: string;
  };
};

function HumanCard({ character }: Props) {
  return (
    <li
      className={`card relative z-10 w-80 cursor-pointer border-b-4
    ${
      character.status === "Alive"
        ? "border-emerald-500/80"
        : "border-red-500/80"
    }
    rounded-lg duration-300 after:absolute after:top-6 after:-left-4 after:right-0 after:-z-10 after:h-full after:w-full after:scale-[0.92] after:bg-[#f7ba2b] after:bg-card-background after:opacity-0 after:blur-lg after:transition-opacity after:duration-500 hover:-translate-y-2 hover:translate-x-1 hover:after:opacity-100`}
    >
      <Link href="/humans/[id]" as={`/humans/${character._id}`}>
        <div className="flex h-full w-full flex-col gap-2 overflow-hidden rounded-lg bg-zinc-900">
          <img
            src={character.image}
            className="max-h-80 min-h-[320px] w-full object-cover"
            alt="image"
          />
          <div className="flex flex-col p-3 px-5 pb-6 text-zinc-100">
            <h2 className="text-[25px] font-medium">{character.name}</h2>
            <p
              className={`font-medium
                      ${
                        character.status === "Alive"
                          ? "text-emerald-500/80"
                          : "text-red-500/80"
                      }
                      `}
            >
              {character.status}
            </p>
            <p className="mt-3 text-base text-zinc-200 line-clamp-3">
              {character.description}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default HumanCard;
