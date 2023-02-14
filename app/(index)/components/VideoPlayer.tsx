type Props = {
  character: {
    src: string;
    poster: string;
  };
};

function VideoPlayer({ character }: Props) {
  return (
    <article className='wrapper'>
      <div className='player'>
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
