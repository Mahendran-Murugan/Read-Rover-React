import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Service } from "./components/service";
import { About } from "./components/about";
import { Contact } from "./components/contact";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
