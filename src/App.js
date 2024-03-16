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
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ProtectLogout } from "./components/ProtectLogout";
import { BookListPage } from "./components/BookListPage";
import { BookPage } from "./components/BookPage";
import { Book } from "./components/Book";
import { NoRoute } from "./components/NoRoute";
import { BookListPage2 } from "./components/BookListPage2";
import { Book2 } from "./components/Book2";
import { BookPage2 } from "./components/BookPage2";


function App() {

  useEffect(() => {
    Aos.init({
      duration: 1250,
    })
  })

  return (
    <div className="App">
      <Auth>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Protect><Service /></Protect>} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Protect><Book2 /></Protect>} >
            <Route index element={<BookListPage2 />} />
            <Route path="booklist" element={<BookListPage2 />} />
            <Route path="create-book" element={<BookPage2 />} />
          </Route>
          <Route path="/blog" element={<Protect><Book /></Protect>}>
            <Route index element={<BookListPage />} />
            <Route path="bloglist" element={<BookListPage />} />
            <Route path=":id" element={<BookPage />} />
          </Route>
          <Route path="*" element={<NoRoute/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<ProtectLogout><Logout /></ProtectLogout>} />
        </Routes>
      </Auth>
    </div>

  );
}

export default App;
