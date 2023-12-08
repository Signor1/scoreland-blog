import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Suspense, createContext, useEffect, lazy } from "react";
import AuthLayouth from "./components/Layout/AuthLayouth";
import { animateScroll } from "react-scroll";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./components/pages/Home"));
const NotFound = lazy(() => import("./components/404/NotFound"));
const HomeDashboard = lazy(() => import("./components/dashBoard"));
const LatestNews = lazy(() => import("./components/pages/LatestNews"));
const LatestNewsDetail = lazy(() =>
  import("./components/pages/LatestNewsDetail")
);

export const AuthUser = createContext({});

const App = () => {
  const directory = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 1000,
    });
  }, [directory.pathname]);
  const user = {
    logged: true,
  };
  return (
    <section className="w-full min-h-screen overflow-x-hidden bg-gray-950">
      <Navbar />
      <AuthUser.Provider value={user}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/latestnews" element={<LatestNews />} />
            <Route path="/latestnews/:id" element={<LatestNewsDetail />} />
            <Route element={<AuthLayouth />}>
              <Route path=".dasboard" element={<HomeDashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AuthUser.Provider>
      <Footer />
    </section>
  );
};

export default App;
