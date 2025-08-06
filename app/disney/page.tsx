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
          src="data:image/jpeg;base64,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"
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
        <div className="container mx-auto px-4 flex flex-col items-center ">
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
