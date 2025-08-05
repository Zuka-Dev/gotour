import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-emerald-600/20 text-emerald-300 border-emerald-500/30">📞 Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Plan Your Next
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Great Adventure
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our travel experts are ready to help you create unforgettable memories. Reach out and let's start planning
            your dream journey.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl bg-white rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">First Name *</label>
                        <Input placeholder="Your first name" className="border-slate-200 focus:border-emerald-500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Last Name *</label>
                        <Input placeholder="Your last name" className="border-slate-200 focus:border-emerald-500" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="border-slate-200 focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                        <Input placeholder="+1 (555) 123-4567" className="border-slate-200 focus:border-emerald-500" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Travel Interest</label>
                      <Select>
                        <SelectTrigger className="border-slate-200 focus:border-emerald-500">
                          <SelectValue placeholder="What type of trip are you planning?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adventure">Adventure Travel</SelectItem>
                          <SelectItem value="cultural">Cultural Experiences</SelectItem>
                          <SelectItem value="luxury">Luxury Travel</SelectItem>
                          <SelectItem value="family">Family Vacation</SelectItem>
                          <SelectItem value="honeymoon">Honeymoon/Romance</SelectItem>
                          <SelectItem value="group">Group Travel</SelectItem>
                          <SelectItem value="business">Business Travel</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Message *</label>
                      <Textarea
                        placeholder="Tell us about your dream destination, travel dates, group size, and any special requirements..."
                        className="border-slate-200 focus:border-emerald-500 min-h-32"
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-lg py-3 rounded-xl">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-xl bg-white rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-100 p-3 rounded-xl">
                        <Phone className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Phone</h4>
                        <p className="text-slate-600">+1 (555) 123-4567</p>
                        <p className="text-sm text-slate-500">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-100 p-3 rounded-xl">
                        <Mail className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Email</h4>
                        <p className="text-slate-600">info@gotourglobal.com</p>
                        <p className="text-sm text-slate-500">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-emerald-100 p-3 rounded-xl">
                        <MapPin className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Office</h4>
                        <p className="text-slate-600">
                          123 Travel Street
                          <br />
                          Adventure City, AC 12345
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-xl">
                        <Phone className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Emergency Support</h4>
                        <p className="text-slate-600">+1 (555) 999-HELP</p>
                        <p className="text-sm text-slate-500">24/7 Emergency Assistance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-0 shadow-xl bg-white rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                    <Clock className="h-6 w-6 text-emerald-600 mr-2" />
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monday - Friday</span>
                      <span className="font-semibold text-slate-800">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Saturday</span>
                      <span className="font-semibold text-slate-800">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sunday</span>
                      <span className="font-semibold text-slate-800">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-emerald-50 rounded-xl">
                    <p className="text-sm text-emerald-700">
                      <strong>Note:</strong> Emergency support is available 24/7 for travelers currently on trips.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                  <p className="text-emerald-100 mb-6">
                    For urgent travel assistance or if you're currently traveling and need support.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-white text-emerald-700 hover:bg-gray-100 font-semibold">
                      Call Emergency Line
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-emerald-700 bg-transparent"
                    >
                      Live Chat Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
              ❓ Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Quick Answers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and booking process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How far in advance should I book my trip?",
                answer:
                  "We recommend booking 3-6 months in advance for international trips and 1-3 months for domestic travel to ensure the best availability and pricing.",
              },
              {
                question: "Do you offer travel insurance?",
                answer:
                  "Yes, we offer comprehensive travel insurance options to protect your investment and provide peace of mind during your journey.",
              },
              {
                question: "Can you accommodate special dietary requirements?",
                answer:
                  "We work with our partners to accommodate all dietary restrictions, allergies, and preferences. Just let us know your requirements when booking.",
              },
              {
                question: "What happens if I need to cancel my trip?",
                answer:
                  "Our cancellation policies vary by destination and booking type. We'll explain all terms clearly before booking and help you understand your options.",
              },
              {
                question: "Do you offer group discounts?",
                answer:
                  "Yes, we offer special pricing for groups of 8 or more travelers. Contact us for a custom quote based on your group size and destination.",
              },
              {
                question: "How do I know my booking is confirmed?",
                answer:
                  "You'll receive a detailed confirmation email within 24 hours of booking, including your itinerary, contact information, and next steps.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg bg-slate-50 rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
