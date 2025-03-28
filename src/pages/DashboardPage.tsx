
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronRight,
  Play,
  ShoppingBag,
  User,
  Video,
  FileText,
  Baby,
  Activity,
} from "lucide-react";
import { format } from "date-fns";

const DashboardPage = () => {
  const [progress, setProgress] = useState(67);

  return (
    <div className="pt-16">
      {/* User Profile Summary */}
      <section className="bg-brand-purple text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-24 w-24 border-4 border-white">
              <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold">Welcome, Jane Doe</h1>
              <p className="opacity-90 mb-3">Parent of a 6-month-old</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
                  Due Date: April 15, 2023
                </Badge>
                <Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
                  Baby: 6 months
                </Badge>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <Button variant="secondary" className="text-primary">
                <User className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="timeline" className="space-y-6">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-6">
              <TabsTrigger value="timeline">My Timeline</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="events">My Events</TabsTrigger>
              <TabsTrigger value="orders">My Orders</TabsTrigger>
            </TabsList>
            
            {/* Timeline Tab */}
            <TabsContent value="timeline" className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Development Tracking */}
                <Card className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Baby className="mr-2 h-5 w-5 text-primary" />
                      Baby Development Tracker
                    </CardTitle>
                    <CardDescription>
                      Track your baby's milestones and development
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Month 6 Progress</span>
                          <span className="text-sm font-medium">{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">Physical Development</h3>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">✓</div>
                              <span>Beginning to sit without support</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">✓</div>
                              <span>Rolling from back to stomach</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-muted border border-input flex items-center justify-center mr-2 mt-0.5">□</div>
                              <span>Supporting weight when standing</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">Cognitive Development</h3>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">✓</div>
                              <span>Exploring objects with mouth</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 mt-0.5">✓</div>
                              <span>Responding to own name</span>
                            </li>
                            <li className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-muted border border-input flex items-center justify-center mr-2 mt-0.5">□</div>
                              <span>Finding partially hidden objects</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Update Milestones
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Daily Tips */}
                <Card className="md:w-1/3">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="mr-2 h-5 w-5 text-primary" />
                      Daily Tips
                    </CardTitle>
                    <CardDescription>
                      Personalized tips for your baby's age
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-brand-lavender/10 p-4 rounded-lg">
                      <h3 className="font-semibold mb-1">Introducing Solid Foods</h3>
                      <p className="text-sm text-muted-foreground">
                        At 6 months, your baby is ready to explore solid foods. Start with single-ingredient purees like rice cereal or mashed banana.
                      </p>
                    </div>
                    <div className="bg-brand-mint/10 p-4 rounded-lg">
                      <h3 className="font-semibold mb-1">Sleep Routine Tips</h3>
                      <p className="text-sm text-muted-foreground">
                        Establish a consistent bedtime routine with bath, story, and lullaby to help your baby sleep better.
                      </p>
                    </div>
                    <div className="bg-brand-blue/10 p-4 rounded-lg">
                      <h3 className="font-semibold mb-1">Tummy Time</h3>
                      <p className="text-sm text-muted-foreground">
                        Continue tummy time for 3-5 minutes several times a day to strengthen neck muscles and prevent flat head syndrome.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full" asChild>
                      <Link to="#tips">View All Tips</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>
                    Events and appointments scheduled for you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-lavender/20 flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Baby's First Foods Workshop</h3>
                          <p className="text-sm text-muted-foreground">
                            {format(new Date(2023, 5, 15), "MMMM d, yyyy")} • 6:00 PM
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-lavender/20 flex items-center justify-center">
                          <VideoIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Sleep Training Webinar</h3>
                          <p className="text-sm text-muted-foreground">
                            {format(new Date(2023, 5, 20), "MMMM d, yyyy")} • 7:30 PM
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link to="/events">View All Events</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Book Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-primary" />
                    Book Recommendations
                  </CardTitle>
                  <CardDescription>
                    Curated books for your current stage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="group cursor-pointer">
                        <div className="aspect-[3/4] mb-2 overflow-hidden rounded-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f" 
                            alt="Book cover"
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h3 className="font-medium">Baby Sleep Solutions</h3>
                        <p className="text-sm text-muted-foreground">Dr. Nitika</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link to="/shop">Browse All Books</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Video className="mr-2 h-5 w-5 text-primary" />
                      Video Resources
                    </CardTitle>
                    <CardDescription>
                      Educational videos for your parenting journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="group cursor-pointer">
                          <div className="flex gap-3">
                            <div className="relative w-24 h-16 flex-shrink-0 rounded-md overflow-hidden">
                              <img 
                                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                                alt="Video thumbnail" 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20">
                                <Play className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div>
                              <h3 className="font-medium group-hover:text-primary transition-colors">
                                Baby-led Weaning: A Practical Guide
                              </h3>
                              <p className="text-xs text-muted-foreground">15:30 mins</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full">
                      <Link to="#videos">Browse All Videos</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-primary" />
                      eBooks Library
                    </CardTitle>
                    <CardDescription>
                      Educational eBooks and guides
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="p-3 border rounded-lg flex justify-between items-center group cursor-pointer hover:bg-muted/50">
                          <div className="flex items-center gap-3">
                            <BookOpen className="h-5 w-5 text-primary" />
                            <div>
                              <h3 className="font-medium group-hover:text-primary transition-colors">
                                The Complete Guide to Baby's First Year
                              </h3>
                              <p className="text-xs text-muted-foreground">PDF • 45 pages</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full">
                      <Link to="#ebooks">Browse Library</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="mr-2 h-5 w-5 text-primary" />
                    Parenting Tools
                  </CardTitle>
                  <CardDescription>
                    Calculators and trackers for your journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-brand-lavender/20 flex items-center justify-center mb-3">
                        <span className="text-primary font-semibold">BMI</span>
                      </div>
                      <h3 className="font-medium">BMI Calculator</h3>
                      <p className="text-sm text-muted-foreground">
                        Track your BMI during and after pregnancy
                      </p>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-brand-lavender/20 flex items-center justify-center mb-3">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-medium">Due Date Calculator</h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate your expected delivery date
                      </p>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-brand-lavender/20 flex items-center justify-center mb-3">
                        <Baby className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-medium">Baby Growth Tracker</h3>
                      <p className="text-sm text-muted-foreground">
                        Monitor your baby's height and weight
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Events Tab */}
            <TabsContent value="events">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    My Registered Events
                  </CardTitle>
                  <CardDescription>
                    Events and workshops you've signed up for
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2].map((item) => (
                      <div key={item} className="border rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 aspect-video md:aspect-square">
                            <img 
                              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                              alt="Event" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4 md:w-3/4 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center text-sm text-primary font-medium mb-1">
                                <Calendar className="h-3 w-3 mr-1" />
                                {format(new Date(2023, 5, 15), "MMMM d, yyyy")} • 6:00 PM
                              </div>
                              <h3 className="font-semibold text-lg mb-2">Baby's First Foods Workshop</h3>
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                Learn when and how to introduce solid foods to your baby with demonstrations and tastings.
                              </p>
                              <div className="flex items-center mb-2">
                                <VideoIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span className="text-sm">Virtual Event</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center mt-3">
                              <Badge>Registered</Badge>
                              <Button variant="outline" size="sm">
                                Join Event
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link to="/events">Browse More Events</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingBag className="mr-2 h-5 w-5 text-primary" />
                    My Orders
                  </CardTitle>
                  <CardDescription>
                    Track and manage your product orders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2].map((item) => (
                      <div key={item} className="border rounded-lg overflow-hidden">
                        <div className="bg-muted/30 p-3 flex justify-between">
                          <div>
                            <span className="text-sm font-medium">Order #10045{item}</span>
                            <span className="text-xs text-muted-foreground ml-3">
                              {format(new Date(2023, 4, item * 10), "MMMM d, yyyy")}
                            </span>
                          </div>
                          <Badge variant={item === 1 ? "default" : "outline"}>
                            {item === 1 ? "Processing" : "Delivered"}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-muted rounded">
                              <img 
                                src="https://images.unsplash.com/photo-1584473457333-8c9f4d4b9026" 
                                alt="Product" 
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">Prenatal Vitamins Premium</h3>
                              <p className="text-sm text-muted-foreground">
                                Qty: 1 • ₹1,500
                              </p>
                            </div>
                          </div>
                          {item === 1 && (
                            <div className="mt-3 pt-3 border-t flex justify-between items-center">
                              <div className="text-sm">
                                <span className="text-muted-foreground">Expected Delivery:</span>{" "}
                                <span className="font-medium">May 25, 2023</span>
                              </div>
                              <Button variant="outline" size="sm">
                                Track Order
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link to="/shop">Shop More Products</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

// Create a VideoIcon component to avoid naming conflict with Video from lucide-react
const VideoIcon = Video;

export default DashboardPage;
