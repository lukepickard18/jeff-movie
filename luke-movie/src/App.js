import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <style>{'body { background-color: #051b23; }'}</style>
      <Header/>
      <Navigation/>
    </div>
  );
}

export default App;
