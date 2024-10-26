import { useState } from "react";
import LayoutInterior from "./components/LayoutInterior";
import Image from "next/image";
import localFont from "next/font/local";
import SEO from "./components/SEO";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.status === 200) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        setResponseMessage(result.status || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <SEO
        title="FAQ | Privacy and Confidentiality in ADA Compliance Services"
        description=""
        keywords=""
      />

      <LayoutInterior pageTitle="Contact Us">
        <h2 className="text-3xl font-bold">Drop Us a Line</h2>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-lg"
        >
          <label htmlFor="name" className="text-lg font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />

          <label htmlFor="email" className="text-lg font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          />

          <label htmlFor="message" className="text-lg font-semibold">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            required
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition mt-4 ${
              isSubmitting ? "opacity-50" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Response Message */}
        {responseMessage && <p className="mt-4 text-lg">{responseMessage}</p>}

        {/* Contact Info */}
        {/* <div className="mt-8 text-center sm:text-left">
          <h3 className="text-2xl font-semibold">Our Office</h3>
          <p className="mt-4">123 Accessibility St.</p>
          <p>Somewhere, Earth</p>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: +123-456-7890</p>
        </div> */}

        {/* Optional Map or Image */}
        {/* <div className="mt-8">
          <Image
            src="/images/office_location.jpg"
            alt="Office Location"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div> */}
      </LayoutInterior>
    </>
  );
}
