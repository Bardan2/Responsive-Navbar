import { Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Contact from "./router/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
