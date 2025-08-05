"use client";
import {
  ArrowRight,
  Calendar,
  Star,
  Users,
  Award,
  Shield,
  Heart,
  Compass,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await fetch("/api/destinations");
      const data = await response.json();
      if (data.success) {
        setDestinations(data.data);
      }
    };
    fetchDestinations();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-emerald-900/60 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlfGVufDB8fDB8fHww"
          alt="Breathtaking mountain landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <Badge className="mb-6 bg-emerald-600/20 text-emerald-300 border-emerald-500/30 backdrop-blur-sm">
            🌍 Premium Travel Experiences Since 2010
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Great Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From hidden gems to iconic destinations, we craft personalized
            journeys that transform the way you see the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
            >
              Explore Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 rounded-full backdrop-blur-sm bg-transparent"
            >
              Plan My Trip
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 my-4">
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">50K+</div>
              <div className="text-sm text-gray-300">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">200+</div>
              <div className="text-sm text-gray-300">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative -mt-20 z-30 px-4">
        <div className="container mx-auto">
          <Card className="glass-effect shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Find Your Perfect Getaway
                </h2>
                <p className="text-slate-600">
                  Tell us where you want to go and we'll make it happen
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Destination
                  </label>
                  <Input
                    placeholder="Where do you want to go?"
                    className="border-slate-200 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Departure Date
                  </label>
                  <Input
                    type="date"
                    className="border-slate-200 focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Return Date
                  </label>
                  <Input
                    type="date"
                    className="border-slate-200 focus:border-emerald-500"
                  />
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 h-12 rounded-xl font-semibold">
                    Search Adventures
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
              🏔️ Handpicked Destinations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Extraordinary Places Await
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our carefully curated collection of the world's most
              captivating destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.slice(0, 6).map((destination, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-2xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`${destination.image}`}
                    alt={destination.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600 text-white border-0 shadow-lg">
                      {destination.highlights[0]}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-semibold text-slate-700">
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm leading-relaxed">
                      {destination.description}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-800">
                      {destination.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">
                        ${destination.price}
                      </div>
                      <div className="text-sm text-slate-500">per person</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{destination.reviews} reviews</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-xl">
                    Explore This Destination
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/destinations">
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                View All Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200">
              ⭐ Why Choose GoTourGlobal
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Excellence in Every Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We don't just plan trips, we craft transformative experiences that
              stay with you forever
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Award-Winning Service",
                description:
                  "Recognized globally for exceptional customer service and travel innovation",
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
              {
                icon: Heart,
                title: "Personalized Experiences",
                description:
                  "Every journey is tailored to your unique interests and travel dreams",
                color: "text-rose-600",
                bg: "bg-rose-50",
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                description:
                  "Comprehensive travel insurance and 24/7 emergency support worldwide",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                icon: Compass,
                title: "Expert Guidance",
                description:
                  "Local experts and seasoned travelers guide every aspect of your journey",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white rounded-2xl"
              >
                <CardContent className="p-8">
                  <div
                    className={`inline-flex p-4 rounded-2xl ${feature.bg} mb-6`}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
              💬 What Our Travelers Say
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Stories from the Road
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                rating: 5,
                text: "GoTourGlobal turned our dream honeymoon into reality. Every detail was perfect, from the private villa in Santorini to the sunset dinner cruise. Absolutely magical!",
                trip: "Greek Islands Honeymoon",
              },
              {
                name: "Michael Chen",
                location: "Toronto, Canada",
                rating: 5,
                text: "The Patagonia trek was life-changing. The guides were incredibly knowledgeable, and the small group size made it feel like an adventure with friends.",
                trip: "Patagonia Adventure Trek",
              },
              {
                name: "Emma Williams",
                location: "London, UK",
                rating: 5,
                text: "As a solo female traveler, I felt completely safe and supported throughout my journey in Japan. The cultural experiences were authentic and deeply moving.",
                trip: "Japan Cultural Immersion",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white rounded-2xl"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-slate-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.location}
                    </div>
                    <div className="text-sm text-emerald-600 font-medium mt-1">
                      {testimonial.trip}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Let our travel experts create a personalized itinerary that matches
            your dreams and exceeds your expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 font-semibold px-8 py-4 rounded-full"
            >
              Plan My Trip
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 rounded-full bg-transparent"
            >
              Call Us: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
