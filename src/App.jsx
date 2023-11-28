import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/pages/Home"
import Footer from "./components/footer/Footer"


const App = () => {

  return (
    <section className="w-full min-h-screen bg-gray-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
