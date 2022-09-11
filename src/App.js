import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

          <Route exact path="/" component={Projects}/>
          <Route exact path="/about" component={AboutMe}/>
          <Route exact path="/contact" component={Contact}/>

      </div>
    </Router>
  );
}

export default App;
