import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
