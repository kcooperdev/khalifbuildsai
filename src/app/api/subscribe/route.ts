import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ success: true });
}

/*
// Resend implementation — disabled until RESEND_API_KEY / RESEND_AUDIENCE_ID are configured.
//
// import { Resend } from "resend";
// import { NextResponse } from "next/server";
//
// const resend = new Resend(process.env.RESEND_API_KEY);
// const audienceId = process.env.RESEND_AUDIENCE_ID!;
//
// export async function POST(request: Request) {
//   try {
//     const { email } = await request.json();
//
//     if (!email || !email.includes("@")) {
//       return NextResponse.json(
//         { error: "Valid email required" },
//         { status: 400 }
//       );
//     }
//
//     await resend.contacts.create({
//       email,
//       audienceId,
//       unsubscribed: false,
//     });
//
//     await resend.emails.send({
//       from: "Khalif <hello@kcooperdev.com>",
//       to: email,
//       subject: "Welcome — your free AI course is ready",
//       html: `
//         <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 500px; margin: 0 auto; padding: 40px 20px;">
//           <h1 style="font-size: 24px; font-weight: bold; color: #111; margin-bottom: 16px;">Welcome to kcooperdev</h1>
//           <p style="font-size: 16px; color: #444; line-height: 1.6; margin-bottom: 16px;">
//             Your free Introduction to AI course is ready. 7 lessons that take you from "what is AI?" to actually understanding how it works.
//           </p>
//           <a href="https://kcooperdev.com/academy/introduction-to-ai/what-is-ai" style="display: inline-block; background: #111; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
//             Start Lesson 1
//           </a>
//           <p style="font-size: 14px; color: #888; line-height: 1.6; margin-top: 24px;">
//             I'll also send you updates when new courses launch. No spam — just real value.
//           </p>
//           <p style="font-size: 14px; color: #888; margin-top: 16px;">
//             — Khalif
//           </p>
//         </div>
//       `,
//     });
//
//     return NextResponse.json({ success: true });
//   } catch (error: unknown) {
//     console.error("Subscribe error:", error);
//     return NextResponse.json(
//       { error: "Something went wrong. Try again." },
//       { status: 500 }
//     );
//   }
// }
*/
