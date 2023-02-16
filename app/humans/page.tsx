import HumanCard from "../(index)/components/HumanCard";

const getHumans = async () => {
  return fetch("https://snk-player-api.vercel.app/api/characters", {
    cache: "no-store",
  }).then((res) => res.json());
};

async function PageHumans() {
  const data = await getHumans();

  return (
    <section className="grid w-full">
      <ul className="mt-10 flex flex-wrap justify-center gap-12 gap-y-14">
        {data.data.map((character: any) => (
          <HumanCard key={character._id} character={character} />
        ))}
      </ul>
    </section>
  );
}

export default PageHumans;
