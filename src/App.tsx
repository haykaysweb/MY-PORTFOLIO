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
import ScrollProgress from "./components/ScrollProgress";
import MouseEffect from "./components/MouseEffect";

const queryClient = new QueryClient();

const isDeviceDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (!isDeviceDark) {
  document.documentElement.classList.add("light");
} else {
  document.documentElement.classList.remove("light");
}

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

    //users device default dark/light theme controller
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
      }
    };
    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <div className="min-h-screen bg-page-bg text-main-text transition-colors duration-300">
          <MouseEffect />
          <Navbar />
          <ScrollProgress />
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
