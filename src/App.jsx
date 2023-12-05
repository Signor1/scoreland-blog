import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/pages/Home"
import Footer from "./components/footer/Footer"
import LatestNews from "./components/pages/LatestNews"
import LatestNewsDetail from "./components/pages/LatestNewsDetail"


const App = () => {

  return (
    <section className="w-full min-h-screen overflow-x-hidden bg-gray-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latestnews" element={<LatestNews />} />
        <Route path="/latestnews/:id" element={<LatestNewsDetail />} />
      </Routes>
      <Footer />
    </section>
  );
};

export default App;
