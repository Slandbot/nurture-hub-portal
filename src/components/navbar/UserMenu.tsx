import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { User, CalendarIcon, LogOut, ChevronDown } from "lucide-react";

interface UserMenuProps {
  isMobile?: boolean;
  onActionClick?: () => void;
}

const UserMenu = ({ isMobile = false, onActionClick }: UserMenuProps) => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    if (isMobile) {
      return (
        <Button asChild variant="default" className="w-full mt-4 bg-nurture-highlight hover:bg-nurture-highlight/90 text-white">
          <Link to="/login" onClick={onActionClick}>
            Login
          </Link>
        </Button>
      );
    }
    
    return (
      <Button asChild variant="default" className="bg-nurture-highlight hover:bg-nurture-highlight/90 text-white">
        <Link to="/login">Login</Link>
      </Button>
    );
  }

  // For mobile view
  if (isMobile) {
    return (
      <>
        <div className="flex items-center gap-3 px-3 py-2">
          <Avatar className="h-8 w-8 border-2 border-nurture-accent">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="bg-nurture-secondary text-white">{user?.name?.[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-nurture-secondary">{user?.name}</p>
            <p className="text-xs text-nurture-secondary/70">{user?.email}</p>
          </div>
        </div>
        <Button 
          onClick={() => {
            logout();
            if (onActionClick) onActionClick();
          }} 
          variant="destructive" 
          className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </>
    );
  }

  // For desktop view
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 text-nurture-secondary hover:text-nurture-highlight">
          <Avatar className="h-8 w-8 border-2 border-nurture-accent">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="bg-nurture-secondary text-white">{user?.name?.[0]}</AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline">{user?.name?.split(" ")[0]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-white border-nurture-accent">
        <div className="flex flex-col space-y-1 p-2">
          <p className="text-sm font-medium text-nurture-secondary">{user?.name}</p>
          <p className="text-xs text-nurture-secondary/70">{user?.email}</p>
        </div>
        <DropdownMenuSeparator className="bg-nurture-accent/20" />
        <DropdownMenuItem asChild>
          <Link to="/dashboard" className="w-full text-nurture-secondary hover:text-nurture-highlight">
            <User className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/appointments" className="w-full text-nurture-secondary hover:text-nurture-highlight">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Online Consultation
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-nurture-accent/20" />
        <DropdownMenuItem onClick={logout} className="text-red-600 hover:text-red-700">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
