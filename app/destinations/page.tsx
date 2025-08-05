"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, Calendar, Star, Users, Search, MapPin } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    // Fetch destinations based on selected filters
    const fetchDestinations = async () => {
      const response = await fetch("/api/destinations");
      const data = await response.json();
      console.log(data);
      setDestinations(data.data);
    };

    fetchDestinations();
  }, []);

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      destination.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesRegion =
      selectedRegion === "all" ||
      destination.region.toLowerCase() === selectedRegion.toLowerCase();

    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="text-center">
            <Badge className="mb-6 bg-emerald-600/20 text-emerald-300 border-emerald-500/30">
              🌍 Discover Amazing Places
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Our Destinations
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From pristine wilderness to vibrant cultures, discover the world's
              most extraordinary places with expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-slate-200 focus:border-emerald-500"
                />
              </div>

              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-48 border-slate-200 focus:border-emerald-500">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="wildlife">Wildlife</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full sm:w-48 border-slate-200 focus:border-emerald-500">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="africa">Africa</SelectItem>
                  <SelectItem value="north america">North America</SelectItem>
                  <SelectItem value="south america">South America</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-slate-600">
              Showing {filteredDestinations.length} of {destinations.length}{" "}
              destinations
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-2xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`${destination.image}`}
                    alt={destination.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-3 left-3">
                    <Badge className="bg-emerald-600 text-white border-0 shadow-lg text-xs">
                      {destination.category}
                    </Badge>
                  </div>

                  <div className="absolute top-3 right-3">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 shadow-lg">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-semibold text-slate-700">
                        {destination.rating}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-white text-xs mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{destination.country}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-800 line-clamp-1">
                      {destination.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-xl font-bold text-emerald-600">
                        ${destination.price}
                      </div>
                      <div className="text-xs text-slate-500">per person</div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {destination.highlights
                      .slice(0, 2)
                      .map((highlight, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs px-2 py-0.5"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    {destination.highlights.length > 2 && (
                      <Badge
                        variant="secondary"
                        className="text-xs px-2 py-0.5"
                      >
                        +{destination.highlights.length - 2} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{destination.reviews} reviews</span>
                    </div>
                    <div className="text-xs">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          destination.difficulty === "Easy"
                            ? "bg-green-100 text-green-700"
                            : destination.difficulty === "Moderate"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {destination.difficulty}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-xl text-sm">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <div className="text-slate-400 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-slate-600 mb-2">
                No destinations found
              </h3>
              <p className="text-slate-500">
                Try adjusting your search criteria or browse all destinations
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedRegion("all");
                }}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Our travel experts can create a custom itinerary tailored
            specifically to your dreams and preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8"
            >
              Request Custom Trip
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-700 font-semibold px-8 bg-transparent"
            >
              Speak with Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
