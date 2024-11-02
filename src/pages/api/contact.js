// import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // if (req.method === "POST") {
  //   const { name, email, message } = req.body;
  //   // Configure nodemailer transporter
  //   const transporter = nodemailer.createTransport({
  //     service: "Gmail", // Change based on your email service
  //     auth: {
  //       user: process.env.EMAIL_USER, // Your email
  //       pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  //     },
  //   });
  //   try {
  //     // Sending email using nodemailer
  //     await transporter.sendMail({
  //       from: email,
  //       to: process.env.EMAIL_USER, // Where the emails will be sent
  //       subject: `Contact form submission from ${name}`,
  //       text: message,
  //       html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  //     });
  //     res.status(200).json({ status: "Message sent successfully!" });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ status: "Failed to send message!" });
  //   }
  // } else {
  //   // Handle any other HTTP method
  //   res.setHeader("Allow", ["POST"]);
  //   res.status(405).end(`Method ${req.method} Not Allowed`);
  // }
}
