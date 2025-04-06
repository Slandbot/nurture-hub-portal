import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role?: string;
  preferences?: UserPreferences;
}

interface UserPreferences {
  notifications: boolean;
  theme: "light" | "dark" | "system";
  language: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session and validate expiry
    const checkAuth = () => {
      try {
        const sessionStr = localStorage.getItem("session");
        if (!sessionStr) {
          setIsLoading(false);
          return;
        }

        const session = JSON.parse(sessionStr);
        const now = new Date().getTime();

        if (session.expiresAt && now < session.expiresAt) {
          setUser(session.user);
        } else {
          // Session expired
          localStorage.removeItem("session");
          localStorage.removeItem("user");
        }
      } catch (error) {
        console.error("Failed to parse stored session:", error);
        localStorage.removeItem("session");
        localStorage.removeItem("user");
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const setSession = (userData: User) => {
    const session = {
      user: userData,
      expiresAt: new Date().getTime() + SESSION_DURATION,
    };
    localStorage.setItem("session", JSON.stringify(session));
    setUser(userData);
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password.length >= 6) {
        const mockUser = {
          id: Math.random().toString(36).substring(2, 9),
          name: email.split("@")[0],
          email,
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(email.split("@")[0])}&background=random`,
          preferences: {
            notifications: true,
            theme: "light" as const,
            language: "en"
          }
        };
        
        setSession(mockUser);
        toast.success("Welcome back!", {
          description: "You've successfully logged in to Nurture Hub",
        });
        navigate("/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Login failed", {
        description: error instanceof Error ? error.message : "Please check your credentials and try again",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (name && email && password.length >= 6) {
        const mockUser = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email,
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
          preferences: {
            notifications: true,
            theme: "light" as const,
            language: "en"
          }
        };
        
        setSession(mockUser);
        toast.success("Account created!", {
          description: "Welcome to Nurture Hub! Your account has been created successfully.",
        });
        navigate("/dashboard");
      } else {
        throw new Error("Please fill in all required fields");
      }
    } catch (error) {
      toast.error("Signup failed", {
        description: error instanceof Error ? error.message : "Please check your information and try again",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("session");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const updateUserPreferences = (preferences: Partial<UserPreferences>) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      preferences: {
        ...user.preferences,
        ...preferences
      }
    };
    
    setSession(updatedUser);
    toast.success("Preferences updated successfully");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        updateUserPreferences,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
