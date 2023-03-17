import './App.css';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import "@fortawesome/fontawesome-svg-core/styles.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />    
    </div>
  );
}

export default App;
