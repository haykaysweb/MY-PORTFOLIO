import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        "",
        document.title,
        window.location.pathname + window.location.search,
      );
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <div className="min-h-screen bg-dark-bg text-white transition-colors duration-300">
          <Navbar />
          <main>
            <Hero />
            <TechStack />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    </QueryClientProvider>
  );
}
