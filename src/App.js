import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
// import SyncLoader from "react-spinners/SyncLoader";
import video1 from "./COMPONENTS/video1.gif"
const Newhome = React.lazy(() => import('./COMPONENTS/Newhome'));
function App() {
  const [showVideo, setShowVideo] = useState(true);
  useEffect(
    () => {
      let timer1 = setTimeout(() => setShowVideo(false), 1800);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );
  return (
    <>
      {showVideo ? (
        <>
          <div className="App">
            {/* <video muted autoPlay loop className="logo_video2">
              <source src={video1} type="video/mp4" />
            </video> */}
            <img className="introvideo" src={video1} alt="Ankit" />
          </div>
        </>
      ) : (
        <Newhome />
      )}
    </>
  )
}
export default App;
