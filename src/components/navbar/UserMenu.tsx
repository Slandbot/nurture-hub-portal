
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
        <Button asChild variant="default" className="w-full mt-4 bg-brand-pink hover:bg-brand-lavender">
          <Link to="/login" onClick={onActionClick}>
            Login
          </Link>
        </Button>
      );
    }
    
    return (
      <Button asChild variant="default" className="ml-2 bg-brand-pink hover:bg-brand-lavender">
        <Link to="/login">Login</Link>
      </Button>
    );
  }

  // For mobile view
  if (isMobile) {
    return (
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
            if (onActionClick) onActionClick();
          }} 
          variant="destructive" 
          className="w-full mt-2"
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
  );
};

export default UserMenu;
