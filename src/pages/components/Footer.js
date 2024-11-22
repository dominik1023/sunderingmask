import Image from "next/image";
import Link from "next/link";

export default function Footer({ children }) {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer
      style={{ backgroundColor: "#444" }}
      className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
    >
      <div>
        <br />
        <br />

        <p>
          <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link href="/accessibility-statement">Accessibility Statement</Link>{" "}
          &copy;
          {currentYear} White House Bakery of Baytown, LLC. All Rights
          Reserved.
        </p>
        <br />
        <br />

        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
      </div>
      <style jsx>{`
        p {
          color: #fff;
        }
      `}</style>
    </footer>
  );
}
