import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, goal, message } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // TODO: Integrate an email service (e.g., Resend, SendGrid, Nodemailer)
    // For now, log the submission and return success
    console.log("Contact form submission:", { name, email, phone, goal, message });

    return NextResponse.json(
      { message: "Your request has been received. We will contact you within 24 hours." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
