
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { isAuthenticated } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex flex-col space-y-2 py-4">
          <NavLinks onLinkClick={onClose} />
          
          <Link
            to="#"
            onClick={onClose}
            className="px-3 py-2 rounded-lg hover:bg-brand-mint hover:text-primary-foreground transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="#"
            onClick={onClose}
            className="px-3 py-2 rounded-lg hover:bg-brand-mint hover:text-primary-foreground transition-colors"
          >
            Feedback
          </Link>
          
          {isAuthenticated && (
            <>
              <Link
                to="/dashboard"
                onClick={onClose}
                className="px-3 py-2 rounded-lg hover:bg-brand-mint hover:text-primary-foreground transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/appointments"
                onClick={onClose}
                className="px-3 py-2 rounded-lg hover:bg-brand-mint hover:text-primary-foreground transition-colors"
              >
                Online Consultation
              </Link>
            </>
          )}
          
          <UserMenu isMobile={true} onActionClick={onClose} />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
