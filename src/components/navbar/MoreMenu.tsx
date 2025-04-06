
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
        <Button variant="ghost" className="flex items-center">
          More <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {isAuthenticated ? (
          <>
            <DropdownMenuItem asChild>
              <Link to="/dashboard" className="w-full" onClick={onLinkClick}>Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/appointments" className="w-full" onClick={onLinkClick}>Online Consultation</Link>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem asChild>
            <Link to="/login" className="w-full" onClick={onLinkClick}>Login to access more</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem asChild>
          <Link to="#" className="w-full" onClick={onLinkClick}>Gallery</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="#" className="w-full" onClick={onLinkClick}>Feedback</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="px-2 py-1.5 flex items-center justify-between">
          <span className="text-sm">Dark Mode</span>
          <ThemeToggle />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreMenu;
