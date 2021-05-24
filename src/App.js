import './App.css';
import {Home} from './modules/home/Home'
import {Topics} from './modules/topics/Topics'
import {Navigation} from './main/routes/Navigation'
//import {Navbar} from './components/main/navigation/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <div className="container">
         
      </div>
      
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/topics" component={Topics} />
      </Switch>
    </BrowserRouter>
    /*<>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/topics" component={Topics} />
      </Switch>
    </BrowserRouter>    
    </>*/
    
    
  );
}

export default App;
