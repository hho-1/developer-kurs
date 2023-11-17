
import './App.css';
import Liste from './components/Liste/Liste';
import Header from './components/header/Header';
import veri from './helpers/data'

function App() {
  return (
    <div className="App">
      <Header/>
      <Liste data = {veri}/>
    </div>
  );
}

export default App;
