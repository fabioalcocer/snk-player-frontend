import Nav from "../(index)/components/Nav";
import TitanCard from "../(index)/components/TitanCard";

const getTitans = async () => {
  return fetch("https://snk-player-api.vercel.app/api/titans", {
    cache: "no-store",
  }).then((res) => res.json());
};

async function PageTitans() {
  const data = await getTitans();

  return (
    <>
      <Nav />
    <section className="w-full">
      <ul className="mt-10 flex flex-wrap justify-center gap-10">
        {data.data.map((character: any) => (
          <TitanCard key={character._id} titan={character} />
          ))}
      </ul>
    </section>
          </>
  );
}

export default PageTitans;
