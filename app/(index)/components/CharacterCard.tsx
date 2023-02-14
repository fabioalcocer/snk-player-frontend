/* eslint-disable @next/next/no-img-element */
type Props = {
  character: {
    image: string;
    name: string;
    status: string;
    description: string;
  };
};

function CharacterCard({ character }: Props) {
  return (
    <li className="relative z-10 w-72 cursor-pointer rounded-lg bg-zinc-900 duration-300 before:absolute before:top-5 before:-left-3 before:right-0 before:-z-10 before:h-full before:w-full before:scale-[0.89] before:bg-[#f7ba2b] before:bg-card-background before:blur-lg before:transition-opacity before:duration-500 hover:-translate-y-2 hover:translate-x-1 hover:before:opacity-0">
      <div className="flex h-full w-full flex-col gap-2 overflow-hidden rounded-lg bg-zinc-900">
        <img
          src={character.image}
          className="max-h-72 w-full object-cover"
          alt="image"
        />
        <div className="flex flex-col p-3 pb-6 text-zinc-100">
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
    </li>
  );
}

export default CharacterCard;
