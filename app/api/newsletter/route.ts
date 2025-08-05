import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, error: "Valid email is required" }, { status: 400 })
    }

    // Mock newsletter subscription logic
    // In a real app, you'd save this to a database or send to an email service
    console.log("Newsletter subscription:", email)

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter",
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to subscribe" }, { status: 500 })
  }
}
