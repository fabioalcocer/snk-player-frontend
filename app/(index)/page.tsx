import CharacterCard from "./components/CharacterCard";

const getTitans = async () => {
  return fetch("https://snk-player-api.vercel.app/api/characters", {
    cache: "no-store",
  }).then((res) => res.json());
};

export default async function Home() {
  const data = await getTitans();

  return (
    <main className="w-full">
      <nav className="flex bg-white">
        <button>Soldiers</button>
        <button>Titans</button>
      </nav>

      <ul className="mt-10 flex flex-wrap justify-center gap-12 gap-y-14">
        {data.data.map((character: any) => (
          <CharacterCard key={character._id} character={character} />
        ))}
      </ul>
    </main>
  );
}
