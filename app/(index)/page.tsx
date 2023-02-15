import HumanCard from "./components/HumanCard";

const getHumans = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return fetch("https://snk-player-api.vercel.app/api/characters", {
    cache: "no-store",
  }).then((res) => res.json());
};

export default async function Home() {
  const data = await getHumans();

  return (
    <main className="grid w-full">
      <ul className="mt-10 flex flex-wrap justify-center gap-12 gap-y-14">
        {data.data.map((character: any) => (
          <HumanCard key={character._id} character={character} />
        ))}
      </ul>
    </main>
  );
}
