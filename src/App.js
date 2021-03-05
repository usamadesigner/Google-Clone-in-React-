
import './App.css';
import Home from './Pages/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchScreen from './Pages/SearchScreen';
function App() {
  return (
    <div className="App">

<Router>
<Switch>
<Route path='/search'>
<SearchScreen/>
</Route>
<Route path='/'>
<Home/>
</Route>
</Switch>
</Router>
      {/* Home Page which will be the Front page! */}


      {/* Search page  */}



    </div>
  );
}

export default App;
