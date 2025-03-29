
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LockKeyhole } from "lucide-react";

interface AuthRequiredProps {
  message?: string;
  showLogin?: boolean;
}

const AuthRequired = ({ 
  message = "Please log in to access this feature",
  showLogin = true
}: AuthRequiredProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <div 
          className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <LockKeyhole 
            className={`h-10 w-10 transition-all duration-300 ${
              isHovered ? "text-primary transform rotate-12" : "text-muted-foreground"
            }`} 
          />
        </div>
        <CardTitle>Authentication Required</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground">{message}</p>
      </CardContent>
      {showLogin && (
        <CardFooter className="flex justify-center">
          <Button asChild className="bg-brand-saffron hover:bg-brand-ochre">
            <Link to="/login">Log in</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthRequired;
