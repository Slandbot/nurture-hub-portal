
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  MessageSquare, 
  Calendar, 
  FileText
} from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-brand-purple text-white section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white mx-auto">
                <img 
                  src="https://www.virtuebaby.in/images/img2.jpg" 
                  alt="Dr. Nitika" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Dr. Nitika</h1>
              <p className="text-xl mb-4">Prenatal Care Specialist & Parenting Expert</p>
              <p className="mb-6 max-w-2xl">
                With over a decade of experience supporting families through pregnancy and early parenthood, 
                Dr. Nitika combines medical expertise with compassionate care to guide parents on their journey.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button variant="secondary" className="text-primary">
                  Book Appointment
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Tabs */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="about" className="text-sm md:text-base">
                About
              </TabsTrigger>
              <TabsTrigger value="education" className="text-sm md:text-base">
                Education & Experience
              </TabsTrigger>
              <TabsTrigger value="expertise" className="text-sm md:text-base">
                Areas of Expertise
              </TabsTrigger>
              <TabsTrigger value="publications" className="text-sm md:text-base">
                Publications
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">About Dr. Nitika</h2>
                <p className="mb-4">
                  Dr. Nitika is a dedicated prenatal care specialist and parenting expert with a passion for 
                  supporting families through the transformative journey of pregnancy and early parenthood.
                </p>
                <p className="mb-4">
                  After completing her medical education with specialization in obstetrics and gynecology, 
                  Dr. Nitika noticed a gap in holistic support for expectant parents. This inspired her to 
                  found Nurture Hub, a comprehensive platform that combines medical expertise with emotional 
                  and practical support.
                </p>
                <p>
                  Her approach is rooted in the philosophy that every parent deserves personalized care, 
                  evidence-based information, and a supportive community. Over the years, she has helped 
                  thousands of families navigate their parenthood journey with confidence and joy.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">My Mission</h3>
                  <p className="italic border-l-4 border-primary pl-4 py-2">
                    "My mission is to empower parents with knowledge, support, and community, 
                    helping them navigate their unique journey with confidence and joy."
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="education">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Education & Experience</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-brand-lavender/20 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Educational Background</h3>
                      <ul className="mt-3 space-y-3">
                        <li className="flex flex-col">
                          <span className="font-medium">MD in Obstetrics & Gynecology</span>
                          <span className="text-sm text-muted-foreground">All India Institute of Medical Sciences, 2010-2014</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-medium">MBBS</span>
                          <span className="text-sm text-muted-foreground">Delhi University Medical College, 2004-2009</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-medium">Certification in Maternal & Child Nutrition</span>
                          <span className="text-sm text-muted-foreground">Indian Council of Medical Research, 2015</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-brand-lavender/20 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Professional Experience</h3>
                      <ul className="mt-3 space-y-3">
                        <li className="flex flex-col">
                          <span className="font-medium">Founder & Lead Consultant</span>
                          <span className="text-sm text-muted-foreground">Nurture Hub, 2016-Present</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-medium">Obstetrics Specialist</span>
                          <span className="text-sm text-muted-foreground">Apollo Hospitals, New Delhi, 2014-2016</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-medium">Research Fellow</span>
                          <span className="text-sm text-muted-foreground">Maternal Health Research Institute, 2013-2014</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="expertise">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Prenatal Care</CardTitle>
                    <CardDescription>Comprehensive guidance throughout pregnancy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>High-risk pregnancy management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Nutritional guidance for optimal fetal development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Mental wellness during pregnancy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Preparation for childbirth</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Postpartum Support</CardTitle>
                    <CardDescription>Guidance for the fourth trimester and beyond</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Breastfeeding support and education</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Postpartum recovery and wellness</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Newborn care basics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Postpartum mental health support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Child Development</CardTitle>
                    <CardDescription>Supporting optimal growth in early years</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Developmental milestones monitoring</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Early childhood nutrition</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Sleep training and management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Healthy attachment and bonding</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Holistic Parenting</CardTitle>
                    <CardDescription>Balanced approach to family wellness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Positive discipline techniques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Work-life balance for parents</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Self-care strategies for parents</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Family nutrition and wellness</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="publications">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Publications & Media</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-brand-lavender/20 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Books</h3>
                      <ul className="mt-3 space-y-3">
                        <li className="flex flex-col">
                          <span className="font-medium">The Mindful Pregnancy: A Comprehensive Guide</span>
                          <span className="text-sm text-muted-foreground">Published 2020</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-medium">Your Baby's First Year: Month by Month Development</span>
                          <span className="text-sm text-muted-foreground">Published 2018</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-medium">Nurturing Nutrition: Feeding Your Family Right</span>
                          <span className="text-sm text-muted-foreground">Published 2019</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-brand-lavender/20 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Articles & Research</h3>
                      <ul className="mt-3 space-y-3">
                        <li className="flex flex-col">
                          <span className="font-medium">Impact of Maternal Nutrition on Fetal Brain Development</span>
                          <span className="text-sm text-muted-foreground">Journal of Prenatal Medicine, 2021</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-medium">Sleep Patterns in Infants: A Longitudinal Study</span>
                          <span className="text-sm text-muted-foreground">Pediatric Research Journal, 2019</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-medium">Postpartum Depression: Early Detection and Intervention</span>
                          <span className="text-sm text-muted-foreground">Mental Health Today, 2020</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-brand-lavender/20 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Media Appearances</h3>
                      <ul className="mt-3 space-y-3">
                        <li className="flex flex-col">
                          <span className="font-medium">Regular Contributor</span>
                          <span className="text-sm text-muted-foreground">Parenting Today Magazine</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-medium">Featured Expert</span>
                          <span className="text-sm text-muted-foreground">Pregnancy & Beyond Podcast</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-medium">Health Expert</span>
                          <span className="text-sm text-muted-foreground">Morning Wellness TV Show</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-brand-mint/20 section-padding">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events with Dr. Nitika</h2>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover-scale">
                <CardHeader className="pb-2">
                  <div className="text-sm text-primary font-medium mb-1">
                    June 15, 2023 • 6:00 PM IST
                  </div>
                  <CardTitle>Pregnancy Nutrition Workshop</CardTitle>
                  <CardDescription>Virtual Event</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Join Dr. Nitika for an interactive workshop on optimal nutrition during pregnancy for you and your baby.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <section className="bg-brand-purple text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Book a Consultation with Dr. Nitika</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a personalized one-on-one consultation to discuss your specific needs and receive expert guidance.
          </p>
          <Button variant="secondary" size="lg" className="text-primary">
            Book Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
