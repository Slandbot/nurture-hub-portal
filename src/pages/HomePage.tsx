
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  ShoppingBag, 
  BookOpen, 
  Video, 
  Users, 
  Calculator,
  ArrowRight
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-lavender/30 to-brand-mint/40 section-padding">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Nurturing Parenthood Journey With Dr. Nitika
            </h1>
            <p className="text-lg mb-6">
              Expert guidance, resources, and community support for your pregnancy and parenting journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="hover-scale">
                <Link to="/about">About Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="hover-scale">
                <Link to="/profile">Meet Dr. Nitika</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="bg-white p-2 rounded-lg shadow-lg transform rotate-3">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Dr. Nitika"
                className="rounded max-w-full h-auto shadow-lg"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-brand-lavender/20 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Calendar className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Events & Workshops</h3>
                <p className="text-muted-foreground mb-4">
                  Join our in-person and virtual events with expert guidance on pregnancy and parenting.
                </p>
                <Link to="/events" className="text-primary font-medium flex items-center">
                  View Calendar <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-brand-lavender/20 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prenatal Store</h3>
                <p className="text-muted-foreground mb-4">
                  Shop our curated collection of prenatal vitamins, books, and essentials for your journey.
                </p>
                <Link to="/shop" className="text-primary font-medium flex items-center">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-brand-lavender/20 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">eBooks & Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Access our library of expert-written eBooks and resources on pregnancy and early parenthood.
                </p>
                <Link to="/dashboard" className="text-primary font-medium flex items-center">
                  Browse Library <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-brand-mint/30 section-padding">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-8 md:mb-0">
            <div className="bg-white p-2 rounded-lg shadow-lg transform -rotate-2">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                alt="Dr. Nitika"
                className="rounded"
              />
            </div>
          </div>
          <div className="md:w-3/5 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Dr. Nitika</h2>
            <p className="text-lg mb-6">
              Dr. Nitika is a renowned expert in prenatal care with over 10 years of experience helping families navigate their parenthood journey.
            </p>
            <p className="mb-6">
              Her holistic approach combines medical expertise with compassionate care, ensuring that every parent receives personalized guidance throughout their journey.
            </p>
            <Button asChild>
              <Link to="/profile">Read Full Profile</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resources For You</h2>
          
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="videos" className="text-sm md:text-base">
                <Video className="h-4 w-4 mr-2 hidden sm:inline" /> Videos
              </TabsTrigger>
              <TabsTrigger value="community" className="text-sm md:text-base">
                <Users className="h-4 w-4 mr-2 hidden sm:inline" /> Community
              </TabsTrigger>
              <TabsTrigger value="tools" className="text-sm md:text-base">
                <Calculator className="h-4 w-4 mr-2 hidden sm:inline" /> Tools
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="overflow-hidden hover-scale">
                    <div className="aspect-video bg-muted relative">
                      <img 
                        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                        alt="Video thumbnail" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-primary border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">Pregnancy Wellness Tips</h3>
                      <p className="text-sm text-muted-foreground">
                        Learn essential tips for a healthy pregnancy with Dr. Nitika
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link to="/dashboard">View All Videos</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="community">
              <div className="bg-secondary/50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium mb-4">Join Our Community</h3>
                <p className="mb-6">
                  Connect with other parents, share experiences, and get support from our community of parents and experts.
                </p>
                <Button>Join Community Forum</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Due Date Calculator</h3>
                    <p className="text-muted-foreground mb-4">
                      Calculate your expected due date based on your last period.
                    </p>
                    <Button>Calculate Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Ovulation Tracker</h3>
                    <p className="text-muted-foreground mb-4">
                      Track your fertile window to improve chances of conception.
                    </p>
                    <Button>Start Tracking</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-lavender/20 section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of parents and gain access to expert resources, events, and personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/login">Create Account</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
