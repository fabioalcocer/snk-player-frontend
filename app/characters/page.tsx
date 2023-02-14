import CharacterCard from "../(index)/components/CharacterCard";

const getTitans = async () => {
  return fetch("https://snk-player-api.vercel.app/api/characters", {
    cache: "no-store",
  }).then((res) => res.json());
};

async function page() {
  const data = await getTitans();

  return (
    <main className="w-full">
      <ul className="mt-10 flex flex-wrap justify-center gap-10">
        {data.data.map((character: any) => (
          <CharacterCard key={character._id} character={character} />
        ))}
      </ul>
    </main>
  );
}

export default page;
