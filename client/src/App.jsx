//routing
import { Routes, Route, Link } from 'react-router-dom'

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Transactions from './pages/Transactions';
import Rooms from './pages/Rooms';
import Tenants from './pages/Tenants';
import ViewRoom from './pages/ViewRoom';
import ViewTenant from './pages/ViewTenant';

//style
import './App.css'
import Register from './pages/Register';

//main div
const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path = "/" element = {<Login/>} />
          {/* <Route path = "/home" element = {<Home/>}/> */}
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "/rooms" element = {<Rooms/>}/>
          <Route path = "/tenants" element = {<Tenants/>}/>
          <Route path = "/transactions" element = {<Transactions/>}/>
          <Route path= "/:id" element = {<ViewRoom/>}/>
          <Route path= "/tree/:id" element = {<ViewTenant/>}/>
      </Routes>
    </div>
  );
}

export default App;
