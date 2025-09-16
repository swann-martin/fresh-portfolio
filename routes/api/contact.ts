import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    try {
      const formData = await req.formData();
      const name = formData.get("name")?.toString();
      const email = formData.get("email")?.toString();
      const message = formData.get("message")?.toString();

      // Basic validation
      if (!name || !email || !message) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "All fields are required"
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Please enter a valid email address"
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      // Log the submission for debugging
      console.log("Contact form submission:", { name, email, message });

      // Create mailto URL with pre-filled content
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoUrl = `mailto:contact@swannmartin.xyz?subject=${subject}&body=${body}`;

      return new Response(
        JSON.stringify({
          success: true,
          message: "Your email client will open with the message ready to send!",
          mailtoUrl: mailtoUrl
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );

    } catch (error) {
      console.error("Contact form error:", error);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Something went wrong. Please try again later."
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
  }
};