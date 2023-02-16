type Props = {
  character: {
    name: string;
    src: string;
    poster: string;
  };
};

function VideoPlayer({ character }: Props) {
  return (
    <article className="wrapper">
      <div className="player">
        <h3 className="absolute w-full bg-zinc-900/40 p-3 text-base sm:text-xl font-medium italic text-zinc-200">{`El mejor momento de: ${character.name}`}</h3>
        <video
          id="video"
          poster={character.poster}
          src={character.src}
          loop
          controls
          muted
        />
      </div>
    </article>
  );
}

export default VideoPlayer;
