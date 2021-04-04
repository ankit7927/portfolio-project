import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
//import store from '../store';
import {Switch, Route} from 'react-router-dom'


function App(){
  return (
    <div>
    <Navbar/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/" exact component={Login}/>
        <Route path="/reg" component={Register}/>
        <Route path="/profile" component ={Profile}/>
        <Route component={()=> <h1>Page Not Found </h1>}/>
      </Switch>
    </div>
  );
}

export default App;
