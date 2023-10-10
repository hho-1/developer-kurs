
import { useState } from 'react';
import './App.css';
import LifeCycleMethods from './components/LifeCycleMethods';
import Clock from './components/LifeCycleMethods';
import "bootstrap/dist/css/bootstrap.min.css";
import People from './components/People';

function App() {

  const [goster, setGoster] = useState(true)

  return (
    <div className="App">
      <div className='containerr text-center mt-4'>
        <button className='btn btn-danger' onClick={()=> setGoster(!goster)}>GÖSTER</button>
  
        {/* {goster && <LifeCycleMethods/>} */}
        {/* {goster && <Clock/>} */}
      </div>
      <People/>
    </div>
  );
}

export default App;
