
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useToast } from "@/components/ui/use-toast";

const Layout = () => {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main className={`flex-grow ${menuOpen ? "mt-16" : ""}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
