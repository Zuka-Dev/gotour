"use client";

import { useState } from "react";
import { CreditCard, Shield, CheckCircle, Plus, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "The Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "Gabon",
  "The Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "North Korea",
  "South Korea",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Nagorno-Karabakh",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Turkish Republic of Northern Cyprus",
  "Northern Mariana",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn Islands",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of the Congo",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Barthelemy",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "Somaliland",
  "South Africa",
  "South Ossetia",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard",
  "eSwatini",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Transnistria Pridnestrovie",
  "Trinidad and Tobago",
  "Tristan da Cunha",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "British Virgin Islands",
  "Isle of Man",
  "US Virgin Islands",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Other Country",
];

export default function BookingPage() {
  const [travelers, setTravelers] = useState([{ id: 1 }]);
  const [reservationQuantity, setReservationQuantity] = useState(1);
  const [formData, setFormData] = useState({
    travelers: [{}],
    travelDate: "",
    destination: "",
    budget: "",
    departureAirport: "",
    tripType: "",
    otherServices: "",
    agreeToTerms: false,
    clientName: "",
    clientSignature: "",
    signatureDate: "",
  });

  const addTraveler = () => {
    setTravelers([...travelers, { id: travelers.length + 1 }]);
  };

  const removeTraveler = (id: number) => {
    if (travelers.length > 1) {
      setTravelers(travelers.filter((traveler) => traveler.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-6 bg-emerald-600/20 text-emerald-300 border-emerald-500/30">
              ✈️ Travel Booking Form
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Travel
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Booking Service
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Complete our comprehensive booking form to receive personalized
              travel planning services
            </p>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-white rounded-2xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-slate-800">
                  Travel Booking Form
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 space-y-12">
                {/* Traveler Information Section */}
                <div className="space-y-8">
                  <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                      Traveler Information
                    </h2>
                  </div>

                  {travelers.map((traveler, index) => (
                    <div
                      key={traveler.id}
                      className="space-y-6 p-6 bg-slate-50 rounded-xl"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-slate-800">
                          Traveler #{index + 1}
                        </h3>
                        {travelers.length > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeTraveler(traveler.id)}
                            className="text-red-600 border-red-300 hover:bg-red-50"
                          >
                            <Minus className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-700">
                            First Name *
                          </Label>
                          <Input
                            placeholder="First Name"
                            className="border-slate-200 focus:border-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-700">
                            Last Name *
                          </Label>
                          <Input
                            placeholder="Last Name"
                            className="border-slate-200 focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-700">
                            Date of Birth *
                          </Label>
                          <Input
                            type="date"
                            className="border-slate-200 focus:border-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-slate-700">
                            E-mail *
                          </Label>
                          <Input
                            type="email"
                            placeholder="example@example.com"
                            className="border-slate-200 focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-slate-700">
                          Phone Number *
                        </Label>
                        <Input
                          type="tel"
                          placeholder="Please enter a valid phone number."
                          className="border-slate-200 focus:border-emerald-500"
                        />
                      </div>

                      <div className="space-y-4">
                        <Label className="text-sm font-semibold text-slate-700">
                          Address *
                        </Label>
                        <div className="space-y-4">
                          <Input
                            placeholder="Street Address"
                            className="border-slate-200 focus:border-emerald-500"
                          />
                          <Input
                            placeholder="Street Address Line 2"
                            className="border-slate-200 focus:border-emerald-500"
                          />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                              placeholder="City"
                              className="border-slate-200 focus:border-emerald-500"
                            />
                            <Input
                              placeholder="State / Province"
                              className="border-slate-200 focus:border-emerald-500"
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                              placeholder="Postal / Zip Code"
                              className="border-slate-200 focus:border-emerald-500"
                            />
                            <Select>
                              <SelectTrigger className="border-slate-200 focus:border-emerald-500">
                                <SelectValue placeholder="Please Select Country" />
                              </SelectTrigger>
                              <SelectContent className="max-h-60">
                                {countries.map((country) => (
                                  <SelectItem
                                    key={country}
                                    value={country
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}
                                  >
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="text-center">
                    <Button
                      onClick={addTraveler}
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Another Traveler
                    </Button>
                  </div>
                </div>

                {/* Travel Details Section */}
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                      Travel Details
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-slate-700">
                        Travel Date *
                      </Label>
                      <Input
                        type="date"
                        className="border-slate-200 focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-slate-700">
                        Destination *
                      </Label>
                      <Input
                        placeholder="Where would you like to go?"
                        className="border-slate-200 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-slate-700">
                        Realistic Budget $ *
                      </Label>
                      <Input
                        type="number"
                        placeholder="Enter your budget"
                        className="border-slate-200 focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-slate-700">
                        From which airport would you like to leave from? *
                      </Label>
                      <Input
                        placeholder="Departure airport"
                        className="border-slate-200 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-slate-700">
                      Type of Trip *
                    </Label>
                    <Select>
                      <SelectTrigger className="border-slate-200 focus:border-emerald-500">
                        <SelectValue placeholder="Select trip type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="family">Family Vacation</SelectItem>
                        <SelectItem value="romantic">
                          Romantic Getaway
                        </SelectItem>
                        <SelectItem value="adventure">
                          Adventure Travel
                        </SelectItem>
                        <SelectItem value="business">
                          Business Travel
                        </SelectItem>
                        <SelectItem value="group">Group Travel</SelectItem>
                        <SelectItem value="solo">Solo Travel</SelectItem>
                        <SelectItem value="luxury">Luxury Travel</SelectItem>
                        <SelectItem value="budget">Budget Travel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-slate-700">
                      Other Services Needed
                    </Label>
                    <Textarea
                      placeholder="Type a question or describe additional services you need..."
                      className="border-slate-200 focus:border-emerald-500 min-h-32"
                    />
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                      Terms & Conditions
                    </h2>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                    <div className="space-y-4 text-sm text-slate-700">
                      <p className="font-semibold text-amber-800">
                        The non-refundable retainer fee is good for ONLY 72
                        hours after itinerary has been sent.
                      </p>

                      <div>
                        <p className="font-semibold mb-2">
                          The non-refundable retainer fee includes:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>
                            2 itinerary and package searches to find the best
                            quote that is within your budget
                          </li>
                          <li>pre-trip travel tips and advisories</li>
                          <li>email/phone assistance during your travel</li>
                          <li>post-trip follow-up</li>
                        </ul>
                      </div>

                      <p className="italic">
                        It's not just about finding you a great deal but it's
                        about creating you a memorable travel experience that
                        leaves you satisfied, but also eager to travel more. I
                        take pride in my work and the happiness and satisfaction
                        of my travelers is of the utmost importance to me.
                      </p>

                      <p className="font-semibold text-red-700">
                        By signing this form, you have authorized GoTourGlobal
                        to charge and store your credit card for Non-refundable
                        agent fee.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-slate-700">
                        Your Name *
                      </Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          placeholder="First Name"
                          className="border-slate-200 focus:border-emerald-500"
                        />
                        <Input
                          placeholder="Last Name"
                          className="border-slate-200 focus:border-emerald-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-slate-700">
                        Date *
                      </Label>
                      <Input
                        type="date"
                        className="border-slate-200 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-slate-700">
                      Signature *
                    </Label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                      <p className="text-slate-500">Digital signature area</p>
                      <p className="text-xs text-slate-400 mt-2">
                        Click here to sign digitally
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Section */}
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                      My Products
                    </h2>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-semibold text-slate-800">
                          Reservation Fee
                        </h3>
                        <p className="text-sm text-red-600">Non-refundable</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-slate-800">
                          $100.00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Label className="text-sm font-semibold text-slate-700">
                          Quantity:
                        </Label>
                        <Select
                          value={reservationQuantity.toString()}
                          onValueChange={(value) =>
                            setReservationQuantity(Number(value))
                          }
                        >
                          <SelectTrigger className="w-20 border-slate-200">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-600">Total</p>
                        <p className="text-xl font-bold text-emerald-600">
                          ${(100 * reservationQuantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-slate-800">
                      Payment Methods
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button
                        variant="outline"
                        className="h-12 border-slate-300 bg-transparent"
                      >
                        <CreditCard className="h-5 w-5 mr-2" />
                        Credit Card
                      </Button>
                      <Button
                        variant="outline"
                        className="h-12 border-slate-300 bg-transparent"
                      >
                        Apple Pay
                      </Button>
                      <Button
                        variant="outline"
                        className="h-12 border-slate-300 bg-transparent"
                      >
                        PayPal
                      </Button>
                    </div>
                    <p className="text-xs text-slate-500">
                      Apple Pay is only available on Safari browser and Apple
                      Pay should be configured properly on your device.
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms-agreement" />
                    <Label
                      htmlFor="terms-agreement"
                      className="text-sm text-slate-700 leading-relaxed"
                    >
                      I agree to the terms and conditions and authorize the
                      charge for the non-refundable reservation fee.
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8 border-t">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 px-12 py-4 text-lg"
                  >
                    Submit Booking Request
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Secure Payment
              </h3>
              <p className="text-sm text-slate-600">
                Your payment information is encrypted and secure
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Expert Service
              </h3>
              <p className="text-sm text-slate-600">
                Professional travel planning with 15+ years experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                24/7 Support
              </h3>
              <p className="text-sm text-slate-600">
                Round-the-clock assistance during your travels
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
