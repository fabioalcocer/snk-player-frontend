const getTitans = async () => {
  return fetch('https://snk-player-api.vercel.app/api/characters', {
    cache: 'no-store'
  }).then((res) => res.json())
}

export default async function Home() {
  const data = await getTitans()

  return (
    <main className="pt-28 pb-14">
      <ul>
        {
          data.data.map((character:any) => (
            <li key={character._id} className='text-2xl'>
              <p>{character.name}</p>
              <img src={character.image} className='w-96' alt="image" />
            </li>
          ))
        }
      </ul>
    </main>
  )
}
