import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { connect } from "react-redux";
//import store from '../store';

//window.store=store
const mapStateToProps = state => {
    return { user: state.user };
  };
  
function Appjs({user}) {

  if (!user) {
    return <Login/>
  }

  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

const App = connect(
  mapStateToProps
)(Appjs)

export default App;
