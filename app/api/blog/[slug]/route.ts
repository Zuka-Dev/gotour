import { NextResponse } from "next/server";

// This would typically come from a database
const blogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to Planning Your First European Adventure",
    slug: "ultimate-guide-european-adventure",
    excerpt:
      "Discover the secrets to planning an unforgettable European vacation, from choosing the perfect itinerary to finding hidden gems off the beaten path.",
    content: `
**Ultimate Guide to Planning Your First European Adventure**

Planning your first trip to Europe can feel overwhelming with so many incredible destinations to choose from. This comprehensive guide will help you create the perfect European adventure that matches your interests, budget, and timeline.

**Choosing Your Destinations**

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

### **Peak Season (June-August)**
- **Pros**: Best weather, longest days, all attractions open
- **Cons**: Crowds, higher prices, hot temperatures in southern Europe

**Shoulder Season (April-May, September-October)**
- **Pros**: Pleasant weather, fewer crowds, moderate prices
- **Cons**: Some attractions may have limited hours

**Off Season (November-March)**
- **Pros**: Lowest prices, authentic local experience, Christmas markets
- **Cons**: Cold weather, shorter days, some attractions closed

## **Transportation Options**

### **Eurail Pass**
Perfect for covering multiple countries efficiently. Choose from:
- **Global Pass**: 33 countries, flexible duration
- **Select Pass**: 2-4 neighboring countries
- **One Country Pass**: Unlimited travel within one country

**Budget Airlines**
- Ryanair, EasyJet, Wizz Air offer cheap flights between cities
- Book early for best prices
- Factor in airport transfer costs and time

### **Rental Car**
- Best for countryside exploration
- Consider automatic vs manual transmission
- International driving permit required

## **Accommodation Strategies**

### **Hotels**
- Book directly for best rates and perks
- Consider location vs price trade-offs
- Read recent reviews carefully

### **Vacation Rentals**
- Great for longer stays and families
- Kitchen facilities save money on meals
- More authentic neighborhood experience

### **Hostels**
- Budget-friendly option with social atmosphere
- Private rooms available in many locations
- Great for meeting fellow travelers

## **Money Matters**

### **Budgeting Tips**
- **Budget travelers**: €50-80 per day
- **Mid-range**: €80-150 per day  
- **Luxury**: €150+ per day

### **Payment Methods**
- Notify banks of travel plans
- Use cards with no foreign transaction fees
- Keep some cash for small vendors and tips

## **Cultural Etiquette**

### General Tips
- Learn basic greetings in local languages
- Dress appropriately for religious sites
- Understand tipping customs (varies by country)
- Respect local dining times and customs

## **Packing Essentials**

### **Clothing**
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
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    author: "Sarah Mitchell",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Travel Guides",
    tags: ["Europe", "First Time Travel", "Planning", "Budget Travel"],
    featured: true,
    published: true,
  },
];

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const post = blogPosts.find((p) => p.slug === params.slug && p.published);

    if (!post) {
      return NextResponse.json(
        { success: false, error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: post,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}
