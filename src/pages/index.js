import Image from "next/image";
import LayoutHome from "./components/LayoutHome";
import localFont from "next/font/local";
import InfoCard from "./components/InfoCard";

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

export default function Home() {
  return (
    <LayoutHome>
      <div
        className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] 

      min-h-screen font-[family-name:var(--font-geist-sans)]`}
      >
        <main className="flex flex-col items-center sm:items-start">
          {/* <div className="container mx-auto px-4 hero-content text-center"> */}
          <div className="container max-w-screen-xl mx-auto px-4 hero-content text-center">
            <h1 className="text-4xl font-bold text-center text-gray-900 mt-8">
              Your Trusted Partner in Accessibility Compliance
            </h1>

            <p>
              <strong>You don't have to stress over ADA compliance. </strong>
              With our personalized solutions, you’ll quickly meet WCAG 2.1
              standards while ensuring your website is user-friendly for
              everyone. Let us handle the details so you can focus on your
              business, with full peace of mind.
            </p>
            <br />
            <br />
            <div className="flex flex-wrap justify-center gap-6 items-stretch">
              <InfoCard
                imgSrc="/images/usability.png"
                headline="Enhance Your Website’s Usability"
                paragraph="Give all users, including those with disabilities, a seamless browsing experience. By improving accessibility, you’ll make your site easier to navigate, creating a better experience that keeps visitors engaged and loyal. The result? More satisfied users and higher conversion rates."
                cta={{ href: "/services", text: "Learn More" }}
              />
              <InfoCard
                imgSrc="/images/law.png"
                headline="Stay Safe from Lawsuits"
                paragraph="Protect your business by avoiding costly lawsuits with our ADA compliance services. We ensure your website meets WCAG 2.1 guidelines, helping you avoid legal risks and costly fines. You can focus on growing your business, knowing that your compliance is covered."
                cta={{ href: "/legal-compliance", text: "Ensure Compliance" }}
              />
              <InfoCard
                imgSrc="/images/edge.png"
                headline="Gain a Competitive Edge"
                paragraph="Set yourself apart from competitors by making your site accessible to everyone. A compliant website not only increases your reach but also positions you as an inclusive brand. Let accessibility be your secret to winning more customers and standing out in your industry."
                cta={{ href: "/competition", text: "Get Started" }}
              />
            </div>
            <p>
              user experience, legal risk avoidance, stand out from your
              competition
            </p>
            <p>remediation, monitoring, training</p>
            <p>solutions - web components</p>
          </div>
        </main>
      </div>
    </LayoutHome>
  );
}
