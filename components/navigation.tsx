"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Disney", href: "/disney" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@gotourglobal.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Follow your dreams, we'll handle the details</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 glass-effect shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-2 rounded-xl">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-800">
                  GoTour
                </span>
                <span className="text-2xl font-light text-emerald-600">
                  Global
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-slate-700 hover:text-emerald-600 font-medium transition-colors relative py-2",
                    pathname === item.href && "text-emerald-600"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                Sign In
              </Button>
              <Link href="/book">
                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-emerald-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-slate-700 hover:text-emerald-600 font-medium transition-colors py-2",
                      pathname === item.href && "text-emerald-600"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 bg-transparent"
                  >
                    Sign In
                  </Button>
                  <Link href="/book">
                    <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
