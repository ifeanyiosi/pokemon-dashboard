
import "./App.css";
import Menu from "./Components/Menu";
import Container from "./Components/Container";
import Userlist from "./Components/Userlist";
import NewUser from "./Components/NewUser";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ReactModal from "react-modal";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";

ReactModal.setAppElement('#root')



function App() {
  return (
    
    <div className="App">
     
      
    <Router>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Container}/>
        <Route exact path="/users" component={NewUser}/>
        <Route exact path="/userlist" component={Userlist}/>
        <Redirect to="/"/>
      </Switch>

    </Router>
    </div>

    // <BrowserRouter>

    //   <div className="App">
    //      <Menu/>

    //   </div>


    // </BrowserRouter>
    
  );
}

export default App;
