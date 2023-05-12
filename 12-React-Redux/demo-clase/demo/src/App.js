import './App.css';
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import Users from './components/Users/Users';
import UserDetail from './components/UserDetail/UserDetail';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<h1>About</h1>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/detail/:id" element={<UserDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
