import { Suspense, createContext, lazy, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import AuthLayout from "./components/layout/AuthLayout"
import Loader from "./components/loader/Loader"
import { animateScroll } from "react-scroll"

const Home = lazy(() => import("./components/pages/Home"));
const LatestNews = lazy(() => import("./components/pages/LatestNews"));
const LatestNewsDetail = lazy(() => import("./components/pages/LatestNewsDetail"));
const HomeDashboard = lazy(() => import("./components/dashboard"))
const NotFound = lazy(() => import("./components/404/NotFound"))


export const AuthUser = createContext({})

const App = () => {

  const directory = useLocation();

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
    });
  }, [directory.pathname]);

  const user = {
    logged: true
  }

  return (
    <section className="w-full min-h-screen overflow-x-hidden bg-gray-950">
      <Navbar />
      <AuthUser.Provider value={user}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/latestnews" element={<LatestNews />} />
            <Route path="/latestnews/:id" element={<LatestNewsDetail />} />
            <Route element={<AuthLayout />}>
              <Route path="/dashboard" element={<HomeDashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AuthUser.Provider >
      <Footer />
    </section >
  );
};

export default App;
