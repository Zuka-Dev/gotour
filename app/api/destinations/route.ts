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
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Geirangerfjord_Norway.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Kyoto_Daidoku-ji_Temple_Sakura.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/7/71/Perito_Moreno_Glacier_01.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Tuscany_landscape.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Raja_Ampat_underwater_scene.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Loch_Ness_Castle_and_Loch.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Serengeti_Migration.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Moraine_Lake_05.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Santorini_Oia_sunset.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Tegallalang_rice_terrace_Bali.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Swiss_Alps_scenery.jpg",
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
