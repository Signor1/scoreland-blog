import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/footer/Footer";
import LatestNews from "./components/pages/LatestNews";
import LatestNewsDetail from "./components/pages/LatestNewsDetail";
import Transfers from "./components/pages/Transfers";
import TransferDetails from "./components/pages/TransferDetails";
import { createContext } from "react";
import HomeDashboard from "./components/dashboard";
import AuthLayout from "./components/layout/AuthLayout";

export const AuthUser = createContext({});

const App = () => {
  // const user = {
  //   name: "Gerald Cyril",
  //   email: "gerald@gmail.com",
  // };
  const user = {
    logged: false,
  };

  return (
    <section className="w-full min-h-screen overflow-x-hidden bg-gray-950">
      <Navbar />
      <AuthUser.Provider value={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latestnews" element={<LatestNews />} />
          <Route path="/latestnews/:id" element={<LatestNewsDetail />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/transferDetails/:id" element={<TransferDetails />} />
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<HomeDashboard />} />
          </Route>
        </Routes>
      </AuthUser.Provider>
      <Footer />
    </section>
  );
};

export default App;
