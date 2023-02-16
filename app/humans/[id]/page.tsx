import PlayerContainer from "@/app/(index)/components/PlayerContainer";

type Props = {
  params: any;
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

  return <PlayerContainer character={character} />;
}

export default PageCharacterId;
