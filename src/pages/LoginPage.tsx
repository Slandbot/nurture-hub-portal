import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Facebook, Mail, ChevronLeft } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { login, signup, isLoading } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  const handleSocialLogin = (provider: string) => {
    // In a real app, this would redirect to OAuth flow
    console.log(`${provider} login requested`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-nurture-primary/10 via-white to-nurture-accent/10">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="inline-flex items-center text-nurture-secondary hover:text-nurture-highlight">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-bold">
                <span className="text-nurture-highlight">Virtue</span>
                <span className="text-nurture-secondary">Hub</span>
              </span>
            </Link>
            <h1 className="text-2xl font-bold mt-6 mb-2 text-nurture-secondary">Welcome to Nurture Hub</h1>
            <p className="text-nurture-secondary/70">
              Join our community of parents and experts
            </p>
          </div>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="text-nurture-secondary data-[state=active]:text-nurture-highlight">Login</TabsTrigger>
              <TabsTrigger value="signup" className="text-nurture-secondary data-[state=active]:text-nurture-highlight">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card className="border-nurture-accent">
                <CardHeader>
                  <CardTitle className="text-nurture-secondary">Login to Your Account</CardTitle>
                  <CardDescription className="text-nurture-secondary/70">
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-nurture-secondary">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-nurture-accent focus-visible:ring-nurture-highlight"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-nurture-secondary">Password</Label>
                        <Link
                          to="/forgot-password"
                          className="text-sm text-nurture-highlight hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border-nurture-accent focus-visible:ring-nurture-highlight"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-nurture-highlight hover:bg-nurture-highlight/90 text-white" disabled={isLoading}>
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </form>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-nurture-accent"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-nurture-secondary/70">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => handleSocialLogin("Google")}
                      disabled={isLoading}
                      className="border-nurture-accent hover:bg-nurture-accent/10"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        width="16" 
                        height="16" 
                        className="mr-2"
                      >
                        <path fill="#4285F4" d="M22.54 12.204c0-.81-.069-1.621-.21-2.404H12v4.27h6.093c-.323 1.59-1.356 2.845-2.818 3.575l4.152 3.175a11.591 11.591 0 0 0 3.115-8.616z" />
                        <path fill="#34A853" d="M12 22.204c3.3 0 6.206-1.175 8.535-3.18l-4.152-3.175A7.025 7.025 0 0 1 12 17.909a7.07 7.07 0 0 1-6.155-3.422L1.295 18a11.591 11.591 0 0 0 10.705 4.204z" />
                        <path fill="#FBBC05" d="M12 4.909a11.565 11.565 0 0 0-6.734 2.142l-4.55-3.512a11.59 11.59 0 0 0 0 17.022l4.55-3.512A11.565 11.565 0 0 0 12 19.091V4.909z" />
                        <path fill="#4285F4" d="M12 19.091c3.3 0 6.206-1.175 8.535-3.18l-4.152-3.175A7.025 7.025 0 0 1 12 14.909a7.07 7.07 0 0 1-6.155-3.422L1.295 15a11.591 11.591 0 0 0 10.705 4.091z" />
                      </svg>
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => handleSocialLogin("Facebook")}
                      disabled={isLoading}
                      className="border-nurture-accent hover:bg-nurture-accent/10"
                    >
                      <Facebook className="h-4 w-4 mr-2 text-blue-600" />
                      Facebook
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => handleSocialLogin("Truecaller")}
                      disabled={isLoading}
                      className="border-nurture-accent hover:bg-nurture-accent/10"
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <rect width="24" height="24" rx="12" fill="#0099FF" />
                      </svg>
                      Truecaller
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="signup">
              <Card className="border-nurture-accent">
                <CardHeader>
                  <CardTitle className="text-nurture-secondary">Create an Account</CardTitle>
                  <CardDescription className="text-nurture-secondary/70">
                    Join our community to access exclusive resources
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-nurture-secondary">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border-nurture-accent focus-visible:ring-nurture-highlight"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-nurture-secondary">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-nurture-accent focus-visible:ring-nurture-highlight"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-nurture-secondary">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border-nurture-accent focus-visible:ring-nurture-highlight"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-nurture-highlight hover:bg-nurture-highlight/90 text-white" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                  </form>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-nurture-accent"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-nurture-secondary/70">
                        Or sign up with
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => handleSocialLogin("Google")}
                      className="border-nurture-accent hover:bg-nurture-accent/10"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        width="16" 
                        height="16" 
                        className="mr-2"
                      >
                        <path fill="#4285F4" d="M22.54 12.204c0-.81-.069-1.621-.21-2.404H12v4.27h6.093c-.323 1.59-1.356 2.845-2.818 3.575l4.152 3.175a11.591 11.591 0 0 0 3.115-8.616z" />
                        <path fill="#34A853" d="M12 22.204c3.3 0 6.206-1.175 8.535-3.18l-4.152-3.175A7.025 7.025 0 0 1 12 17.909a7.07 7.07 0 0 1-6.155-3.422L1.295 18a11.591 11.591 0 0 0 10.705 4.204z" />
                        <path fill="#FBBC05" d="M12 4.909a11.565 11.565 0 0 0-6.734 2.142l-4.55-3.512a11.59 11.59 0 0 0 0 17.022l4.55-3.512A11.565 11.565 0 0 0 12 19.091V4.909z" />
                      </svg>
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => handleSocialLogin("Facebook")}
                      className="border-nurture-accent hover:bg-nurture-accent/10"
                    >
                      <Facebook className="h-4 w-4 mr-2 text-blue-600" />
                      Facebook
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => handleSocialLogin("Truecaller")}
                      className="border-nurture-accent hover:bg-nurture-accent/10"
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <rect width="24" height="24" rx="12" fill="#0099FF" />
                      </svg>
                      Truecaller
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center justify-center text-center">
                  <p className="text-sm text-nurture-secondary/70">
                    By signing up, you agree to our{" "}
                    <Link to="/terms" className="underline underline-offset-4 hover:text-nurture-highlight">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="underline underline-offset-4 hover:text-nurture-highlight">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
