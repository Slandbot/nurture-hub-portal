
import { useState } from "react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

// Event type definition
type Event = {
  id: number;
  title: string;
  date: Date;
  endDate?: Date;
  location: string;
  description: string;
  category: "webinar" | "workshop" | "seminar" | "conference";
  image: string;
  isPremium: boolean;
  price?: number;
  availableSeats?: number;
};

const EventsPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

  // Mock events data
  const events: Event[] = [
    {
      id: 1,
      title: "Prenatal Nutrition Masterclass",
      date: new Date(2023, 10, 15, 18, 0),
      location: "Online Webinar",
      description: "Learn about essential nutrients needed during pregnancy for optimal maternal and fetal health with Dr. Nitika.",
      category: "webinar",
      image: "https://images.unsplash.com/photo-1569398034126-476b0d96e2d1",
      isPremium: false,
    },
    {
      id: 2,
      title: "Natural Childbirth Workshop",
      date: new Date(2023, 10, 20, 10, 0),
      endDate: new Date(2023, 10, 20, 16, 0),
      location: "Delhi Maternity Center",
      description: "A comprehensive workshop on natural childbirth techniques, breathing exercises, and labor positions.",
      category: "workshop",
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed",
      isPremium: true,
      price: 1200,
      availableSeats: 15,
    },
    {
      id: 3,
      title: "Postpartum Recovery Seminar",
      date: new Date(2023, 10, 25, 14, 0),
      location: "Nurture Hub Center, Mumbai",
      description: "Essential information for new mothers on physical recovery, emotional wellbeing, and newborn care.",
      category: "seminar",
      image: "https://images.unsplash.com/photo-1584187465267-e733bc180ad0",
      isPremium: false,
    },
    {
      id: 4,
      title: "Annual Parenting Conference",
      date: new Date(2023, 11, 5, 9, 0),
      endDate: new Date(2023, 11, 6, 18, 0),
      location: "The Leela Palace, Bangalore",
      description: "Two-day conference featuring expert panels, networking opportunities, and the latest research in parenting.",
      category: "conference",
      image: "https://images.unsplash.com/photo-1591522810850-58128c5fb089",
      isPremium: true,
      price: 3500,
      availableSeats: 200,
    },
    {
      id: 5,
      title: "Infant Sleep Patterns Webinar",
      date: new Date(2023, 11, 12, 19, 0),
      location: "Online Webinar",
      description: "Understanding infant sleep cycles and strategies for helping your baby sleep better through the night.",
      category: "webinar",
      image: "https://images.unsplash.com/photo-1590886175640-8c6264177505",
      isPremium: false,
    },
    {
      id: 6,
      title: "Breastfeeding Support Workshop",
      date: new Date(2023, 11, 18, 11, 0),
      location: "Motherhood Hospital, Chennai",
      description: "Hands-on workshop for new mothers to learn proper breastfeeding techniques and address common challenges.",
      category: "workshop",
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73",
      isPremium: true,
      price: 800,
      availableSeats: 20,
    },
  ];

  // Filter events based on selected date
  const filteredEvents = date
    ? events.filter(
        (event) =>
          event.date.getDate() === date.getDate() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getFullYear() === date.getFullYear()
      )
    : events;

  // Filter events by category
  const filterEventsByCategory = (category: string) => {
    if (category === "all") return events;
    return events.filter((event) => event.category === category);
  };

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  // Register for event
  const registerForEvent = (eventId: number) => {
    setRegisteredEvents([...registeredEvents, eventId]);
    toast.success("Successfully registered!", {
      description: "You will receive confirmation shortly.",
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="spice-gradient section-padding text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Join Dr. Nitika at our upcoming workshops, webinars, and seminars designed to support your pregnancy and parenting journey.
          </p>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-4 sticky top-20">
                <h2 className="text-2xl font-bold mb-4">Find Events</h2>
                <div className="mb-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Event Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="cursor-pointer bg-brand-saffron hover:bg-brand-saffron/80">All</Badge>
                    <Badge className="cursor-pointer bg-brand-green hover:bg-brand-green/80 text-white">Webinars</Badge>
                    <Badge className="cursor-pointer bg-brand-peacock hover:bg-brand-peacock/80 text-white">Workshops</Badge>
                    <Badge className="cursor-pointer bg-brand-vermilion hover:bg-brand-vermilion/80 text-white">Seminars</Badge>
                    <Badge className="cursor-pointer bg-brand-navy hover:bg-brand-navy/80 text-white">Conferences</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-cols-5 mb-8">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="webinar">Webinars</TabsTrigger>
                  <TabsTrigger value="workshop">Workshops</TabsTrigger>
                  <TabsTrigger value="seminar">Seminars</TabsTrigger>
                  <TabsTrigger value="conference">Conferences</TabsTrigger>
                </TabsList>
                
                {["all", "webinar", "workshop", "seminar", "conference"].map((category) => (
                  <TabsContent key={category} value={category} className="space-y-6">
                    {filterEventsByCategory(category).length === 0 ? (
                      <div className="text-center py-12">
                        <CalendarIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-xl font-semibold mb-2">No events found</h3>
                        <p className="text-muted-foreground">
                          There are no {category !== "all" ? category : ""} events scheduled at the moment.
                        </p>
                      </div>
                    ) : (
                      filterEventsByCategory(category).map((event) => (
                        <Card key={event.id} className="overflow-hidden hover-scale">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="aspect-video md:aspect-square bg-muted">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div className="md:col-span-2 p-6">
                              <CardHeader className="p-0 pb-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <CardTitle className="text-xl md:text-2xl">{event.title}</CardTitle>
                                    <CardDescription className="text-base mt-1">
                                      <Badge className={`
                                        ${event.category === "webinar" ? "bg-brand-green" : 
                                          event.category === "workshop" ? "bg-brand-peacock" : 
                                          event.category === "seminar" ? "bg-brand-vermilion" : 
                                          "bg-brand-navy"} text-white
                                      `}>
                                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                                      </Badge>
                                      {event.isPremium && (
                                        <Badge variant="outline" className="ml-2 border-brand-saffron text-brand-saffron">
                                          Premium
                                        </Badge>
                                      )}
                                    </CardDescription>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="p-0 space-y-4">
                                <div className="flex items-center text-muted-foreground">
                                  <CalendarIcon className="h-4 w-4 mr-2" />
                                  <span>
                                    {formatDate(event.date)}
                                    {event.endDate && ` - ${formatDate(event.endDate)}`}
                                  </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Clock className="h-4 w-4 mr-2" />
                                  <span>{formatTime(event.date)}</span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  <span>{event.location}</span>
                                </div>
                                <p className="text-muted-foreground">
                                  {event.description}
                                </p>
                                {event.isPremium && event.price && (
                                  <div className="font-semibold text-brand-saffron">
                                    ₹{event.price} 
                                    {event.availableSeats && (
                                      <span className="text-muted-foreground font-normal ml-2">
                                        ({event.availableSeats} seats available)
                                      </span>
                                    )}
                                  </div>
                                )}
                              </CardContent>
                              <CardFooter className="p-0 pt-4">
                                <Button
                                  onClick={() => registerForEvent(event.id)}
                                  disabled={registeredEvents.includes(event.id)}
                                  className={registeredEvents.includes(event.id) ? "bg-brand-green" : ""}
                                >
                                  {registeredEvents.includes(event.id) ? "Registered" : "Register Now"}
                                </Button>
                              </CardFooter>
                            </div>
                          </div>
                        </Card>
                      ))
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Featured Event */}
      <section className="bg-brand-mint/20 section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Event</h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto md:h-full bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1591522810850-58128c5fb089"
                  alt="Annual Parenting Conference"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <CardHeader className="p-0 pb-6">
                  <div>
                    <Badge className="bg-brand-navy text-white mb-4">Conference</Badge>
                    <CardTitle className="text-2xl md:text-3xl">Annual Parenting Conference 2023</CardTitle>
                    <CardDescription className="text-base mt-2">
                      The biggest parenting event of the year
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>December 5-6, 2023</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>The Leela Palace, Bangalore</span>
                  </div>
                  <p className="text-muted-foreground">
                    Join us for this exclusive two-day conference featuring expert panels, networking opportunities, and the latest research in parenting. This year's theme focuses on holistic child development and positive parenting techniques.
                  </p>
                  <div className="font-semibold text-brand-saffron">
                    Early Bird Price: ₹3,500
                    <span className="text-muted-foreground font-normal ml-2">
                      (Limited seats available)
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-6">
                  <Button size="lg">
                    Reserve Your Spot
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Newsletter */}
      <section className="peacock-gradient text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss An Event</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get updates on upcoming events, exclusive invitations, and early bird discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 rounded-md border border-white/30 bg-white/20 text-white placeholder:text-white/70 w-full"
            />
            <Button variant="secondary" className="text-brand-peacock font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
