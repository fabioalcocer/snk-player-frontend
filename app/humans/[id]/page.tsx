import VideoPlayer from "@/app/(index)/components/VideoPlayer";

type Props = {
  params: any;
  id: number;
};

const fetchSingleCharacter = async (id: number) => {
  return fetch(`https://snk-player-api.vercel.app/api/characters/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());
};

async function PageCharacterId({ params }: Props) {
  const { id } = params;
  const { data } = await fetchSingleCharacter(id);
  const character = data;

  return (
    <div className="text-xl text-white">
      <h1>{character.name}</h1>
      <p className="">Este es el personaje {character.description}</p>
      <VideoPlayer character={character} />
    </div>
  );
}

export default PageCharacterId;
