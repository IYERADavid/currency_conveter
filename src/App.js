import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './appcomponents/header'
import Currency from './appcomponents/currency'
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Route path="/" component={Currency} />
      </Router>
    </div>
  );
}

export default App;
