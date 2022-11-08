/**
 * This is the App component. It is responsible for displaying the entire application.
 */
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
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
