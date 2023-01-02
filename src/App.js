import React, { Suspense } from 'react';
import './App.css';
import SyncLoader from "react-spinners/SyncLoader";
const Newhome = React.lazy(() => import('./COMPONENTS/Newhome'));
function App() {
  return (
    <div>
      <Suspense className='App' fallback={
        <div className='align'>
          <SyncLoader size={'20px'} color='#FF5757' className='loader App' />
        </div>
      }>
        <Newhome />
      </Suspense>
    </div>
  );
}
export default App;
