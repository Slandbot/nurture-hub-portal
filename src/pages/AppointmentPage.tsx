
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { CalendarIcon, Clock, MapPin, Video, ThumbsUp } from "lucide-react";

// Appointment type
type DoctorSchedule = {
  id: number;
  name: string;
  specialty: string;
  image: string;
  location: string;
  availability: {
    day: string;
    slots: string[];
  }[];
  fee: number;
  rating: number;
  online: boolean;
  inPerson: boolean;
};

const AppointmentPage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointmentType, setAppointmentType] = useState<string>("online");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [step, setStep] = useState<number>(1);

  // Mock doctor schedules
  const doctorSchedules: DoctorSchedule[] = [
    {
      id: 1,
      name: "Dr. Nitika Sharma",
      specialty: "Obstetrician & Gynecologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      location: "Nurture Hub Clinic, Delhi",
      availability: [
        {
          day: "Monday",
          slots: ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM"]
        },
        {
          day: "Wednesday",
          slots: ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM"]
        },
        {
          day: "Friday",
          slots: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]
        }
      ],
      fee: 1500,
      rating: 4.9,
      online: true,
      inPerson: true
    },
    {
      id: 2,
      name: "Dr. Anjali Gupta",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
      location: "Nurture Hub Clinic, Mumbai",
      availability: [
        {
          day: "Tuesday",
          slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]
        },
        {
          day: "Thursday",
          slots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"]
        },
        {
          day: "Saturday",
          slots: ["10:00 AM", "11:00 AM", "12:00 PM"]
        }
      ],
      fee: 1200,
      rating: 4.8,
      online: true,
      inPerson: true
    },
    {
      id: 3,
      name: "Dr. Rahul Verma",
      specialty: "Child Psychologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
      location: "Nurture Hub Clinic, Bangalore",
      availability: [
        {
          day: "Monday",
          slots: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]
        },
        {
          day: "Wednesday",
          slots: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]
        },
        {
          day: "Friday",
          slots: ["10:00 AM", "11:00 AM", "12:00 PM"]
        }
      ],
      fee: 1800,
      rating: 4.7,
      online: true,
      inPerson: false
    }
  ];

  // Get available time slots based on selected date
  const getAvailableTimeSlots = () => {
    if (!selectedDate || !selectedDoctor) return [];
    
    const doctor = doctorSchedules.find(doc => doc.name === selectedDoctor);
    if (!doctor) return [];
    
    const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    const daySchedule = doctor.availability.find(avail => avail.day === dayOfWeek);
    
    return daySchedule ? daySchedule.slots : [];
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

  // Handle booking form submission
  const handleBookAppointment = () => {
    toast.success("Appointment Booked Successfully!", {
      description: "We've sent a confirmation email with all details.",
    });
    
    // Reset form and navigate to confirmation step
    setStep(3);
  };

  // Check if booking form is valid
  const isBookingFormValid = () => {
    return (
      selectedDate &&
      selectedDoctor &&
      selectedTime &&
      name.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      reason.trim() !== ""
    );
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="indian-gradient section-padding text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Schedule a consultation with Dr. Nitika or one of our specialists to get personalized guidance for your pregnancy and parenting journey.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step indicators */}
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <div className={`flex flex-col items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? "bg-primary text-white" : "bg-muted"}`}>
                    1
                  </div>
                  <span className="text-sm">Select Date & Doctor</span>
                </div>
                <div className={`h-1 flex-grow mx-2 ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? "bg-primary text-white" : "bg-muted"}`}>
                    2
                  </div>
                  <span className="text-sm">Patient Details</span>
                </div>
                <div className={`h-1 flex-grow mx-2 ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
                <div className={`flex flex-col items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? "bg-primary text-white" : "bg-muted"}`}>
                    3
                  </div>
                  <span className="text-sm">Confirmation</span>
                </div>
              </div>
            </div>

            {/* Step 1: Select Date & Doctor */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Select Appointment Date & Doctor</CardTitle>
                  <CardDescription>
                    Choose your preferred doctor and appointment date
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="doctor">Select Doctor</Label>
                    <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                      <SelectTrigger id="doctor">
                        <SelectValue placeholder="Select a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctorSchedules.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.name}>
                            {doctor.name} - {doctor.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedDoctor && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label className="mb-2 block">Select Date</Label>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                          disabled={(date) => {
                            const doctor = doctorSchedules.find(doc => doc.name === selectedDoctor);
                            if (!doctor) return true;
                            
                            const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
                            return !doctor.availability.some(avail => avail.day === dayOfWeek) || 
                                  date < new Date() || 
                                  date > new Date(new Date().setDate(new Date().getDate() + 30));
                          }}
                        />
                      </div>

                      {selectedDate && (
                        <div>
                          <Label className="mb-2 block">Select Time Slot</Label>
                          <div className="grid grid-cols-2 gap-2">
                            {getAvailableTimeSlots().length > 0 ? (
                              getAvailableTimeSlots().map((slot) => (
                                <Button
                                  key={slot}
                                  type="button"
                                  variant={selectedTime === slot ? "default" : "outline"}
                                  onClick={() => setSelectedTime(slot)}
                                  className="justify-start"
                                >
                                  <Clock className="mr-2 h-4 w-4" />
                                  {slot}
                                </Button>
                              ))
                            ) : (
                              <p className="text-muted-foreground col-span-2">
                                No available slots for this date. Please select another date.
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {selectedDoctor && selectedDate && selectedTime && (
                    <div className="space-y-2">
                      <Label>Appointment Type</Label>
                      <RadioGroup
                        value={appointmentType}
                        onValueChange={setAppointmentType}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="online" id="online" />
                          <Label htmlFor="online" className="flex items-center">
                            <Video className="h-4 w-4 mr-2" /> Online Consultation
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="in-person" id="in-person" />
                          <Label htmlFor="in-person" className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" /> In-Person Visit
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {selectedDoctor && (
                    <div className="mt-6 bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-start space-x-4">
                        <div className="h-16 w-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                          <img 
                            src={doctorSchedules.find(doc => doc.name === selectedDoctor)?.image}
                            alt={selectedDoctor}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{selectedDoctor}</h3>
                          <p className="text-muted-foreground">
                            {doctorSchedules.find(doc => doc.name === selectedDoctor)?.specialty}
                          </p>
                          <div className="flex items-center mt-1">
                            <ThumbsUp className="h-4 w-4 mr-1 text-primary" />
                            <span className="text-sm">
                              {doctorSchedules.find(doc => doc.name === selectedDoctor)?.rating} Rating
                            </span>
                          </div>
                          <p className="text-brand-ochre font-medium mt-1">
                            ₹{doctorSchedules.find(doc => doc.name === selectedDoctor)?.fee} per session
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => navigate(-1)}>
                    Cancel
                  </Button>
                  <Button 
                    onClick={() => setStep(2)} 
                    disabled={!selectedDate || !selectedDoctor || !selectedTime}
                  >
                    Continue
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* Step 2: Patient Details */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Patient Details</CardTitle>
                  <CardDescription>
                    Please provide your information for the appointment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Visit</Label>
                    <Textarea
                      id="reason"
                      placeholder="Please describe your symptoms or reason for appointment"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      rows={4}
                      required
                    />
                  </div>

                  {/* Appointment Summary */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Appointment Summary</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Doctor:</div>
                      <div>{selectedDoctor}</div>
                      <div className="text-muted-foreground">Date:</div>
                      <div>{selectedDate ? formatDate(selectedDate) : ""}</div>
                      <div className="text-muted-foreground">Time:</div>
                      <div>{selectedTime}</div>
                      <div className="text-muted-foreground">Type:</div>
                      <div>{appointmentType === "online" ? "Online Consultation" : "In-Person Visit"}</div>
                      <div className="text-muted-foreground">Fee:</div>
                      <div className="font-medium text-brand-ochre">
                        ₹{doctorSchedules.find(doc => doc.name === selectedDoctor)?.fee}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button 
                    onClick={handleBookAppointment} 
                    disabled={!isBookingFormValid()}
                  >
                    Confirm & Pay
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <CardTitle className="text-2xl">Appointment Confirmed!</CardTitle>
                  <CardDescription className="text-base">
                    Your appointment has been successfully booked.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-lg max-w-sm mx-auto text-left">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Doctor:</div>
                      <div>{selectedDoctor}</div>
                      <div className="text-muted-foreground">Date:</div>
                      <div>{selectedDate ? formatDate(selectedDate) : ""}</div>
                      <div className="text-muted-foreground">Time:</div>
                      <div>{selectedTime}</div>
                      <div className="text-muted-foreground">Type:</div>
                      <div>{appointmentType === "online" ? "Online Consultation" : "In-Person Visit"}</div>
                    </div>
                  </div>
                  <p>
                    A confirmation email has been sent to <span className="font-medium">{email}</span> with all the details. 
                  </p>
                  <p>
                    Please arrive 15 minutes before your appointment time. For online consultation, you will receive a link 30 minutes before the scheduled time.
                  </p>
                </CardContent>
                <CardFooter className="justify-center space-x-4">
                  <Button onClick={() => navigate('/dashboard')}>
                    Go to Dashboard
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/')}>
                    Return to Home
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-brand-mint/20 section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Before Your Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Arrive 15 minutes early to complete paperwork</li>
                  <li>Bring your ID and insurance information</li>
                  <li>List your current medications and medical history</li>
                  <li>Note down any questions you want to ask</li>
                  <li>For online consultations, test your device beforehand</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>During Your Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>The doctor will review your medical history</li>
                  <li>Be open about your symptoms and concerns</li>
                  <li>Physical examination may be conducted if necessary</li>
                  <li>Ask questions about your condition and treatment</li>
                  <li>Take notes or record the session with permission</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>After Your Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Follow the treatment plan as prescribed</li>
                  <li>Fill any prescriptions provided</li>
                  <li>Schedule follow-up appointments if recommended</li>
                  <li>Contact us if your symptoms worsen</li>
                  <li>Complete any recommended tests or referrals</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;
