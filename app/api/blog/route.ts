import { NextResponse } from "next/server";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
}

// Mock blog posts database
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Ultimate Guide to Planning Your First European Adventure",
    slug: "ultimate-guide-european-adventure",
    excerpt:
      "Discover the secrets to planning an unforgettable European vacation, from choosing the perfect itinerary to finding hidden gems off the beaten path.",
    content: `
# Ultimate Guide to Planning Your First European Adventure

Planning your first trip to Europe can feel overwhelming with so many incredible destinations to choose from. This comprehensive guide will help you create the perfect European adventure that matches your interests, budget, and timeline.

## Choosing Your Destinations

Europe offers an incredible diversity of experiences, from the romantic canals of Venice to the vibrant nightlife of Berlin. Here's how to narrow down your choices:

### Consider Your Interests
- **History buffs**: Rome, Athens, Prague, Vienna
- **Art lovers**: Paris, Florence, Amsterdam, Madrid
- **Nature enthusiasts**: Swiss Alps, Norwegian fjords, Scottish Highlands
- **Food and wine**: Tuscany, Bordeaux, Barcelona, Lyon

### Plan Your Route Efficiently
- Start with 2-3 countries for a first trip
- Consider geographical proximity to minimize travel time
- Factor in transportation connections between cities

## Best Time to Visit

### Peak Season (June-August)
- **Pros**: Best weather, longest days, all attractions open
- **Cons**: Crowds, higher prices, hot temperatures in southern Europe

### Shoulder Season (April-May, September-October)
- **Pros**: Pleasant weather, fewer crowds, moderate prices
- **Cons**: Some attractions may have limited hours

### Off Season (November-March)
- **Pros**: Lowest prices, authentic local experience, Christmas markets
- **Cons**: Cold weather, shorter days, some attractions closed

## Transportation Options

### Eurail Pass
Perfect for covering multiple countries efficiently. Choose from:
- **Global Pass**: 33 countries, flexible duration
- **Select Pass**: 2-4 neighboring countries
- **One Country Pass**: Unlimited travel within one country

### Budget Airlines
- Ryanair, EasyJet, Wizz Air offer cheap flights between cities
- Book early for best prices
- Factor in airport transfer costs and time

### Rental Car
- Best for countryside exploration
- Consider automatic vs manual transmission
- International driving permit required

## Accommodation Strategies

### Hotels
- Book directly for best rates and perks
- Consider location vs price trade-offs
- Read recent reviews carefully

### Vacation Rentals
- Great for longer stays and families
- Kitchen facilities save money on meals
- More authentic neighborhood experience

### Hostels
- Budget-friendly option with social atmosphere
- Private rooms available in many locations
- Great for meeting fellow travelers

## Money Matters

### Budgeting Tips
- **Budget travelers**: €50-80 per day
- **Mid-range**: €80-150 per day  
- **Luxury**: €150+ per day

### Payment Methods
- Notify banks of travel plans
- Use cards with no foreign transaction fees
- Keep some cash for small vendors and tips

## Cultural Etiquette

### General Tips
- Learn basic greetings in local languages
- Dress appropriately for religious sites
- Understand tipping customs (varies by country)
- Respect local dining times and customs

## Packing Essentials

### Clothing
- Comfortable walking shoes (broken in!)
- Layers for changing weather
- One dressy outfit for nice restaurants
- Rain jacket or umbrella

### Electronics
- Universal power adapter
- Portable charger
- Phone with international plan or local SIM

### Documents
- Passport (valid 6+ months)
- Travel insurance documents
- Copies of important documents (stored separately)
- Emergency contact information

## Safety and Health

### Stay Safe
- Register with your embassy
- Keep copies of documents in multiple locations
- Use hotel safes for valuables
- Stay aware of common tourist scams

### Health Preparations
- Check if vaccinations are needed
- Bring prescription medications in original containers
- Consider travel insurance with medical coverage
- Know emergency numbers for each country

## Making the Most of Your Trip

### Cultural Immersion
- Take a cooking class or food tour
- Attend local festivals or events
- Use public transportation like a local
- Learn about local history and customs

### Photography Tips
- Research iconic viewpoints in advance
- Wake up early for golden hour shots
- Respect photography restrictions
- Don't forget to put the camera down and enjoy the moment

## Common Mistakes to Avoid

1. **Over-packing your itinerary** - Allow time to wander and discover
2. **Not booking accommodations in advance** - Especially during peak season
3. **Ignoring local customs** - Research cultural norms beforehand
4. **Relying only on tourist areas** - Venture into local neighborhoods
5. **Not having backup plans** - Weather and strikes can disrupt plans

## Conclusion

Your first European adventure should be exciting, not stressful. Start planning early, do your research, but also leave room for spontaneity. Europe's excellent infrastructure makes it forgiving for first-time visitors, so don't be afraid to step out of your comfort zone.

Remember, this is just the beginning of your European journey. Each trip will teach you something new and inspire your next adventure. Safe travels!
    `,
    image: "european travel guide with famous landmarks and scenic views",
    author: "Sarah Mitchell",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Travel Guides",
    tags: ["Europe", "First Time Travel", "Planning", "Budget Travel"],
    featured: true,
    published: true,
  },
  {
    id: 2,
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    slug: "hidden-gems-southeast-asia",
    excerpt:
      "Explore lesser-known destinations in Southeast Asia that offer incredible experiences away from the crowds.",
    content: "Full article content for hidden gems in Southeast Asia...",
    image: "hidden temples and pristine beaches in southeast asia",
    author: "Emma Chen",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Destinations",
    tags: ["Southeast Asia", "Hidden Gems", "Off the Beaten Path"],
    featured: false,
    published: true,
  },
  {
    id: 3,
    title: "Sustainable Travel: How to Explore Responsibly",
    slug: "sustainable-travel-guide",
    excerpt:
      "Learn how to minimize your environmental impact while maximizing your travel experiences.",
    content: "Full article content for sustainable travel...",
    image: "eco-friendly travel with sustainable tourism practices",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Sustainable Travel",
    tags: ["Sustainable Travel", "Eco-Tourism", "Responsible Travel"],
    featured: false,
    published: true,
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const limit = searchParams.get("limit");
    const search = searchParams.get("search");

    let filteredPosts = blogPosts.filter((post) => post.published);

    // Filter by category
    if (category && category !== "all") {
      filteredPosts = filteredPosts.filter(
        (post) => post.category.toLowerCase().replace(/\s+/g, "-") === category
      );
    }

    // Filter by featured
    if (featured === "true") {
      filteredPosts = filteredPosts.filter((post) => post.featured);
    }

    // Search functionality
    if (search) {
      const searchTerm = search.toLowerCase();
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.excerpt.toLowerCase().includes(searchTerm) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Limit results
    if (limit) {
      filteredPosts = filteredPosts.slice(0, Number.parseInt(limit));
    }

    // Sort by date (newest first)
    filteredPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return NextResponse.json({
      success: true,
      data: filteredPosts,
      total: filteredPosts.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const postData = await request.json();

    // Validate required fields
    const requiredFields = [
      "title",
      "excerpt",
      "content",
      "author",
      "category",
    ];
    const missingFields = requiredFields.filter((field) => !postData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Create new blog post
    const newPost: BlogPost = {
      id: Math.max(...blogPosts.map((p) => p.id)) + 1,
      slug: postData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
      date: new Date().toISOString().split("T")[0],
      readTime: `${Math.ceil(
        postData.content.split(" ").length / 200
      )} min read`,
      tags: postData.tags || [],
      featured: postData.featured || false,
      published: postData.published !== false,
      ...postData,
    };

    blogPosts.push(newPost);

    return NextResponse.json({
      success: true,
      data: newPost,
      message: "Blog post created successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
