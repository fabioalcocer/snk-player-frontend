import VideoPlayer from "@/app/(index)/components/VideoPlayer";

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

  return (
    <div className="text-xl text-white">
      <h1>{titan.name}</h1>
      <p className="">{titan.description}</p>
      <VideoPlayer character={titan} />
    </div>
  );
}

export default PageTitanId;
