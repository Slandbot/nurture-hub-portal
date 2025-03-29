
import { useState, useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface UseAuthCheckOptions {
  redirectToLogin?: boolean;
  showToast?: boolean;
  toastMessage?: string;
}

export const useAuthCheck = ({
  redirectToLogin = false,
  showToast = true,
  toastMessage = "Please log in to access this feature"
}: UseAuthCheckOptions = {}) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showAuthRequired, setShowAuthRequired] = useState(false);

  const checkAuth = useCallback(() => {
    if (!isAuthenticated) {
      if (showToast) {
        toast.error("Authentication Required", {
          description: toastMessage,
          id: "auth-required", // Prevent duplicate toasts
        });
      }
      
      if (redirectToLogin) {
        navigate("/login");
        return false;
      } else {
        setShowAuthRequired(true);
        return false;
      }
    }
    
    setShowAuthRequired(false);
    return true;
  }, [isAuthenticated, navigate, redirectToLogin, showToast, toastMessage]);

  return { isAuthenticated, checkAuth, showAuthRequired };
};
