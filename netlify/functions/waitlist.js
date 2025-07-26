// Full waitlist function with Supabase and Resend email functionality
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async function(event, context) {
  // Set CORS headers for all responses
  const headers = {
    "Access-Control-Allow-Origin": "*", // Or your specific domain
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };
  
  // Handle OPTIONS requests (CORS preflight)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: ""
    };
  }
  
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const email = body.email;
    
    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid email address" })
      };
    }
    
    // 1. Save the email to Supabase
    const { error: supabaseError } = await supabase
      .from("waitlist")
      .insert([{ email, created_at: new Date().toISOString() }]);

    // Handle case where email already exists in the waitlist
    if (supabaseError) {
      if (supabaseError.code === "23505") { // PostgreSQL unique constraint violation
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: "This email is already on the waitlist" })
        };
      } else {
        console.error("Supabase error:", supabaseError);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ error: "Failed to add to waitlist" })
        };
      }
    }

    // 2. Send confirmation email
    try {
      await resend.emails.send({
        from: "9lives <noreply@9livesapp.com>",
        to: email,
        subject: "Welcome to the 9lives Waitlist!",
        html: `
          <div style="font-family: sans-serif; color: #333;">
            <h1>Welcome to the 9lives Waitlist!</h1>
            <p>Thank you for joining our waitlist. We're excited to have you on board!</p>
            <p>We'll keep you updated on our progress and let you know when you can access the app.</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Resend error:", emailError);
      // We don't fail the request if email sending fails
    }
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error("Error processing waitlist request:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to process waitlist submission" })
    };
  }
}
