import './App.css';
import Searchbar from './components/Searchbar';
import BookData from './Data.json'




function App() {
  return (
    <div className="App">
      <Searchbar data={BookData} />
    </div>
  );
}

export default App;
