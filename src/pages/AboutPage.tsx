import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Award, Heart, Users, BookOpen, CalendarDays, ShieldCheck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-brand-lavender/20 section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nurture Hub</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Nurture Hub is a comprehensive platform dedicated to supporting expectant and new parents through their journey with expert guidance, resources, and community.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Nurture Hub was founded by Dr. Nitika with a vision to create a supportive ecosystem for parents. Having worked with thousands of families, Dr. Nitika recognized the need for a comprehensive platform that combines medical expertise with practical resources and community support.
              </p>
              <p className="mb-4">
                What began as a small practice has evolved into a holistic platform serving parents worldwide, providing them with the tools, knowledge, and support they need to thrive in their parenting journey.
              </p>
              <p>
                Our approach is rooted in science, compassion, and the understanding that every parent's journey is unique and deserves personalized support.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                    alt="Nurture Hub Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Nurture Hub Office" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                    alt="Nurture Hub Workshop" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                    alt="Nurture Hub Consultation" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-brand-mint/20 section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80">
              <CardContent className="pt-6">
                <div className="rounded-full bg-brand-lavender/20 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
                <p className="text-muted-foreground">
                  We believe in treating every parent with kindness, understanding, and personalized attention.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80">
              <CardContent className="pt-6">
                <div className="rounded-full bg-brand-lavender/20 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Evidence-Based</h3>
                <p className="text-muted-foreground">
                  Our recommendations and resources are grounded in the latest scientific research and medical best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80">
              <CardContent className="pt-6">
                <div className="rounded-full bg-brand-lavender/20 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-muted-foreground">
                  We foster a supportive community where parents can connect, share experiences, and grow together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-brand-lavender/20 p-3 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Access to Dr. Nitika's expertise through consultations, webinars, and personalized advice for your unique journey.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-brand-lavender/20 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                <p className="text-muted-foreground">
                  Comprehensive library of articles, eBooks, videos, and courses covering all aspects of pregnancy and parenting.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-brand-lavender/20 p-3 rounded-full">
                <CalendarDays className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Events & Workshops</h3>
                <p className="text-muted-foreground">
                  Regular in-person and virtual events where you can learn, connect, and grow in your parenting journey.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-brand-lavender/20 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Forums</h3>
                <p className="text-muted-foreground">
                  Connect with other parents, share experiences, ask questions, and find support in our moderated forums.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-brand-blue/20 section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <img 
                  src="https://www.virtuebaby.in/images/img2.jpg" 
                  alt="Dr. Nitika" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h3 className="text-xl font-bold mt-4">Dr. Nitika</h3>
                <p className="text-primary mb-2">Founder & Lead Consultant</p>
                <p className="text-sm text-muted-foreground mb-4">
                  With over 10 years of experience in prenatal care and parenting support, Dr. Nitika has helped thousands of families navigate their parenthood journey with expertise in pregnancy wellness and child development.
                </p>
                <Button asChild variant="outline">
                  <Link to="/profile/dr-nitika">View Full Profile</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-6">
                <img 
                  src="https://www.virtuebaby.in/images/img5.jpg" 
                  alt="Mr. Kirit Sobti" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h3 className="text-xl font-bold mt-4">Mr. Kirit Sobti</h3>
                <p className="text-primary mb-2">Lead Consultant</p>
                <p className="text-sm text-muted-foreground mb-4">
                  A seasoned consultant specializing in early childhood development and parental guidance, Mr. Kirit brings valuable expertise in helping families create nurturing environments for their children.
                </p>
                <Button asChild variant="outline">
                  <Link to="/profile/kirit-sobti">View Full Profile</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-purple text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Begin your journey with Nurture Hub today and gain access to expert resources, support, and a community of like-minded parents.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-primary">
            <Link to="/login">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
