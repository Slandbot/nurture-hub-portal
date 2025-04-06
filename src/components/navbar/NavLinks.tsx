import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  path: string;
  name: string;
  onClick?: () => void;
}

export const NavLink = ({ path, name, onClick }: NavLinkProps) => {
  const location = useLocation();
  
  return (
    <Link
      to={path}
      onClick={onClick}
      className={`px-3 py-2 rounded-lg hover:bg-nurture-accent hover:text-nurture-secondary transition-colors ${
        location.pathname === path
          ? "text-nurture-highlight font-medium"
          : "text-nurture-secondary"
      }`}
    >
      {name}
    </Link>
  );
};

interface NavLinksProps {
  onLinkClick?: () => void;
}

const NavLinks = ({ onLinkClick }: NavLinksProps) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Virtue Baby Store", path: "/shop" },
    { name: "Virtues/Sanskaras", path: "/events" },
    { name: "Article", path: "/profile" },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <NavLink 
          key={link.path} 
          path={link.path} 
          name={link.name} 
          onClick={onLinkClick} 
        />
      ))}
    </>
  );
};

export default NavLinks;
