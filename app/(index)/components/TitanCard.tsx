/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type Props = {
  titan: {
    _id: number;
    image: string;
    name: string;
    height: number;
    description: string;
  };
};

function TitanCard({ titan }: Props) {
  return (
    <li className="card relative group z-10 w-80 border-b-4 border-red-500/80 cursor-pointer rounded-lg duration-300 after:absolute after:top-6 after:-left-4 after:right-0 after:-z-10 after:h-full after:w-full after:scale-[0.92] after:bg-[#f7ba2b] after:bg-card-background after:opacity-0 after:blur-lg after:transition-opacity after:duration-500 hover:-translate-y-2 hover:translate-x-1 hover:after:opacity-100">
      <Link href="/titans/[id]" as={`/titans/${titan._id}`}>
        <div className="flex h-full w-full flex-col gap-2 overflow-hidden rounded-lg bg-zinc-800">
          <img
            src={titan.image}
            className="max-h-80 min-h-[320px] w-full object-cover group-hover:min-h-full transition-all duration-500"
            alt="image"
          />
          <div className="flex flex-col p-3 px-5 pb-6 text-zinc-100 group-hover:opacity-0 transition-all duration-300">
            <h2 className="text-[25px] font-medium">{titan.name}</h2>
            <p
              className='font-medium text-red-500'
            >
              {titan.height}
            </p>
            <p className="mt-3 text-base text-zinc-200 line-clamp-3">
              {titan.description}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default TitanCard;
