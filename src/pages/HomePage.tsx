import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
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
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const allVideos = [
    {
      src: "https://www.youtube.com/embed/qrekEYUOIdQ?si=Ox5ygLxonXVKKIKp",
      title: "Pregnancy Wellness Tips",
      description: "Learn essential tips for a healthy pregnancy with Dr. Nitika"
    },
    {
      src: "https://www.youtube.com/embed/pTKzeLL3g4A?si=Tjm0ouUAI0lTPXwS",
      title: "Parenting Guide",
      description: "Expert guidance on early parenting challenges"
    },
    {
      src: "https://www.youtube.com/embed/0K3WgDA4CGk?si=87rdfiYgL1qs0YHS",
      title: "Baby Care Essentials",
      description: "Essential tips for caring for your newborn baby"
    },
    {
      src: "https://www.youtube.com/embed/BxHk447kbL4?si=bzM49YRbjconp8YI",
      title: "Breastfeeding Guide",
      description: "Complete guide for breastfeeding mothers"
    },
    {
      src: "https://www.youtube.com/embed/vfuZnJ5Jkik?si=a-BLqf_kAkRTQKj6",
      title: "Newborn Care Tips",
      description: "Essential guidance for caring for your newborn"
    },
    {
      src: "https://www.youtube.com/embed/FsTRcAXR-zA?si=xx-ZrcgsCwisZCqa",
      title: "Baby Development Guide",
      description: "Understanding your baby's developmental milestones"
    },
    {
      src: "https://www.youtube.com/embed/hnFpam2u5Xc?si=TKIUhk6l5D6Sn-vZ",
      title: "Baby Sleep Guide",
      description: "Tips for better sleep patterns for your baby"
    },
    {
      src: "https://www.youtube.com/embed/JrK1m4_FFBY?si=MKiO__tM2ZZthfHC",
      title: "Pregnancy Diet Guide",
      description: "Essential nutrition tips during pregnancy"
    },
    {
      src: "https://www.youtube.com/embed/Y07fjkn7_LY?si=KGKTGIfWhoXGSz1B",
      title: "Prenatal Exercise Guide",
      description: "Safe exercises during pregnancy"
    }
  ];

  const displayedVideos = isAuthenticated ? allVideos : allVideos.slice(0, 3);

  const handleViewAllVideos = () => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nurture-primary to-nurture-accent section-padding">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-nurture-secondary mb-4">
              Nurturing Parenthood Journey With Dr. Nitika
            </h1>
            <p className="text-lg mb-6">
              Expert guidance, resources, and community support for your pregnancy and parenting journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-nurture-highlight hover:bg-nurture-highlight/90 text-white hover-scale">
                <Link to="/about">About Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-nurture-secondary text-nurture-secondary hover:bg-nurture-secondary/10 hover-scale">
                <Link to="/profile">Meet Dr. Nitika</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="bg-white p-2 rounded-lg shadow-lg transform rotate-3">
              <img
                src="/images/family.jpg"
                alt="Dr. Nitika"
                className="rounded max-w-full h-auto shadow-lg"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-nurture-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-nurture-secondary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-nurture-accent">
              <CardContent className="pt-6">
                <div className="rounded-full bg-nurture-primary p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Calendar className="h-7 w-7 text-nurture-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-nurture-secondary">Events & Workshops</h3>
                <p className="text-muted-foreground mb-4">
                  Join our in-person and virtual events with expert guidance on pregnancy and parenting.
                </p>
                <Link to="/events" className="text-nurture-highlight font-medium flex items-center hover:text-nurture-secondary transition-colors">
                  View Calendar <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-nurture-accent">
              <CardContent className="pt-6">
                <div className="rounded-full bg-nurture-primary p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-7 w-7 text-nurture-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-nurture-secondary">Prenatal Store</h3>
                <p className="text-muted-foreground mb-4">
                  Shop our curated collection of prenatal vitamins, books, and essentials for your journey.
                </p>
                <Link to="/shop" className="text-nurture-highlight font-medium flex items-center hover:text-nurture-secondary transition-colors">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-nurture-accent">
              <CardContent className="pt-6">
                <div className="rounded-full bg-nurture-primary p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <BookOpen className="h-7 w-7 text-nurture-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-nurture-secondary">eBooks & Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Access our library of expert-written eBooks and resources on pregnancy and early parenthood.
                </p>
                <Link to="/dashboard" className="text-nurture-highlight font-medium flex items-center hover:text-nurture-secondary transition-colors">
                  Browse Library <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-nurture-accent/10 section-padding">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-2/2 mb-8 md:mb-0">
            <div className="bg-white p-2 rounded-lg shadow-lg transform -rotate-2">
              <img
                src="https://www.virtuebaby.in/images/img2.jpg" // Replace with your image path
                alt="Dr. Nitika"
                className="rounded"
              />
            </div>
          </div>
          <div className="md:w-3/5 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-nurture-secondary">About Dr. Nitika</h2>
            <p className="text-lg mb-6">
              Dr. Nitika is a renowned expert in prenatal care with over 10 years of experience helping families navigate their parenthood journey.
            </p>
            <p className="mb-6">
              Her holistic approach combines medical expertise with compassionate care, ensuring that every parent receives personalized guidance throughout their journey.
            </p>
            <Button asChild className="bg-nurture-highlight hover:bg-nurture-highlight/90 text-white">
              <Link to="/profile">Read Full Profile</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="section-padding bg-nurture-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-nurture-secondary">Resources For You</h2>
          
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="videos" className="text-sm md:text-base text-nurture-secondary">
                <Video className="h-4 w-4 mr-2 hidden sm:inline" /> Videos
              </TabsTrigger>
              <TabsTrigger value="community" className="text-sm md:text-base text-nurture-secondary">
                <Users className="h-4 w-4 mr-2 hidden sm:inline" /> Community
              </TabsTrigger>
              <TabsTrigger value="tools" className="text-sm md:text-base text-nurture-secondary">
                <Calculator className="h-4 w-4 mr-2 hidden sm:inline" /> Tools
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos" className="space-y-4">              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedVideos.map((video, index) => (
                  <Card key={index} className="overflow-hidden hover-scale border-nurture-accent">
                    <div className="aspect-video bg-muted relative">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src={video.src}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="absolute inset-0"
                      /></div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1 text-nurture-secondary">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {video.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>              {!isAuthenticated && (
                <div className="text-center mt-8">
                  <Button 
                    variant="outline" 
                    className="border-nurture-secondary text-nurture-secondary hover:bg-nurture-secondary/10"
                    onClick={handleViewAllVideos}
                  >
                    View All Videos
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="community">
              <div className="bg-secondary/50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium mb-4 text-nurture-secondary">Join Our Community</h3>
                <p className="mb-6">
                  Connect with other parents, share experiences, and get support from our community of parents and experts.
                </p>
                <Button className="bg-nurture-highlight hover:bg-nurture-highlight/90 text-white">Join Community Forum</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-nurture-accent">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2 text-nurture-secondary">Due Date Calculator</h3>
                    <p className="text-muted-foreground mb-4">
                      Calculate your expected due date based on your last period.
                    </p>
                    <Button className="bg-nurture-highlight hover:bg-nurture-highlight/90 text-white">Calculate Now</Button>
                  </CardContent>
                </Card>
                <Card className="border-nurture-accent">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2 text-nurture-secondary">Ovulation Tracker</h3>
                    <p className="text-muted-foreground mb-4">
                      Track your fertile window to improve chances of conception.
                    </p>
                    <Button className="bg-nurture-highlight hover:bg-nurture-highlight/90 text-white">Start Tracking</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-nurture-primary/10 section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-nurture-secondary">Ready to Begin Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of parents and gain access to expert resources, events, and personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-nurture-highlight hover:bg-nurture-highlight/90 text-white">
              <Link to="/login">Create Account</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-nurture-secondary text-nurture-secondary hover:bg-nurture-secondary/10">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
