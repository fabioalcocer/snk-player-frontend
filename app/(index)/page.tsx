import Description from "./components/Description";
import HumanCard from "./components/HumanCard";
import Nav from "./components/Nav";

const getHumans = async () => {
  return fetch("https://snk-player-api.vercel.app/api/characters", {
    cache: "no-store",
  }).then((res) => res.json());
};

export default async function Home() {
  const data = await getHumans();

  return (
    <>
      <Description />
      <Nav />
      <section className="grid w-full">
        <ul className="mt-10 flex flex-wrap justify-center gap-12 gap-y-14">
          {data.data.map((character: any) => (
            <HumanCard key={character._id} character={character} />
          ))}
        </ul>
      </section>
    </>
  );
}
