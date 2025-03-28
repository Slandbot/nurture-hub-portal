
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Calendar as CalendarIcon,
  Filter,
  MapPin,
  Users,
  Video
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

// Event type definition
type Event = {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  isVirtual: boolean;
  description: string;
  category: string;
  image: string;
  attendees: number;
};

const EventsPage = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [category, setCategory] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");

  // Sample events data
  const events: Event[] = [
    {
      id: 1,
      title: "Pregnancy Nutrition Workshop",
      date: new Date(2023, 5, 15),
      time: "6:00 PM - 8:00 PM",
      location: "Online",
      isVirtual: true,
      description: "Join Dr. Nitika for an interactive workshop on optimal nutrition during pregnancy for you and your baby.",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      attendees: 45
    },
    {
      id: 2,
      title: "Childbirth Preparation Class",
      date: new Date(2023, 5, 20),
      time: "5:00 PM - 7:30 PM",
      location: "Nurture Hub Center, New Delhi",
      isVirtual: false,
      description: "A comprehensive class to prepare expecting parents for labor and delivery with practical techniques.",
      category: "Class",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      attendees: 30
    },
    {
      id: 3,
      title: "Infant Sleep Patterns Webinar",
      date: new Date(2023, 5, 25),
      time: "6:30 PM - 8:00 PM",
      location: "Online",
      isVirtual: true,
      description: "Learn about infant sleep patterns and strategies to help your baby sleep better with expert guidance.",
      category: "Webinar",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      attendees: 60
    },
    {
      id: 4,
      title: "New Parent Support Group",
      date: new Date(2023, 6, 2),
      time: "11:00 AM - 12:30 PM",
      location: "Nurture Hub Center, New Delhi",
      isVirtual: false,
      description: "Connect with other new parents, share experiences, and get support in this facilitated group session.",
      category: "Support Group",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      attendees: 25
    },
    {
      id: 5,
      title: "Breastfeeding Basics",
      date: new Date(2023, 6, 10),
      time: "5:00 PM - 6:30 PM",
      location: "Online",
      isVirtual: true,
      description: "Essential information and practical tips for successful breastfeeding for new and expecting mothers.",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      attendees: 40
    },
    {
      id: 6,
      title: "Baby's First Foods",
      date: new Date(2023, 6, 15),
      time: "6:00 PM - 7:30 PM",
      location: "Nurture Hub Center, New Delhi",
      isVirtual: false,
      description: "Learn when and how to introduce solid foods to your baby with demonstrations and tastings.",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      attendees: 35
    }
  ];

  // Filter events based on selected criteria
  const filteredEvents = events.filter((event) => {
    // Filter by date
    const dateMatch = !date || 
      (event.date.getDate() === date.getDate() && 
       event.date.getMonth() === date.getMonth() && 
       event.date.getFullYear() === date.getFullYear());
    
    // Filter by category
    const categoryMatch = !category || event.category === category;
    
    // Filter by event type (virtual/in-person)
    const typeMatch = !eventType || 
      (eventType === "virtual" && event.isVirtual) || 
      (eventType === "in-person" && !event.isVirtual);
    
    return dateMatch && categoryMatch && typeMatch;
  });

  // Reset filters
  const resetFilters = () => {
    setDate(undefined);
    setCategory("");
    setEventType("");
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-brand-lavender/20 section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Workshops</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Join Dr. Nitika and our community for insightful events, workshops, and classes designed to support your parenthood journey.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <h2 className="text-2xl font-bold flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filter Events
              </h2>
              <Button variant="outline" onClick={resetFilters} size="sm">
                Reset Filters
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Webinar">Webinar</SelectItem>
                    <SelectItem value="Class">Class</SelectItem>
                    <SelectItem value="Support Group">Support Group</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Event Type</label>
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    <SelectItem value="virtual">Virtual</SelectItem>
                    <SelectItem value="in-person">In-Person</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">{filteredEvents.length} Events Found</h2>
          </div>
          
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No events match your current filters.</p>
              <Button onClick={resetFilters}>Reset Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="hover-scale overflow-hidden">
                  <div className="aspect-video relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-primary">
                      {event.category}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="text-sm text-primary font-medium mb-1">
                      {format(event.date, "MMMM d, yyyy")} • {event.time}
                    </div>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      {event.isVirtual ? (
                        <>
                          <Video className="h-4 w-4 mr-1" />
                          Virtual Event
                        </>
                      ) : (
                        <>
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {event.description}
                    </p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees} people attending
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Monthly Calendar Preview */}
      <section className="bg-brand-mint/30 section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Monthly Calendar</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              View our upcoming events for the month ahead and plan your participation. Join us for enriching experiences that support your parenting journey.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Calendar 
              mode="single"
              selected={date}
              onSelect={setDate}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Host an Event CTA */}
      <section className="bg-brand-purple text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Host an Event?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            If you're interested in collaborating with Dr. Nitika to host a workshop or event for your community, we'd love to hear from you.
          </p>
          <Button variant="secondary" size="lg" className="text-primary">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
