import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Projects from "./Projects";
import AboutMe from "./AboutMe";


function App() {
  return (
    <Router>
      <div className="App">

          <Route exact path="/" component={AboutMe}/>
          <Route exact path="/projects" component={Projects}/>

      </div>
    </Router>
  );
}

export default App;
