import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ThemeToggle from "../theme/ThemeToggle";

interface MoreMenuProps {
  onLinkClick?: () => void;
}

const MoreMenu = ({ onLinkClick }: MoreMenuProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center text-nurture-secondary hover:text-nurture-highlight">
          More <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white border-nurture-accent">
        {isAuthenticated ? (
          <>
            <DropdownMenuItem asChild>
              <Link to="/dashboard" className="w-full text-nurture-secondary hover:text-nurture-highlight" onClick={onLinkClick}>Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/appointments" className="w-full text-nurture-secondary hover:text-nurture-highlight" onClick={onLinkClick}>Online Consultation</Link>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem asChild>
            <Link to="/login" className="w-full text-nurture-secondary hover:text-nurture-highlight" onClick={onLinkClick}>Login to access more</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem asChild>
          <Link to="#" className="w-full text-nurture-secondary hover:text-nurture-highlight" onClick={onLinkClick}>Gallery</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="#" className="w-full text-nurture-secondary hover:text-nurture-highlight" onClick={onLinkClick}>Feedback</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-nurture-accent/20" />
        <div className="px-2 py-1.5 flex items-center justify-between text-nurture-secondary">
          <span className="text-sm">Dark Mode</span>
          <ThemeToggle />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreMenu;
