import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./hooks/use-theme";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";
import { preloadCriticalImages, preloadSecondaryImages, initializeCacheCleanup } from "@/lib/preloader";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const AppointmentPage = lazy(() => import("./pages/AppointmentPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AuthRequired = lazy(() => import("./components/AuthRequired"));

// Loading component
const PageLoading = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  useEffect(() => {
    // Preload critical images immediately
    preloadCriticalImages();

    // Preload secondary images when idle
    preloadSecondaryImages();

    // Initialize cache cleanup
    initializeCacheCleanup();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="light">
          <BrowserRouter>
            <ErrorBoundary>
              <AuthProvider>
                <Toaster />
                <Sonner />
                <Routes>
                  <Route path="/login" element={
                    <Suspense fallback={<PageLoading />}>
                      <LoginPage />
                    </Suspense>
                  } />
                  <Route path="/" element={<Layout />}>
                    <Route index element={
                      <Suspense fallback={<PageLoading />}>
                        <HomePage />
                      </Suspense>
                    } />
                    <Route path="about" element={
                      <Suspense fallback={<PageLoading />}>
                        <AboutPage />
                      </Suspense>
                    } />
                    <Route path="profile" element={
                      <Suspense fallback={<PageLoading />}>
                        <ProfilePage />
                      </Suspense>
                    } />
                    <Route path="events" element={
                      <Suspense fallback={<PageLoading />}>
                        <EventsPage />
                      </Suspense>
                    } />
                    <Route path="shop" element={
                      <Suspense fallback={<PageLoading />}>
                        <ShopPage />
                      </Suspense>
                    } />
                    
                    {/* Protected routes */}
                    <Route element={<ProtectedRoute />}>
                      <Route path="dashboard" element={
                        <Suspense fallback={<PageLoading />}>
                          <DashboardPage />
                        </Suspense>
                      } />
                      <Route path="appointments" element={
                        <Suspense fallback={<PageLoading />}>
                          <AppointmentPage />
                        </Suspense>
                      } />
                    </Route>
                    
                    {/* Auth Required fallback */}
                    <Route path="auth-required" element={
                      <Suspense fallback={<PageLoading />}>
                        <div className="pt-20 pb-10 min-h-screen baby-pattern">
                          <AuthRequired message="Please log in to access this feature" showLogin={true} />
                        </div>
                      </Suspense>
                    } />
                  </Route>
                  <Route path="*" element={
                    <Suspense fallback={<PageLoading />}>
                      <NotFound />
                    </Suspense>
                  } />
                </Routes>
              </AuthProvider>
            </ErrorBoundary>
          </BrowserRouter>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
