import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useToast } from "@/components/ui/use-toast";
import { NotificationsProvider } from "@/contexts/NotificationsContext";

const Layout = () => {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NotificationsProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-nurture-primary/5 via-white to-nurture-accent/5 text-nurture-secondary">
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <main className={`flex-grow ${menuOpen ? "mt-16" : ""}`}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </NotificationsProvider>
  );
};

export default Layout;
