import { NextResponse } from "next/server";

interface BookingData {
  // Trip Details
  destination: string;
  departureDate: string;
  returnDate: string;
  travelers: string;
  tripType: string;
  budget: string;

  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;

  // Travel Preferences
  accommodationType: string;
  roomType: string;
  mealPreferences: string;
  specialRequests: string;
  travelInsurance: boolean;

  // Emergency Contact
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelation: string;
}

// Mock database - in production, use a real database
const bookings: (BookingData & {
  id: string;
  createdAt: string;
  status: string;
})[] = [];

export async function POST(request: Request) {
  try {
    const bookingData: BookingData = await request.json();

    // Validate required fields
    const requiredFields = [
      "destination",
      "departureDate",
      "returnDate",
      "travelers",
      "firstName",
      "lastName",
      "email",
      "phone",
    ];
    const missingFields = requiredFields.filter(
      (field) => !bookingData[field as keyof BookingData]
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bookingData.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create booking record
    const booking = {
      id: Math.random().toString(36).substr(2, 9),
      ...bookingData,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    // Save to mock database
    bookings.push(booking);

    // In production, you would:
    // 1. Save to database
    // 2. Send confirmation email to customer
    // 3. Send notification to travel agents
    // 4. Create calendar events
    // 5. Set up follow-up reminders

    console.log("New booking received:", booking);

    return NextResponse.json({
      success: true,
      data: {
        bookingId: booking.id,
        message: "Booking request submitted successfully",
        nextSteps: [
          "Our travel experts will review your request within 24 hours",
          "You'll receive a confirmation email shortly",
          "We'll contact you to discuss your custom itinerary",
          "A detailed proposal will be sent for your approval",
        ],
      },
    });
  } catch (error) {
    console.error("Booking submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit booking request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return all bookings (in production, add authentication and pagination)
    return NextResponse.json({
      success: true,
      data: bookings,
      total: bookings.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
