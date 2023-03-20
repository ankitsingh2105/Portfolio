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
      let timer1 = setTimeout(() => setShowVideo(false), 2300);
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
