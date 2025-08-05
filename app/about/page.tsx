import Image from "next/image";
import {
  Award,
  Users,
  Globe,
  Heart,
  Shield,
  Compass,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://letsparksfly.net/wp-content/uploads/2024/09/Bali-gallery1-scaled.jpg"
            alt="Travel planning"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600/20 text-emerald-300 border-emerald-500/30">
              🌍 About GoTourGlobal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crafting Dreams Into
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Unforgettable Journeys
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              For over 15 years, we've been turning wanderlust into reality,
              creating personalized travel experiences that connect you with the
              world's most extraordinary places and cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-emerald-100 text-emerald-700 border-emerald-200">
                📖 Our Story
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-slate-800 uppercase">
                The world is a book and those who do not travel read only one
                page.” St. Augustine{" "}
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  GoTourGlobal is a leading global travel company dedicated to
                  providing exceptional travel experiences to our valued
                  customers. With a passion for exploration and a commitment to
                  excellence, we strive to make vacations/business travel
                  seamless, affordable, enjoyable, and memorable. We are
                  headquartered in San Francisco Bay Area, California, USA and
                  serve our valued customers all over the world.
                </p>
                <p>
                  At GoTourGlobal, our mission is to empower individuals to
                  embark on boundless explorations, fostering connections among
                  the world's wonders. We believe that travel is not just about
                  visiting destinations; it is about embracing diverse cultures,
                  forging unforgettable memories, and creating lasting impact.
                </p>
              </div>
              <div className="my-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    50K+
                  </div>
                  <div className="text-sm text-slate-600">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    200+
                  </div>
                  <div className="text-sm text-slate-600">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://letsparksfly.net/wp-content/uploads/2024/09/Bali-gallery8-768x696.jpg"
                alt="Our founders"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-sm">Customer Rating</div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200">
              ⭐ Our Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our values shape every journey we create and every relationship we
              build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Authentic Experiences",
                description:
                  "We believe travel should connect you with real cultures, not tourist traps. Every experience is carefully chosen for its authenticity.",
                color: "text-rose-600",
                bg: "bg-rose-50",
              },
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "Your safety and peace of mind are paramount. We maintain the highest safety standards and provide 24/7 support worldwide.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                icon: Globe,
                title: "Sustainable Tourism",
                description:
                  "We're committed to responsible travel that benefits local communities and preserves destinations for future generations.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: Users,
                title: "Personal Service",
                description:
                  "Every traveler is unique. We take time to understand your dreams and craft experiences that exceed expectations.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: Compass,
                title: "Expert Knowledge",
                description:
                  "Our team of travel experts and local guides share deep knowledge and insider access to create extraordinary journeys.",
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
              {
                icon: Award,
                title: "Excellence Always",
                description:
                  "We never settle for good enough. Every detail is perfected to ensure your journey is nothing short of extraordinary.",
                color: "text-indigo-600",
                bg: "bg-indigo-50",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white rounded-2xl"
              >
                <CardContent className="p-8">
                  <div
                    className={`inline-flex p-4 rounded-2xl ${value.bg} mb-6`}
                  >
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
              👥 Meet Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              The Experts Behind Your Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our passionate team of travel experts brings decades of combined
              experience and local knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Founder & CEO",
                image:
                  "professional woman travel expert with world map background",
                bio: "15+ years crafting luxury travel experiences across 6 continents",
                specialties: [
                  "Luxury Travel",
                  "Cultural Immersion",
                  "Adventure Planning",
                ],
              },
              {
                name: "Michael Rodriguez",
                role: "Co-Founder & Head of Operations",
                image:
                  "professional man travel expert with mountain landscape background",
                bio: "Former expedition leader with expertise in adventure and eco-tourism",
                specialties: [
                  "Adventure Travel",
                  "Eco-Tourism",
                  "Group Expeditions",
                ],
              },
              {
                name: "Emma Chen",
                role: "Senior Travel Consultant",
                image:
                  "professional asian woman travel consultant with asian temples background",
                bio: "Asia specialist with deep cultural knowledge and local connections",
                specialties: [
                  "Asia Travel",
                  "Cultural Tours",
                  "Culinary Experiences",
                ],
              },
              {
                name: "James Thompson",
                role: "European Travel Specialist",
                image:
                  "professional man european travel specialist with european castles background",
                bio: "European history expert and luxury accommodation specialist",
                specialties: [
                  "European History",
                  "Luxury Hotels",
                  "Wine Tours",
                ],
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&query=${member.image}`}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200">
              🏆 Awards & Recognition
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Industry Recognition
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading travel
              industry organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                award: "Best Travel Agency 2023",
                organization: "World Travel Awards",
                year: "2023",
                icon: "🏆",
              },
              {
                award: "Sustainable Tourism Leader",
                organization: "Green Travel Association",
                year: "2023",
                icon: "🌱",
              },
              {
                award: "Customer Service Excellence",
                organization: "Travel Industry Council",
                year: "2022",
                icon: "⭐",
              },
              {
                award: "Innovation in Travel",
                organization: "Global Tourism Board",
                year: "2022",
                icon: "💡",
              },
            ].map((recognition, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white rounded-2xl"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{recognition.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {recognition.award}
                  </h3>
                  <p className="text-slate-600 text-sm mb-1">
                    {recognition.organization}
                  </p>
                  <p className="text-emerald-600 font-semibold">
                    {recognition.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Let our experienced team create a personalized travel experience
            that exceeds your wildest dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full"
            >
              Start Planning My Trip
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-700 font-semibold px-8 py-4 rounded-full bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
