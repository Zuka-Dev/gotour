import { NextResponse } from "next/server";

// Mock data for destinations
const destinations = [
  {
    id: 1,
    name: "Norwegian Fjords",
    country: "Norway",
    region: "Europe",
    price: 2199,
    rating: 4.9,
    reviews: 1247,
    duration: "8 Days",
    image:
      "https://images.unsplash.com/photo-1664825381616-5cb8397fd9b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Tm9yd2VnaWFuJTIwRmpvcmRzfGVufDB8fDB8fHww",
    description:
      "Cruise through dramatic landscapes of towering cliffs and cascading waterfalls in one of nature's most spectacular settings.",
    highlights: ["Scenic Cruising", "Waterfalls", "Northern Lights", "Hiking"],
    category: "Nature",
    difficulty: "Moderate",
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    country: "Japan",
    region: "Asia",
    price: 1599,
    rating: 4.8,
    reviews: 2156,
    duration: "10 Days",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S3lvdG8lMkMlMjBKYXBhbnxlbnwwfHwwfHx8MA%3D%3D",
    // A cherry-blossom temple in Kyoto, springtime
    description:
      "Immerse yourself in ancient traditions, stunning temple architecture, and the serene beauty of Japanese culture.",
    highlights: [
      "Temple Visits",
      "Cherry Blossoms",
      "Tea Ceremony",
      "Traditional Arts",
    ],
    category: "Cultural",
    difficulty: "Easy",
  },
  {
    id: 3,
    name: "Patagonia",
    country: "Chile & Argentina",
    region: "South America",
    price: 2899,
    rating: 4.9,
    reviews: 892,
    duration: "12 Days",
    image:
      "https://images.unsplash.com/photo-1558517286-8a9cb0b8c793?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGF0YWdvbmlhfGVufDB8fDB8fHww",
    description:
      "Trek through pristine wilderness and witness breathtaking glacial landscapes in one of Earth's last frontiers.",
    highlights: ["Glacier Trekking", "Wildlife", "Mountain Peaks", "Camping"],
    category: "Adventure",
    difficulty: "Challenging",
  },
  {
    id: 4,
    name: "Tuscany, Italy",
    country: "Italy",
    region: "Europe",
    price: 1899,
    rating: 4.7,
    reviews: 1834,
    duration: "7 Days",
    image:
      "https://images.unsplash.com/photo-1552598715-7eeb9232a2ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHVzY2FueXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Savor world-class wines while exploring Renaissance art, architecture, and the timeless beauty of the Italian countryside.",
    highlights: [
      "Wine Tasting",
      "Renaissance Art",
      "Cooking Classes",
      "Historic Towns",
    ],
    category: "Cultural",
    difficulty: "Easy",
  },
  {
    id: 5,
    name: "Raja Ampat, Indonesia",
    country: "Indonesia",
    region: "Asia",
    price: 2499,
    rating: 4.9,
    reviews: 567,
    duration: "9 Days",
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFqYSUyMEFtcGF0fGVufDB8fDB8fHww",
    description:
      "Dive into the world's most biodiverse marine ecosystem, home to over 1,500 species of fish and 600 coral species.",
    highlights: [
      "Scuba Diving",
      "Marine Life",
      "Coral Reefs",
      "Island Hopping",
    ],
    category: "Adventure",
    difficulty: "Moderate",
  },
  {
    id: 6,
    name: "Scottish Highlands",
    country: "Scotland",
    region: "Europe",
    price: 1799,
    rating: 4.8,
    reviews: 1456,
    duration: "8 Days",
    image:
      "https://images.unsplash.com/photo-1516570628389-492e1488089d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2NvdHRpc2glMjBIaWdobGFuZHN8ZW58MHx8MHx8fDA%3D",
    description:
      "Journey through mystical landscapes steeped in ancient history, from medieval castles to pristine lochs.",
    highlights: [
      "Historic Castles",
      "Whisky Tasting",
      "Highland Games",
      "Scenic Drives",
    ],
    category: "Cultural",
    difficulty: "Easy",
  },
  {
    id: 7,
    name: "Serengeti, Tanzania",
    country: "Tanzania",
    region: "Africa",
    price: 3299,
    rating: 4.9,
    reviews: 1123,
    duration: "10 Days",
    image:
      "https://plus.unsplash.com/premium_photo-1664302700221-bd1549347986?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VyZW5nZXRpfGVufDB8fDB8fHww",
    description:
      "Witness the greatest wildlife spectacle on Earth during the Great Migration in Tanzania's most famous national park.",
    highlights: [
      "Great Migration",
      "Big Five",
      "Safari Drives",
      "Maasai Culture",
    ],
    category: "Wildlife",
    difficulty: "Easy",
  },
  {
    id: 8,
    name: "Banff National Park",
    country: "Canada",
    region: "North America",
    price: 1999,
    rating: 4.8,
    reviews: 2341,
    duration: "6 Days",
    image:
      "https://images.unsplash.com/photo-1561134643-668f9057cce4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Explore pristine wilderness, turquoise lakes, and towering peaks in Canada's first national park.",
    highlights: [
      "Mountain Lakes",
      "Hiking Trails",
      "Wildlife Viewing",
      "Photography",
    ],
    category: "Nature",
    difficulty: "Moderate",
  },
  {
    id: 9,
    name: "Santorini, Greece",
    country: "Greece",
    region: "Europe",
    price: 1299,
    rating: 4.9,
    reviews: 2847,
    duration: "7 Days",
    image:
      "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2FudG9yaW5pfGVufDB8fDB8fHww",
    description:
      "Experience the magic of Santorini with its iconic white buildings and stunning sunsets",
    highlights: ["Sunset Views", "Wine Tasting", "Beach Access"],
    included: ["Hotel", "Breakfast", "Guided Tours"],
  },
  {
    id: 10,
    name: "Bali, Indonesia",
    country: "Indonesia",
    region: "Asia",
    price: 899,
    rating: 4.8,
    reviews: 1923,
    duration: "10 Days",
    image:
      "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFsaXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Discover the cultural richness and natural beauty of Bali",
    highlights: ["Cultural Experience", "Temple Visits", "Rice Terraces"],
    included: ["Hotel", "All Meals", "Cultural Tours"],
  },
  {
    id: 11,
    name: "Swiss Alps",
    country: "Switzerland",
    region: "Europe",
    price: 1599,
    rating: 4.9,
    reviews: 3421,
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3dpc3MlMjBBbHBzfGVufDB8fDB8fHww",
    description: "Adventure awaits in the breathtaking Swiss Alps",
    highlights: ["Adventure Tours", "Mountain Views", "Hiking"],
    included: ["Mountain Lodge", "Equipment", "Guide"],
  },
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: destinations,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch destinations" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { destination, checkin, checkout, guests } = body;

    // Mock booking logic
    const booking = {
      id: Math.random().toString(36).substr(2, 9),
      destination,
      checkin,
      checkout,
      guests,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: booking,
      message: "Booking created successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
