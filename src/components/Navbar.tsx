
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar = ({ menuOpen, toggleMenu }: NavbarProps) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Dr. Nitika", path: "/profile" },
    { name: "Events", path: "/events" },
    { name: "Shop", path: "/shop" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || menuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-brand-purple">
            Nurture<span className="text-brand-lavender">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg hover:bg-secondary transition-colors ${
                location.pathname === link.path
                  ? "text-primary font-medium"
                  : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Link to="/dashboard" className="w-full">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#online-courses" className="w-full">Online Courses</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#articles" className="w-full">Articles</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#contact" className="w-full">Contact Us</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button asChild variant="default" className="ml-2">
            <Link to="/login">Login</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="md:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-2 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className={`px-3 py-2 rounded-lg hover:bg-secondary transition-colors ${
                    location.pathname === link.path
                      ? "text-primary font-medium"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/dashboard"
                onClick={toggleMenu}
                className="px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
              >
                Dashboard
              </Link>
              <Button asChild variant="default" className="w-full mt-4">
                <Link to="/login" onClick={toggleMenu}>
                  Login
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
