import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MovieCard from './components/MovieCard';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <style>{'body { background-color: #051b23; }'}</style>
      <Header/>
      <Navigation/>
      <Dashboard/>
      
    </div>
  );
}

export default App;
