import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Service } from "./components/Service";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Login } from "./components/Login";
import { NavBar } from "./components/NavBar";
import { Register } from "./components/Register";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
