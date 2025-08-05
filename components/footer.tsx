import Link from "next/link";
import {
  Globe,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Travel Deals
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get exclusive access to special offers, travel tips, and destination
            guides delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
            />
            <Button className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-2 rounded-xl">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">GoTour</span>
                  <span className="text-2xl font-light text-emerald-400">
                    Global
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Discover the world with GoTourGlobal and create memories of a
                lifetime. Whether you seek to soak in the sun on the
                beach,cultural immersion, adrenaline-pumping adventures, serene
                natural landscapes, or gourmet delights, we are here to turn
                your travel dreams into reality. Let us be your trusted travel
                partner, and together, we'll create unforgettable memories that
                will last a lifetime.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-emerald-500 bg-transparent"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-emerald-500 bg-transparent"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-emerald-500 bg-transparent"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-emerald-500 bg-transparent"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-emerald-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Our Team", href: "/about#team" },
                  { name: "Destinations", href: "/destinations" },
                  { name: "Tour Packages", href: "/tours" },
                  { name: "Travel Blog", href: "/blog" },
                  { name: "Customer Reviews", href: "/reviews" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-emerald-400">
                Support
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Help Center", href: "/help" },
                  { name: "Travel Insurance", href: "/insurance" },
                  { name: "Booking Terms", href: "/terms" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Cancellation Policy", href: "/cancellation" },
                  { name: "FAQ", href: "/faq" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-emerald-400">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-400">
                    <p>San Francisco Bay Area, California</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-400">1-628-246-7698</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-400">info@gotourglobal.com</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                <h4 className="font-semibold text-emerald-400 mb-2">
                  24/7 Emergency Support
                </h4>
                <p className="text-sm text-gray-400 mb-2">
                  For urgent travel assistance
                </p>
                <p className="text-emerald-400 font-semibold">1-628-246-7698</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright &copy; 2024 GoTourGlobal. All rights reserved
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link
                href="/"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                Card Authorization
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
