
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
    <div className="min-h-screen flex flex-col">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="inline-flex items-center text-primary hover:underline">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-bold text-brand-saffron">
                Nurture<span className="text-brand-green">Hub</span>
              </span>
            </Link>
            <h1 className="text-2xl font-bold mt-6 mb-2">Welcome to Nurture Hub</h1>
            <p className="text-muted-foreground">
              Join our community of parents and experts
            </p>
          </div>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Login to Your Account</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link
                          to="/forgot-password"
                          className="text-sm text-primary hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </form>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-muted"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
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
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        width="16" 
                        height="16" 
                        className="mr-2"
                      >
                        <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.413 1.582L19.59 3.516A11.786 11.786 0 0 0 12 .41 11.563 11.563 0 0 0 1.295 7.971l4.55 3.512a7.022 7.022 0 0 1-.579-1.718z" />
                        <path fill="#FBBC05" d="M12 4.909a11.565 11.565 0 0 0-6.734 2.142l-4.55-3.512a11.59 11.59 0 0 0 0 17.022l4.55-3.512A11.565 11.565 0 0 0 12 19.091V4.909z" />
                        <path fill="#4285F4" d="M12 19.091c3.3 0 6.206-1.175 8.535-3.18l-4.152-3.175A7.025 7.025 0 0 1 12 14.909a7.07 7.07 0 0 1-6.155-3.422L1.295 15a11.591 11.591 0 0 0 10.705 4.091z" />
                        <path fill="#34A853" d="M22.54 12.204c0-.81-.069-1.621-.21-2.404H12v4.27h6.093c-.323 1.59-1.356 2.845-2.818 3.575l4.152 3.175a11.591 11.591 0 0 0 3.115-8.616z" />
                      </svg>
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => handleSocialLogin("Facebook")}
                      disabled={isLoading}
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
                        <path d="M16.95 14.255C17.043 14.0583 17.095 13.845 17.095 13.6317C17.095 13.0483 16.782 12.4867 16.294 12.1517C16.0417 11.9767 15.7587 11.8617 15.4547 11.8267L15.4337 11.825L12.2937 11.525C12.2587 11.5217 12.2347 11.515 12.2197 11.5117C12.157 11.4983 12.0943 11.4883 12.0317 11.485C11.882 11.4817 11.7257 11.5117 11.598 11.6083C11.4837 11.6967 11.4183 11.8117 11.3817 11.9383C11.3647 11.9983 11.3547 12.0617 11.348 12.1283V12.1317L11.125 14.18L8.20301 13.9017C7.86201 13.865 7.51734 13.9017 7.20334 14.0317C6.67168 14.2533 6.26168 14.69 6.08868 15.2283C5.99901 15.52 5.97234 15.825 6.03568 16.1317C6.01568 16.1983 6.00234 16.2667 6.00234 16.335C6.00234 16.89 6.27001 17.4083 6.70468 17.7217C6.96134 17.9033 7.25301 18.02 7.56701 18.0533L7.58701 18.055L16.9667 19C16.9967 19.0033 17.0183 19.01 17.0317 19.0133C17.0933 19.0267 17.155 19.0367 17.2183 19.04C17.3667 19.0433 17.5217 19.0133 17.65 18.9183C17.765 18.83 17.8317 18.7133 17.8667 18.5883C17.8837 18.5283 17.8937 18.465 17.9017 18.3983V18.395L18.06 16.9017C18.2783 16.935 18.4983 16.9267 18.7133 16.865C19.2467 16.6433 19.6583 16.205 19.825 15.6667C20.0033 15.0767 19.8933 14.45 19.5267 13.9533C19.16 13.4567 18.6133 13.1267 18.0033 13.0583L17.595 13.0133L16.95 14.255ZM16.4733 14.5117L16.73 14.0433C16.767 13.975 16.8517 13.95 16.92 13.9867L17.6467 14.265C17.715 14.3017 17.74 14.3867 17.7033 14.455L17.4467 14.9233C17.4097 14.9917 17.325 15.0167 17.2567 14.98L16.53 14.7017C16.4617 14.665 16.4367 14.58 16.4733 14.5117ZM14.3917 14.0467L16.0983 14.5533C16.1667 14.59 16.1917 14.675 16.155 14.7433L15.8983 15.2117C15.8617 15.28 15.7767 15.305 15.7083 15.2683L14.0017 14.7617C13.9333 14.725 13.9083 14.64 13.945 14.5717L14.2017 14.1033C14.2383 14.035 14.3233 14.01 14.3917 14.0467ZM11.9433 13.545L13.65 14.0517C13.7183 14.0883 13.7433 14.1733 13.7067 14.2417L13.45 14.71C13.4133 14.7783 13.3283 14.8033 13.26 14.7667L11.5533 14.26C11.485 14.2233 11.46 14.1383 11.4967 14.07L11.7533 13.6017C11.79 13.5333 11.875 13.5083 11.9433 13.545ZM9.55501 13.05L11.2617 13.5567C11.33 13.5933 11.355 13.6783 11.3183 13.7467L11.0617 14.215C11.025 14.2833 10.94 14.3083 10.8717 14.2717L9.16501 13.765C9.09667 13.7283 9.07167 13.6433 9.10834 13.575L9.36501 13.1067C9.40168 13.0383 9.48667 13.0133 9.55501 13.05ZM7.16668 12.555L8.87334 13.0617C8.94168 13.0983 8.96668 13.1833 8.93001 13.2517L8.67334 13.72C8.63668 13.7883 8.55168 13.8133 8.48334 13.7767L6.77668 13.27C6.70834 13.2333 6.68334 13.1483 6.72001 13.08L6.97668 12.6117C7.01334 12.5433 7.09834 12.5183 7.16668 12.555ZM5.70001 16.1617C5.41334 16.0717 5.22001 15.78 5.31001 15.4933C5.39668 15.2067 5.68834 15.0133 5.97501 15.1033L8.52501 15.825C8.80834 15.9133 9.00168 16.2033 8.91834 16.4917C8.83168 16.78 8.53834 16.9717 8.25334 16.8817L5.70001 16.1617ZM16.205 17.825L9.20501 16.435C8.92168 16.3467 8.72834 16.0567 8.81001 15.7683C8.89834 15.48 9.19168 15.29 9.47668 15.38L16.4767 16.77C16.76 16.8583 16.9517 17.15 16.8717 17.4367C16.7884 17.7233 16.4933 17.915 16.205 17.825Z" fill="white" />
                      </svg>
                      Truecaller
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Create an Account</CardTitle>
                  <CardDescription>
                    Join our community to access exclusive resources
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                  </form>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-muted"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Or sign up with
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => handleSocialLogin("Google")}
                      disabled={isLoading}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        width="16" 
                        height="16" 
                        className="mr-2"
                      >
                        <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.413 1.582L19.59 3.516A11.786 11.786 0 0 0 12 .41 11.563 11.563 0 0 0 1.295 7.971l4.55 3.512a7.022 7.022 0 0 1-.579-1.718z" />
                        <path fill="#FBBC05" d="M12 4.909a11.565 11.565 0 0 0-6.734 2.142l-4.55-3.512a11.59 11.59 0 0 0 0 17.022l4.55-3.512A11.565 11.565 0 0 0 12 19.091V4.909z" />
                        <path fill="#4285F4" d="M12 19.091c3.3 0 6.206-1.175 8.535-3.18l-4.152-3.175A7.025 7.025 0 0 1 12 14.909a7.07 7.07 0 0 1-6.155-3.422L1.295 15a11.591 11.591 0 0 0 10.705 4.091z" />
                        <path fill="#34A853" d="M22.54 12.204c0-.81-.069-1.621-.21-2.404H12v4.27h6.093c-.323 1.59-1.356 2.845-2.818 3.575l4.152 3.175a11.591 11.591 0 0 0 3.115-8.616z" />
                      </svg>
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => handleSocialLogin("Facebook")}
                      disabled={isLoading}
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
                        <path d="M16.95 14.255C17.043 14.0583 17.095 13.845 17.095 13.6317C17.095 13.0483 16.782 12.4867 16.294 12.1517C16.0417 11.9767 15.7587 11.8617 15.4547 11.8267L15.4337 11.825L12.2937 11.525C12.2587 11.5217 12.2347 11.515 12.2197 11.5117C12.157 11.4983 12.0943 11.4883 12.0317 11.485C11.882 11.4817 11.7257 11.5117 11.598 11.6083C11.4837 11.6967 11.4183 11.8117 11.3817 11.9383C11.3647 11.9983 11.3547 12.0617 11.348 12.1283V12.1317L11.125 14.18L8.20301 13.9017C7.86201 13.865 7.51734 13.9017 7.20334 14.0317C6.67168 14.2533 6.26168 14.69 6.08868 15.2283C5.99901 15.52 5.97234 15.825 6.03568 16.1317C6.01568 16.1983 6.00234 16.2667 6.00234 16.335C6.00234 16.89 6.27001 17.4083 6.70468 17.7217C6.96134 17.9033 7.25301 18.02 7.56701 18.0533L7.58701 18.055L16.9667 19C16.9967 19.0033 17.0183 19.01 17.0317 19.0133C17.0933 19.0267 17.155 19.0367 17.2183 19.04C17.3667 19.0433 17.5217 19.0133 17.65 18.9183C17.765 18.83 17.8317 18.7133 17.8667 18.5883C17.8837 18.5283 17.8937 18.465 17.9017 18.3983V18.395L18.06 16.9017C18.2783 16.935 18.4983 16.9267 18.7133 16.865C19.2467 16.6433 19.6583 16.205 19.825 15.6667C20.0033 15.0767 19.8933 14.45 19.5267 13.9533C19.16 13.4567 18.6133 13.1267 18.0033 13.0583L17.595 13.0133L16.95 14.255ZM16.4733 14.5117L16.73 14.0433C16.767 13.975 16.8517 13.95 16.92 13.9867L17.6467 14.265C17.715 14.3017 17.74 14.3867 17.7033 14.455L17.4467 14.9233C17.4097 14.9917 17.325 15.0167 17.2567 14.98L16.53 14.7017C16.4617 14.665 16.4367 14.58 16.4733 14.5117ZM14.3917 14.0467L16.0983 14.5533C16.1667 14.59 16.1917 14.675 16.155 14.7433L15.8983 15.2117C15.8617 15.28 15.7767 15.305 15.7083 15.2683L14.0017 14.7617C13.9333 14.725 13.9083 14.64 13.945 14.5717L14.2017 14.1033C14.2383 14.035 14.3233 14.01 14.3917 14.0467ZM11.9433 13.545L13.65 14.0517C13.7183 14.0883 13.7433 14.1733 13.7067 14.2417L13.45 14.71C13.4133 14.7783 13.3283 14.8033 13.26 14.7667L11.5533 14.26C11.485 14.2233 11.46 14.1383 11.4967 14.07L11.7533 13.6017C11.79 13.5333 11.875 13.5083 11.9433 13.545ZM9.55501 13.05L11.2617 13.5567C11.33 13.5933 11.355 13.6783 11.3183 13.7467L11.0617 14.215C11.025 14.2833 10.94 14.3083 10.8717 14.2717L9.16501 13.765C9.09667 13.7283 9.07167 13.6433 9.10834 13.575L9.36501 13.1067C9.40168 13.0383 9.48667 13.0133 9.55501 13.05ZM7.16668 12.555L8.87334 13.0617C8.94168 13.0983 8.96668 13.1833 8.93001 13.2517L8.67334 13.72C8.63668 13.7883 8.55168 13.8133 8.48334 13.7767L6.77668 13.27C6.70834 13.2333 6.68334 13.1483 6.72001 13.08L6.97668 12.6117C7.01334 12.5433 7.09834 12.5183 7.16668 12.555ZM5.70001 16.1617C5.41334 16.0717 5.22001 15.78 5.31001 15.4933C5.39668 15.2067 5.68834 15.0133 5.97501 15.1033L8.52501 15.825C8.80834 15.9133 9.00168 16.2033 8.91834 16.4917C8.83168 16.78 8.53834 16.9717 8.25334 16.8817L5.70001 16.1617ZM16.205 17.825L9.20501 16.435C8.92168 16.3467 8.72834 16.0567 8.81001 15.7683C8.89834 15.48 9.19168 15.29 9.47668 15.38L16.4767 16.77C16.76 16.8583 16.9517 17.15 16.8717 17.4367C16.7884 17.7233 16.4933 17.915 16.205 17.825Z" fill="white" />
                      </svg>
                      Truecaller
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center justify-center text-center text-muted-foreground">
                  <p className="text-sm">
                    By signing up, you agree to our{" "}
                    <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
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
