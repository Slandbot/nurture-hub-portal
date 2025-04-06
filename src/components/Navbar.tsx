
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, LogOut, User, Calendar as CalendarIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "../contexts/AuthContext";

interface NavbarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar = ({ menuOpen, toggleMenu }: NavbarProps) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

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
    { name: "Virtue Baby Store", path: "/shop" },
    { name: "Virtues/Sanskaras", path: "/events" },
    { name: "Article", path: "/profile" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || menuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-brand-pink">Virtue</span>
            <span className="text-brand-blue">Baby</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg hover:bg-brand-mint hover:text-primary-foreground transition-colors ${
                location.pathname === link.path
                  ? "text-secondary-foreground font-medium"
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
              {isAuthenticated ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="w-full">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/appointments" className="w-full">Online Consultation</Link>
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem asChild>
                  <Link to="/login" className="w-full">Login to access more</Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem asChild>
                <Link to="#" className="w-full">Gallery</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="#" className="w-full">Feedback</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline">{user?.name?.split(" ")[0]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="w-full">
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/appointments" className="w-full">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Online Consultation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="default" className="ml-2 bg-brand-pink hover:bg-brand-lavender">
              <Link to="/login">Login</Link>
            </Button>
          )}
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
                  className={`px-3 py-2 rounded-lg hover:bg-brand-mint hover:text-primary-foreground transition-colors ${
                    location.pathname === link.path
                      ? "text-secondary-foreground font-medium"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="#"
                onClick={toggleMenu}
                className="px-3 py-2 rounded-lg hover:bg-brand-mint hover:text-primary-foreground transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="#"
                onClick={toggleMenu}
                className="px-3 py-2 rounded-lg hover:bg-brand-mint hover:text-primary-foreground transition-colors"
              >
                Feedback
              </Link>
              {isAuthenticated && (
                <>
                  <Link
                    to="/dashboard"
                    onClick={toggleMenu}
                    className="px-3 py-2 rounded-lg hover:bg-brand-mint hover:text-primary-foreground transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/appointments"
                    onClick={toggleMenu}
                    className="px-3 py-2 rounded-lg hover:bg-brand-mint hover:text-primary-foreground transition-colors"
                  >
                    Online Consultation
                  </Link>
                </>
              )}
              
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user?.name}</p>
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }} 
                    variant="destructive" 
                    className="w-full mt-2"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </Button>
                </>
              ) : (
                <Button asChild variant="default" className="w-full mt-4 bg-brand-pink hover:bg-brand-lavender">
                  <Link to="/login" onClick={toggleMenu}>
                    Login
                  </Link>
                </Button>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
