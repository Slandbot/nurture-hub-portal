import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import NavLinks from "./navbar/NavLinks";
import UserMenu from "./navbar/UserMenu";
import MoreMenu from "./navbar/MoreMenu";
import MobileMenu from "./navbar/MobileMenu";
import { NotificationBell } from "./navbar/NotificationBell";
import { useAuth } from "@/contexts/AuthContext";

interface NavbarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar = ({ menuOpen, toggleMenu }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || menuOpen ? "bg-nurture-primary/95 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-nurture-highlight">Virtue</span>
            <span className="text-nurture-secondary">Baby</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLinks />
          <MoreMenu />
          {isAuthenticated && <NotificationBell />}
          <UserMenu />
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="md:hidden text-nurture-secondary hover:text-nurture-highlight"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Navbar;
