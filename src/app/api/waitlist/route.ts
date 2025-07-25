import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { supabase } from "@/lib/supabase";
import WaitlistConfirmationEmail from "@/components/emails/WaitlistConfirmationEmail";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // 1. First save the email to Supabase
    const { error: supabaseError } = await supabase
      .from("waitlist")
      .insert([{ email, created_at: new Date().toISOString() }]);

    // Handle case where email already exists in the waitlist
    if (supabaseError) {
      if (supabaseError.code === "23505") {
        // PostgreSQL unique constraint violation code
        return NextResponse.json(
          { error: "This email is already on the waitlist" },
          { status: 400 }
        );
      } else {
        console.error("Supabase error:", supabaseError);
        return NextResponse.json(
          { error: "Failed to add to waitlist" },
          { status: 500 }
        );
      }
    }

    // 2. Send confirmation email with Resend
    const { error: emailError } = await resend.emails.send({
      from: "9lives <noreply@9livesapp.com>",
      to: email,
      subject: `Welcome to the 9lives Waitlist!`,
      react: WaitlistConfirmationEmail({ email }),
    });

    if (emailError) {
      console.error("Resend error:", emailError);
      // Note: We don't return an error here as the user is already added to the waitlist
      // We just log the error and continue
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Failed to process waitlist submission" },
      { status: 500 }
    );
  }
}
