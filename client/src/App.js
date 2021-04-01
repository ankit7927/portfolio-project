import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { connect } from "react-redux";
//import store from '../store';
import {Switch, Route} from 'react-router-dom'

//window.store=store
const mapStateToProps = state => {
    return { user: state.userInfo.username };
  };
  
function Appjs({user}) {
/*
  if (!user) {
    return <Login/>
  }*/

  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

const App = connect(
  mapStateToProps
)(Appjs)

export default App;
