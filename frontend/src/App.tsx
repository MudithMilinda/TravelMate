import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import Blogs from "./pages/blogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;