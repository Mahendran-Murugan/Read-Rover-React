import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Service } from "./components/Service";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Login } from "./components/Login";
import { NavBar } from "./components/NavBar";
import { Register } from "./components/Register";
import { Auth } from "./components/Auth";
import { Protect } from "./components/Protect";
import { Logout } from "./components/Logout";

function App() {
  return (
      
    <div className="App">
      <Auth>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/service" element={<Protect><Service/></Protect>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </Auth>
    </div>

  );
}

export default App;
