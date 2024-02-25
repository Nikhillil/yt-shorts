import { useEffect, useState } from 'react';
import './App.css';
import VideoDisplay from './component/VideoDisplay';
import ytVideos from "./component/Videos";

function App() {
  const [isVideo, setIsVideo] = useState([]);
  useEffect(() => {
    setIsVideo(ytVideos);
  }, [])
  return (
    <div className="app">
      <div className='app__video'>
        {
          isVideo.map((vid) => {
            return (<VideoDisplay key={vid.id}
              src={vid.url}
              channel={vid.channel}
              title={vid.title}
              likes={vid.likes}
              dislike={vid.dislike}
              comment={vid.comment}
              shares={vid.shares} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
