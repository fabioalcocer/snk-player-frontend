import PlayerContainer from "@/app/(index)/components/PlayerContainer";

type Props = {
  params: any;
};

const fetchSingleTitan = async (id: number) => {
  return fetch(`https://snk-player-api.vercel.app/api/titans/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());
};

async function PageTitanId({ params }: Props) {
  const { id } = params;
  const { data } = await fetchSingleTitan(id);
  const titan = data;

  return <PlayerContainer character={titan} />;
}

export default PageTitanId;
