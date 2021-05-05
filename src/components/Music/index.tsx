import { useState, useRef, useEffect } from 'react';
import { Container } from './styles';

import audio from '../../assets/music.mp3';

function Audio() {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio !== null) {
      audio.volume = 0.03;
    }
  })

  function Play() {
    const audio = audioRef.current
    if (isPlaying) {
      audio?.pause()
      setIsPlaying(false)
    } else {
      audio?.play()
      setIsPlaying(true)
    }
  }
  return (
    <Container isPlaying={isPlaying}>
      <button onClick={() => Play()}>
        <span className="label-sound">Sound {isPlaying ? 'On' : 'Off'}</span>
        <div>
          <span />
          <span />
          <span />
        </div>
      </button>
      <audio src={audio} ref={audioRef} autoPlay loop />
    </Container>
  )
}

export default Audio