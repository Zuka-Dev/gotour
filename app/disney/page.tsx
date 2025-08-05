import Image from "next/image";
import {
  Star,
  Calendar,
  Users,
  MapPin,
  Clock,
  Sparkles,
  Camera,
  Utensils,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DisneyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-blue-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Disney World Magic Kingdom Castle"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <Badge className="mb-6 bg-pink-600/20 text-pink-300 border-pink-500/30 backdrop-blur-sm">
            ✨ The Most Magical Place on Earth
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Disney World
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Magic Awaits
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experience the wonder, magic, and joy of Walt Disney World Resort
            with our expertly crafted vacation packages designed for families,
            couples, and Disney fans of all ages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Plan My Disney Trip
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 rounded-full backdrop-blur-sm bg-transparent"
            >
              View Packages
            </Button>
          </div>
        </div>

        {/* Floating Magic Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="bg-pink-500/20 backdrop-blur-sm rounded-full p-4">
            <Sparkles className="h-8 w-8 text-pink-400" />
          </div>
        </div>
        <div className="absolute bottom-32 right-16 animate-pulse">
          <div className="bg-purple-500/20 backdrop-blur-sm rounded-full p-4">
            <Star className="h-8 w-8 text-purple-400" />
          </div>
        </div>
      </section>

      {/* Disney Parks Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 border border-black flex flex-col items-center ">
          <div className="text-center ">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              🏰 Four Magical Parks
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Explore Every Corner of Magic
            </h2>
            <p className="text-md text-slate-800 max-w-4xl text-center">
              Welcome to the magical world of GoTourGlobal, where dreams come
              true as we whisk you away to the enchanting realm of Disney! Our
              carefully crafted Disney packages promise an experience like no
              other, where you can immerse yourself in the whimsy, wonder, and
              joy that only Disney can provide. From the iconic Cinderella
              Castle at Walt Disney World to the fairy tale charm of Disneyland
              Paris, and the adventurous spirit of Disney California Adventure,
              we have a variety of Disney destinations to choose from. With
              GoTourGlobal, you'll enjoy seamless travel arrangements,
              comfortable accommodations, and priority access to the most
              beloved Disney attractions. Meet beloved characters, witness
              dazzling parades and shows, and create cherished memories with
              your loved ones as you journey through the captivating worlds of
              Disney. Our team of travel experts are passionate about Disney
              magic and will ensure that your trip is personalized to match your
              preferences, making it a truly unforgettable experience. Whether
              you're a first-time visitor or a seasoned Disney enthusiast, our
              packages cater to travelers of all ages, ensuring that everyone's
              inner child is awakened by the magic that surrounds them. Leave
              the planning to us, as we take care of all the details, so you can
              focus on enjoying the fantasy-filled adventure that awaits you.
              Let GoTourGlobal be your guide to the world of Disney, where
              imagination knows no bounds and where cherished memories are made
              to last a lifetime. Join us on this extraordinary journey to
              experience the magic that only Disney can conjure!
            </p>
          </div>
        </div>
      </section>

      {/* Disney Tips & Planning */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              💡 Planning Tips
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Make the Most of Your Disney Magic
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert tips and insider secrets to help you create the most
              magical Disney vacation possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Best Times to Visit",
                description:
                  "Avoid crowds and enjoy shorter wait times with our seasonal planning guide",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: Camera,
                title: "Photo Opportunities",
                description:
                  "Capture magical moments with our guide to the best photo spots in each park",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: Utensils,
                title: "Dining Reservations",
                description:
                  "Secure the best dining experiences with advance reservations and insider tips",
                color: "text-pink-600",
                bg: "bg-pink-50",
              },
              {
                icon: MapPin,
                title: "Park Navigation",
                description:
                  "Master the art of park hopping and maximize your time with strategic planning",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
            ].map((tip, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white rounded-2xl"
              >
                <CardContent className="p-6">
                  <div className={`inline-flex p-4 rounded-2xl ${tip.bg} mb-4`}>
                    <tip.icon className={`h-8 w-8 ${tip.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-800">
                    {tip.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-pink-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Disney Magic?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Let our Disney specialists help you plan the perfect magical
            vacation that your family will treasure forever
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold px-8 py-4 rounded-full"
            >
              Start Planning My Disney Trip
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-800 font-semibold px-8 py-4 rounded-full bg-transparent"
            >
              Get Free Disney Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
