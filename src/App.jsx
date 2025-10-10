import { Outlet, useLocation } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import Loading from "./components/loading/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <main>
            <Outlet></Outlet>
          </main>
          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default App;
