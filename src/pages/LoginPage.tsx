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
                      {/* <svg 
                        xmlns="" 
                        viewBox="0 0 24 24" 
                        width="16" 
                        height="16" 
                        className="mr-2"
                      >


                        <path fill="#4285F4" d="M22.54 12.204c0-.81-.069-1.621-.21-2.404H12v4.27h6.093c-.323 1.59-1.356 2.845-2.818 3.575l4.152 3.175a11.591 11.591 0 0 0 3.115-8.616z" />
                        <path fill="#34A853" d="M12 22.204c3.3 0 6.206-1.175 8.535-3.18l-4.152-3.175A7.025 7.025 0 0 1 12 17.909a7.07 7.07 0 0 1-6.155-3.422L1.295 18a11.591 11.591 0 0 0 10.705 4.204z" />
                        <path fill="#FBBC05" d="M12 4.909a11.565 11.565 0 0 0-6.734 2.142l-4.55-3.512a11.59 11.59 0 0 0 0 17.022l4.55-3.512A11.565 11.565 0 0 0 12 19.091V4.909z" />
                        <path fill="#4285F4" d="M12 19.091c3.3 0 6.206-1.175 8.535-3.18l-4.152-3.175A7.025 7.025 0 0 1 12 14.909a7.07 7.07 0 0 1-6.155-3.422L1.295 15a11.591 11.591 0 0 0 10.705 4.091z" />
                      </svg> */}
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 48 48">
                        <path fill="#FFC107" className="mr-2" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
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
                      {/* <Facebook className="h-4 w-4 mr-2 text-blue-600" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" className="mr-2" viewBox="0 0 48 48">
                        <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                      </svg>
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
                      {/* <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <rect width="24" height="24" rx="12" fill="#0099FF" />
                      </svg> */}

                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="12" viewBox="0 0 64 64">
                        <radialGradient id="7UbDxoBFqoiwxNlX_s_e-a_mCMVS8ZtWy2j_gr1" cx="32.5" cy="31.5" r="30.516" className="mr-2" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#aeedff"></stop><stop offset=".193" stop-color="#baf0ff"></stop><stop offset=".703" stop-color="#d6f7ff"></stop><stop offset="1" stop-color="#e0f9ff"></stop></radialGradient><path fill="url(#7UbDxoBFqoiwxNlX_s_e-a_mCMVS8ZtWy2j_gr1)" d="M59,20h1.5c2.168,0,3.892-1.998,3.422-4.243C63.58,14.122,62.056,13,60.385,13L53,13	c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h3.385c1.67,0,3.195-1.122,3.537-2.757C60.392,3.998,58.668,2,56.5,2H34.006H32.5h-24	C6.575,2,5,3.575,5,5.5S6.575,9,8.5,9H10c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2l-5.385,0c-1.67,0-3.195,1.122-3.537,2.757	C0.608,18.002,2.332,20,4.5,20H18v12L4.615,32c-1.67,0-3.195,1.122-3.537,2.757C0.608,37.002,2.332,39,4.5,39H5c1.105,0,2,0.895,2,2	c0,1.105-0.895,2-2,2H4.5c-2.168,0-3.892,1.998-3.422,4.243C1.42,48.878,2.945,50,4.615,50H10c1.105,0,2,0.895,2,2	c0,1.105-0.895,2-2,2l-1.385,0c-1.67,0-3.195,1.122-3.537,2.757C4.608,59.002,6.332,61,8.5,61h22.494H32.5h23	c1.925,0,3.5-1.575,3.5-3.5S57.425,54,55.5,54H55c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h4.385c1.67,0,3.195-1.122,3.537-2.757	C63.392,44.998,61.668,43,59.5,43H47V31h12.385c1.67,0,3.195-1.122,3.537-2.757C63.392,25.998,61.668,24,59.5,24H59	c-1.105,0-2-0.895-2-2C57,20.895,57.895,20,59,20z"></path><linearGradient id="7UbDxoBFqoiwxNlX_s_e-b_mCMVS8ZtWy2j_gr2" x1="32" x2="32" y1="57" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#155cdd"></stop><stop offset=".273" stop-color="#1f7ee4"></stop><stop offset=".566" stop-color="#279bea"></stop><stop offset=".819" stop-color="#2caeee"></stop><stop offset="1" stop-color="#2eb4ef"></stop></linearGradient><circle cx="32" cy="32" r="25" fill="url(#7UbDxoBFqoiwxNlX_s_e-b_mCMVS8ZtWy2j_gr2)"></circle><path fill="#fff" d="M14.432,20.207L14.432,20.207c-1.233,0.86-1.98,2.292-1.999,3.828 c-0.042,3.602,0.564,10.54,5.098,16.554c4.53,6.009,8.504,7.612,12.347,9.162c0.519,0.209,1.036,0.418,1.552,0.636l0.089,0.037 c2.006,0.82,4.33,0.322,5.924-1.271l0.679-0.68c1.007-1.007,1.021-2.659,0.031-3.683l-2.997-2.997 c-1.384-1.385-3.749-0.937-3.774-0.932l-5.075,2.034l-0.107-0.068c-5.512-3.507-8.078-11.056-8.104-11.132l-0.041-0.124 c0,0,2.512-3.038,3.095-4.206c0.724-1.451,0.412-3.271-0.157-4.979l-0.396-1.191c-0.306-0.917-1.239-1.648-1.841-2.041 c-0.355-0.232-0.772-0.363-1.194-0.324C16.485,18.93,15.304,19.598,14.432,20.207z"></path><path fill="#fff" d="M52.296,27.557c-0.121-0.094-0.354,0.028-0.356,0.03c-1.253,1.074-2.289,1.497-3.072,1.239	c-0.778-0.257-0.979-1.094-0.987-1.129c-0.008-0.037,0-0.075,0.023-0.104c0.022-0.029,0.058-0.048,0.095-0.049	c0.794-0.025,1.519-0.168,2.156-0.422c1.281-0.511,2.106-1.786,2.005-3.1c-0.039-0.521-0.22-0.922-0.537-1.194	c-0.41-0.351-1.059-0.495-1.919-0.428c-3.755,0.291-3.938,3.912-3.938,3.949c0.011,0.17,0.092,1.783-0.434,2.292	c-0.123,0.119-0.267,0.175-0.437,0.157c-0.213-0.019-0.385-0.112-0.508-0.277c-0.412-0.551-0.258-1.873,0.125-3.829	c0.287-1.461,0.129-1.955,0.01-2.119c-0.053-0.071-0.097-0.077-0.099-0.077c-0.677-0.101-1.171-0.02-1.479,0.24	c-0.311,0.262-0.322,0.612-0.322,0.627c-0.101,3.147-0.235,5.062-1.249,5.133c-0.196,0.011-0.346-0.047-0.47-0.178	c-0.495-0.521-0.343-2.142-0.109-4.048c0.145-1.187-0.063-1.606-0.201-1.751c-0.105-0.11-0.198-0.103-0.206-0.104	c-1.23,0.044-1.258,0.695-1.259,0.723c0.05,0.845-0.15,1.963-0.629,2.45c-0.177,0.18-0.381,0.272-0.603,0.259	c-0.755-0.03-0.729-0.847-0.703-1.711c0.008-0.251,0.016-0.51,0.009-0.772c-0.011-0.412-0.108-0.704-0.281-0.844	c-0.141-0.114-0.285-0.089-0.289-0.09c-1.347,0.032-2.059,1.404-2.065,1.418c-0.029,0.058-0.098,0.085-0.159,0.059	c-0.06-0.024-0.091-0.092-0.071-0.153c0.003-0.009,0.258-0.814-0.055-1.207c-0.133-0.166-0.357-0.235-0.678-0.21	c-1.283,0.108-1.298,0.943-1.298,0.952c-0.36,2.993-2.05,4.619-2.121,4.687c-0.583,0.474-1.055,0.638-1.416,0.5	c-0.418-0.163-0.498-0.67-0.502-0.691l-0.001-3.307c0-0.081,0.088-0.14,0.16-0.12c0.627,0.177,1.282,0.054,1.801-0.339	c0.513-0.388,0.81-0.977,0.816-1.618h-1.95c-0.049,0-0.093-0.028-0.113-0.071c-0.021-0.044-0.014-0.096,0.017-0.133	c1.171-1.42,1.338-2.314,1.272-2.813c-0.061-0.452-0.311-0.635-0.321-0.643c-0.515-0.367-0.997-0.464-1.439-0.286	c-1.465,0.588-2.11,3.907-2.116,3.94c-0.012,0.059-0.063,0.102-0.123,0.102h-0.001l-2.135-0.016	c-0.288,0.011-0.365,0.088-0.386,0.121c-0.033,0.056,0,0.129,0.001,0.129c0.402,1.429,1.859,1.167,1.923,1.153	c0.008-0.001,0.016-0.002,0.023-0.002c0.028,0,0.057,0.01,0.079,0.028c0.029,0.023,0.046,0.059,0.046,0.096l0.023,4.237	c-0.001,0.02-0.058,1.015,0.586,1.707c0.414,0.445,1.029,0.675,1.828,0.682c0.014,0,0.028,0,0.042,0	c2.534,0,3.093-2.112,3.115-2.203c0.015-0.062,0.069-0.094,0.14-0.094c0.063,0.01,0.109,0.066,0.106,0.13	c-0.052,1.046,0.079,1.712,0.39,1.979c0.152,0.131,0.352,0.173,0.609,0.118c0.646-0.129,0.692-0.394,0.829-1.78	c0.035-0.357,0.077-0.782,0.141-1.288c0.314-2.515,1.631-2.435,1.697-2.439c0.062,0.005,0.11,0.055,0.115,0.116	c0.089,1.324,0.428,2.123,1.008,2.373c0.815,0.351,1.873-0.504,1.884-0.514c0.037-0.031,0.09-0.038,0.133-0.016	c0.044,0.021,0.071,0.064,0.071,0.113l-0.008,1.068c-0.007,0.876,0.395,1.669,1.047,2.071c1.41,0.869,2.793-0.444,2.851-0.502	c0.024-0.022,0.051-0.035,0.091-0.035c0.033,0.001,0.065,0.016,0.088,0.041c0.513,0.56,1.073,0.843,1.668,0.843	c0.007,0,0.015,0,0.022,0c1.096-0.013,1.953-0.982,1.962-0.992c0.023-0.027,0.058-0.043,0.094-0.043c0.001,0,0.002,0,0.002,0	c0.037,0.001,0.072,0.018,0.096,0.047c0.938,1.162,2.353,1.037,3.113,0.856c1.327-0.312,2.596-1.239,2.771-2.026	C52.482,27.782,52.357,27.603,52.296,27.557z M49.474,24.273c0.204-0.05,0.397,0.02,0.596,0.209	c0.214,0.203,0.255,0.412,0.127,0.638c-0.312,0.547-1.408,0.971-1.999,0.971c-0.026,0-0.051-0.001-0.074-0.003	C48.342,25.525,48.884,24.416,49.474,24.273z"></path><path fill="#fff" d="M32.097,32.499c0.435,0,0.801,0.117,0.865,0.139c0.262,0.089,0.402,0.372,0.313,0.634 c-0.07,0.209-0.263,0.341-0.472,0.341c-0.053,0-0.107-0.008-0.16-0.026c-0.12-0.04-0.339-0.085-0.55-0.085 c-0.153,0-0.301,0.024-0.405,0.091c-0.04,0.026-0.161,0.105-0.189,0.413c-0.061,0.669-0.012,1.067,0.147,1.219 c0.094,0.088,0.272,0.133,0.526,0.133c0.138,0,0.298-0.013,0.479-0.04c0.02-0.002,0.04-0.003,0.06-0.003 c0.256,0,0.47,0.172,0.508,0.425c0.04,0.273-0.149,0.527-0.422,0.568c-0.187,0.027-0.4,0.051-0.622,0.051 c-0.425,0-0.878-0.088-1.216-0.407c-0.521-0.492-0.523-1.305-0.457-2.035c0.06-0.655,0.382-0.993,0.642-1.162 C31.443,32.558,31.788,32.499,32.097,32.499"></path><path fill="#fff" d="M35.229,32.376c0.086,0,0.176,0.005,0.272,0.016c1.045,0.106,1.341,1.084,1.285,1.714l0.002,1.823 c0,0.276-0.224,0.5-0.5,0.5c-0.214,0-0.393-0.135-0.465-0.324c-0.335,0.138-0.704,0.225-1.052,0.225 c-0.198,0-0.39-0.028-0.562-0.09c-0.395-0.143-0.646-0.453-0.692-0.854c-0.037-0.329,0.059-0.638,0.276-0.893 c0.474-0.555,1.435-0.731,1.961-0.787c-0.044-0.155-0.139-0.299-0.356-0.321c-0.059-0.006-0.111-0.008-0.157-0.008 c-0.239,0-0.326,0.066-0.34,0.094c-0.04,0.238-0.237,0.395-0.471,0.395c-0.033,0-0.067-0.003-0.102-0.01 c-0.272-0.047-0.449-0.327-0.401-0.6C33.985,32.938,34.327,32.376,35.229,32.376 M34.75,35.328c0.28,0,0.729-0.11,1.039-0.329 v-0.286c-0.474,0.062-1.044,0.207-1.234,0.43c-0.042,0.05-0.048,0.084-0.042,0.13C34.549,35.31,34.635,35.328,34.75,35.328"></path><path fill="#fff" d="M37.701,30.968c0.276,0,0.5,0.224,0.5,0.5v4.404c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5 v-4.404C37.201,31.191,37.424,30.968,37.701,30.968"></path><path fill="#fff" d="M39.138,30.968c0.276,0,0.5,0.224,0.5,0.5v4.404c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5 v-4.404C38.638,31.191,38.861,30.968,39.138,30.968"></path><path fill="#fff" d="M41.943,32.282c0.003,0,0.007,0,0.01,0c0.853,0.033,1.546,0.789,1.546,1.686v0.309 c0,0.276-0.224,0.5-0.5,0.5h-1.917c0.015,0.028,0.03,0.056,0.049,0.082c0.166,0.243,0.479,0.368,0.887,0.368 c0.224,0,0.476-0.038,0.747-0.114c0.048-0.014,0.096-0.021,0.142-0.021c0.217,0,0.413,0.146,0.476,0.364 c0.076,0.266-0.077,0.542-0.343,0.618c-0.358,0.103-0.701,0.153-1.02,0.153c-0.747,0-1.357-0.277-1.717-0.805 c-0.467-0.685-0.393-1.62,0.19-2.383C40.99,32.394,41.556,32.282,41.943,32.282 M41.2,33.776h1.273 c-0.074-0.273-0.3-0.484-0.559-0.494c-0.019-0.003-0.039-0.004-0.06-0.004c-0.147,0-0.339,0.073-0.566,0.368 C41.257,33.689,41.227,33.732,41.2,33.776"></path><path fill="#fff" d="M44.34,32.364c0.251,0,0.449,0.187,0.485,0.427c0.161-0.041,0.337-0.064,0.514-0.064 c0.375,0,0.754,0.101,1.006,0.342c0.199,0.19,0.207,0.507,0.016,0.707c-0.098,0.103-0.229,0.154-0.36,0.154 c-0.124,0-0.248-0.046-0.345-0.138c-0.049-0.04-0.191-0.075-0.35-0.075c-0.109,0-0.225,0.017-0.325,0.059 c-0.106,0.046-0.109,0.085-0.11,0.102c-0.003,0.041-0.018,0.077-0.03,0.115v1.863c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5 v-2.992C43.84,32.588,44.063,32.364,44.34,32.364"></path>
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
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        className="mr-2"
                      >
                        <path fill="#4285F4" d="M22.54 12.204c0-.81-.069-1.621-.21-2.404H12v4.27h6.093c-.323 1.59-1.356 2.845-2.818 3.575l4.152 3.175a11.591 11.591 0 0 0 3.115-8.616z" />
                        <path fill="#34A853" d="M12 22.204c3.3 0 6.206-1.175 8.535-3.18l-4.152-3.175A7.025 7.025 0 0 1 12 17.909a7.07 7.07 0 0 1-6.155-3.422L1.295 18a11.591 11.591 0 0 0 10.705 4.204z" />
                        <path fill="#FBBC05" d="M12 4.909a11.565 11.565 0 0 0-6.734 2.142l-4.55-3.512a11.59 11.59 0 0 0 0 17.022l4.55-3.512A11.565 11.565 0 0 0 12 19.091V4.909z" />
                      </svg> */}

                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 48 48">
                        <path fill="#FFC107" className="mr-2" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                      </svg>

                      Google
                    </Button>
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => handleSocialLogin("Facebook")}
                      className="border-nurture-accent hover:bg-nurture-accent/10"
                    >
                      {/* <Facebook className="h-4 w-4 mr-2 text-blue-600" /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" className="mr-2" viewBox="0 0 48 48">
                        <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                      </svg>
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
                      {/* <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <rect width="24" height="24" rx="12" fill="#0099FF" />
                      </svg> */}

                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="12" viewBox="0 0 64 64">
                        <radialGradient id="7UbDxoBFqoiwxNlX_s_e-a_mCMVS8ZtWy2j_gr1" cx="32.5" cy="31.5" r="30.516" className="mr-2" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#aeedff"></stop><stop offset=".193" stop-color="#baf0ff"></stop><stop offset=".703" stop-color="#d6f7ff"></stop><stop offset="1" stop-color="#e0f9ff"></stop></radialGradient><path fill="url(#7UbDxoBFqoiwxNlX_s_e-a_mCMVS8ZtWy2j_gr1)" d="M59,20h1.5c2.168,0,3.892-1.998,3.422-4.243C63.58,14.122,62.056,13,60.385,13L53,13	c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h3.385c1.67,0,3.195-1.122,3.537-2.757C60.392,3.998,58.668,2,56.5,2H34.006H32.5h-24	C6.575,2,5,3.575,5,5.5S6.575,9,8.5,9H10c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2l-5.385,0c-1.67,0-3.195,1.122-3.537,2.757	C0.608,18.002,2.332,20,4.5,20H18v12L4.615,32c-1.67,0-3.195,1.122-3.537,2.757C0.608,37.002,2.332,39,4.5,39H5c1.105,0,2,0.895,2,2	c0,1.105-0.895,2-2,2H4.5c-2.168,0-3.892,1.998-3.422,4.243C1.42,48.878,2.945,50,4.615,50H10c1.105,0,2,0.895,2,2	c0,1.105-0.895,2-2,2l-1.385,0c-1.67,0-3.195,1.122-3.537,2.757C4.608,59.002,6.332,61,8.5,61h22.494H32.5h23	c1.925,0,3.5-1.575,3.5-3.5S57.425,54,55.5,54H55c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2h4.385c1.67,0,3.195-1.122,3.537-2.757	C63.392,44.998,61.668,43,59.5,43H47V31h12.385c1.67,0,3.195-1.122,3.537-2.757C63.392,25.998,61.668,24,59.5,24H59	c-1.105,0-2-0.895-2-2C57,20.895,57.895,20,59,20z"></path><linearGradient id="7UbDxoBFqoiwxNlX_s_e-b_mCMVS8ZtWy2j_gr2" x1="32" x2="32" y1="57" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#155cdd"></stop><stop offset=".273" stop-color="#1f7ee4"></stop><stop offset=".566" stop-color="#279bea"></stop><stop offset=".819" stop-color="#2caeee"></stop><stop offset="1" stop-color="#2eb4ef"></stop></linearGradient><circle cx="32" cy="32" r="25" fill="url(#7UbDxoBFqoiwxNlX_s_e-b_mCMVS8ZtWy2j_gr2)"></circle><path fill="#fff" d="M14.432,20.207L14.432,20.207c-1.233,0.86-1.98,2.292-1.999,3.828 c-0.042,3.602,0.564,10.54,5.098,16.554c4.53,6.009,8.504,7.612,12.347,9.162c0.519,0.209,1.036,0.418,1.552,0.636l0.089,0.037 c2.006,0.82,4.33,0.322,5.924-1.271l0.679-0.68c1.007-1.007,1.021-2.659,0.031-3.683l-2.997-2.997 c-1.384-1.385-3.749-0.937-3.774-0.932l-5.075,2.034l-0.107-0.068c-5.512-3.507-8.078-11.056-8.104-11.132l-0.041-0.124 c0,0,2.512-3.038,3.095-4.206c0.724-1.451,0.412-3.271-0.157-4.979l-0.396-1.191c-0.306-0.917-1.239-1.648-1.841-2.041 c-0.355-0.232-0.772-0.363-1.194-0.324C16.485,18.93,15.304,19.598,14.432,20.207z"></path><path fill="#fff" d="M52.296,27.557c-0.121-0.094-0.354,0.028-0.356,0.03c-1.253,1.074-2.289,1.497-3.072,1.239	c-0.778-0.257-0.979-1.094-0.987-1.129c-0.008-0.037,0-0.075,0.023-0.104c0.022-0.029,0.058-0.048,0.095-0.049	c0.794-0.025,1.519-0.168,2.156-0.422c1.281-0.511,2.106-1.786,2.005-3.1c-0.039-0.521-0.22-0.922-0.537-1.194	c-0.41-0.351-1.059-0.495-1.919-0.428c-3.755,0.291-3.938,3.912-3.938,3.949c0.011,0.17,0.092,1.783-0.434,2.292	c-0.123,0.119-0.267,0.175-0.437,0.157c-0.213-0.019-0.385-0.112-0.508-0.277c-0.412-0.551-0.258-1.873,0.125-3.829	c0.287-1.461,0.129-1.955,0.01-2.119c-0.053-0.071-0.097-0.077-0.099-0.077c-0.677-0.101-1.171-0.02-1.479,0.24	c-0.311,0.262-0.322,0.612-0.322,0.627c-0.101,3.147-0.235,5.062-1.249,5.133c-0.196,0.011-0.346-0.047-0.47-0.178	c-0.495-0.521-0.343-2.142-0.109-4.048c0.145-1.187-0.063-1.606-0.201-1.751c-0.105-0.11-0.198-0.103-0.206-0.104	c-1.23,0.044-1.258,0.695-1.259,0.723c0.05,0.845-0.15,1.963-0.629,2.45c-0.177,0.18-0.381,0.272-0.603,0.259	c-0.755-0.03-0.729-0.847-0.703-1.711c0.008-0.251,0.016-0.51,0.009-0.772c-0.011-0.412-0.108-0.704-0.281-0.844	c-0.141-0.114-0.285-0.089-0.289-0.09c-1.347,0.032-2.059,1.404-2.065,1.418c-0.029,0.058-0.098,0.085-0.159,0.059	c-0.06-0.024-0.091-0.092-0.071-0.153c0.003-0.009,0.258-0.814-0.055-1.207c-0.133-0.166-0.357-0.235-0.678-0.21	c-1.283,0.108-1.298,0.943-1.298,0.952c-0.36,2.993-2.05,4.619-2.121,4.687c-0.583,0.474-1.055,0.638-1.416,0.5	c-0.418-0.163-0.498-0.67-0.502-0.691l-0.001-3.307c0-0.081,0.088-0.14,0.16-0.12c0.627,0.177,1.282,0.054,1.801-0.339	c0.513-0.388,0.81-0.977,0.816-1.618h-1.95c-0.049,0-0.093-0.028-0.113-0.071c-0.021-0.044-0.014-0.096,0.017-0.133	c1.171-1.42,1.338-2.314,1.272-2.813c-0.061-0.452-0.311-0.635-0.321-0.643c-0.515-0.367-0.997-0.464-1.439-0.286	c-1.465,0.588-2.11,3.907-2.116,3.94c-0.012,0.059-0.063,0.102-0.123,0.102h-0.001l-2.135-0.016	c-0.288,0.011-0.365,0.088-0.386,0.121c-0.033,0.056,0,0.129,0.001,0.129c0.402,1.429,1.859,1.167,1.923,1.153	c0.008-0.001,0.016-0.002,0.023-0.002c0.028,0,0.057,0.01,0.079,0.028c0.029,0.023,0.046,0.059,0.046,0.096l0.023,4.237	c-0.001,0.02-0.058,1.015,0.586,1.707c0.414,0.445,1.029,0.675,1.828,0.682c0.014,0,0.028,0,0.042,0	c2.534,0,3.093-2.112,3.115-2.203c0.015-0.062,0.069-0.094,0.14-0.094c0.063,0.01,0.109,0.066,0.106,0.13	c-0.052,1.046,0.079,1.712,0.39,1.979c0.152,0.131,0.352,0.173,0.609,0.118c0.646-0.129,0.692-0.394,0.829-1.78	c0.035-0.357,0.077-0.782,0.141-1.288c0.314-2.515,1.631-2.435,1.697-2.439c0.062,0.005,0.11,0.055,0.115,0.116	c0.089,1.324,0.428,2.123,1.008,2.373c0.815,0.351,1.873-0.504,1.884-0.514c0.037-0.031,0.09-0.038,0.133-0.016	c0.044,0.021,0.071,0.064,0.071,0.113l-0.008,1.068c-0.007,0.876,0.395,1.669,1.047,2.071c1.41,0.869,2.793-0.444,2.851-0.502	c0.024-0.022,0.051-0.035,0.091-0.035c0.033,0.001,0.065,0.016,0.088,0.041c0.513,0.56,1.073,0.843,1.668,0.843	c0.007,0,0.015,0,0.022,0c1.096-0.013,1.953-0.982,1.962-0.992c0.023-0.027,0.058-0.043,0.094-0.043c0.001,0,0.002,0,0.002,0	c0.037,0.001,0.072,0.018,0.096,0.047c0.938,1.162,2.353,1.037,3.113,0.856c1.327-0.312,2.596-1.239,2.771-2.026	C52.482,27.782,52.357,27.603,52.296,27.557z M49.474,24.273c0.204-0.05,0.397,0.02,0.596,0.209	c0.214,0.203,0.255,0.412,0.127,0.638c-0.312,0.547-1.408,0.971-1.999,0.971c-0.026,0-0.051-0.001-0.074-0.003	C48.342,25.525,48.884,24.416,49.474,24.273z"></path><path fill="#fff" d="M32.097,32.499c0.435,0,0.801,0.117,0.865,0.139c0.262,0.089,0.402,0.372,0.313,0.634 c-0.07,0.209-0.263,0.341-0.472,0.341c-0.053,0-0.107-0.008-0.16-0.026c-0.12-0.04-0.339-0.085-0.55-0.085 c-0.153,0-0.301,0.024-0.405,0.091c-0.04,0.026-0.161,0.105-0.189,0.413c-0.061,0.669-0.012,1.067,0.147,1.219 c0.094,0.088,0.272,0.133,0.526,0.133c0.138,0,0.298-0.013,0.479-0.04c0.02-0.002,0.04-0.003,0.06-0.003 c0.256,0,0.47,0.172,0.508,0.425c0.04,0.273-0.149,0.527-0.422,0.568c-0.187,0.027-0.4,0.051-0.622,0.051 c-0.425,0-0.878-0.088-1.216-0.407c-0.521-0.492-0.523-1.305-0.457-2.035c0.06-0.655,0.382-0.993,0.642-1.162 C31.443,32.558,31.788,32.499,32.097,32.499"></path><path fill="#fff" d="M35.229,32.376c0.086,0,0.176,0.005,0.272,0.016c1.045,0.106,1.341,1.084,1.285,1.714l0.002,1.823 c0,0.276-0.224,0.5-0.5,0.5c-0.214,0-0.393-0.135-0.465-0.324c-0.335,0.138-0.704,0.225-1.052,0.225 c-0.198,0-0.39-0.028-0.562-0.09c-0.395-0.143-0.646-0.453-0.692-0.854c-0.037-0.329,0.059-0.638,0.276-0.893 c0.474-0.555,1.435-0.731,1.961-0.787c-0.044-0.155-0.139-0.299-0.356-0.321c-0.059-0.006-0.111-0.008-0.157-0.008 c-0.239,0-0.326,0.066-0.34,0.094c-0.04,0.238-0.237,0.395-0.471,0.395c-0.033,0-0.067-0.003-0.102-0.01 c-0.272-0.047-0.449-0.327-0.401-0.6C33.985,32.938,34.327,32.376,35.229,32.376 M34.75,35.328c0.28,0,0.729-0.11,1.039-0.329 v-0.286c-0.474,0.062-1.044,0.207-1.234,0.43c-0.042,0.05-0.048,0.084-0.042,0.13C34.549,35.31,34.635,35.328,34.75,35.328"></path><path fill="#fff" d="M37.701,30.968c0.276,0,0.5,0.224,0.5,0.5v4.404c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5 v-4.404C37.201,31.191,37.424,30.968,37.701,30.968"></path><path fill="#fff" d="M39.138,30.968c0.276,0,0.5,0.224,0.5,0.5v4.404c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5 v-4.404C38.638,31.191,38.861,30.968,39.138,30.968"></path><path fill="#fff" d="M41.943,32.282c0.003,0,0.007,0,0.01,0c0.853,0.033,1.546,0.789,1.546,1.686v0.309 c0,0.276-0.224,0.5-0.5,0.5h-1.917c0.015,0.028,0.03,0.056,0.049,0.082c0.166,0.243,0.479,0.368,0.887,0.368 c0.224,0,0.476-0.038,0.747-0.114c0.048-0.014,0.096-0.021,0.142-0.021c0.217,0,0.413,0.146,0.476,0.364 c0.076,0.266-0.077,0.542-0.343,0.618c-0.358,0.103-0.701,0.153-1.02,0.153c-0.747,0-1.357-0.277-1.717-0.805 c-0.467-0.685-0.393-1.62,0.19-2.383C40.99,32.394,41.556,32.282,41.943,32.282 M41.2,33.776h1.273 c-0.074-0.273-0.3-0.484-0.559-0.494c-0.019-0.003-0.039-0.004-0.06-0.004c-0.147,0-0.339,0.073-0.566,0.368 C41.257,33.689,41.227,33.732,41.2,33.776"></path><path fill="#fff" d="M44.34,32.364c0.251,0,0.449,0.187,0.485,0.427c0.161-0.041,0.337-0.064,0.514-0.064 c0.375,0,0.754,0.101,1.006,0.342c0.199,0.19,0.207,0.507,0.016,0.707c-0.098,0.103-0.229,0.154-0.36,0.154 c-0.124,0-0.248-0.046-0.345-0.138c-0.049-0.04-0.191-0.075-0.35-0.075c-0.109,0-0.225,0.017-0.325,0.059 c-0.106,0.046-0.109,0.085-0.11,0.102c-0.003,0.041-0.018,0.077-0.03,0.115v1.863c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5 v-2.992C43.84,32.588,44.063,32.364,44.34,32.364"></path>
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
