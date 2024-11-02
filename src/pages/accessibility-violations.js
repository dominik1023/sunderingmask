import Image from "next/image";
import localFont from "next/font/local";
import LayoutInterior from "./components/LayoutInterior";
import Divider from "./components/Divider";
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

export default function AccessibilityViolations() {
  return (
    <>
      <SEO
        title="Accessibility Violations | Understanding Critical, Serious, Moderate, and Minor Issues"
        description="Learn about different types of accessibility violations, from critical issues like broken forms to minor annoyances, and how they impact user experience and conversions."
        keywords="accessibility violations, critical violations, WCAG compliance, ADA compliance, serious violations, moderate violations, minor violations, user experience, screen readers, assistive technology"
      />
      <LayoutInterior pageTitle={"Accessibility Violations"}>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h2 className="text-3xl font-bold">
            Let&apos;s talk about your scan and accessibility violations you may
            have encountered.
          </h2>
          <article tabIndex="0">
            <h3>Critical Violations</h3>
            <p>
              These are the &quot;deal breakers.&quot; They bring the
              user&apos;s journey to a screeching halt, especially for those
              using assistive technologies like screen readers. Imagine a blind
              user who hits a roadblock and cannot move forward. These issues
              are showstoppers and create the worst user experiences, often
              resulting in frustration and lost conversions. <br />
              <br />
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>
                A form with no labels for the input fields. A screen reader user
                has no clue what to type. What if they think they&apos;re
                entering their email, but it&apos;s asking for their name? They
                leave.
              </li>
              <li>
                A button that does nothing. If your &quot;Submit&quot; button
                doesn&apos;t respond, users think your site is broken.
              </li>
              <li>
                A pop-up that can&apos;t be closed by keyboard users.
                They&apos;re stuck. Can&apos;t escape. The frustration is real
                and immediate.
              </li>
              <li>
                Images that serve as navigation (like a big &quot;Shop Now&quot;
                image) without alt text. Blind users won&apos;t know
                there&apos;s even a call to action!
              </li>
            </ul>
          </article>
          <article tabIndex="0">
            <h3>Serious Violations</h3>
            <p>
              These are significant headaches. They won&apos;t necessarily stop
              someone in their tracks, but they will make their experience
              cumbersome and frustrating. Think of these as road bumps:
              irritating enough to ruin the experience but not always fatal.
              <br />
              <br />
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>
                Links that don&apos;t look like links. A visually impaired user
                tabbing through the page won&apos;t know where they can click.
              </li>
              <li>
                Form elements without clear instructions. What does
                &quot;required&quot; mean if it&apos;s not labeled? Imagine
                entering a credit card number, only to be told “error” with no
                reason why.
              </li>
              <li>
                Poor color contrast. Maybe your &quot;Buy Now&quot; button
                blends into the background. Users with low vision can&apos;t
                even see it.
              </li>
              <li>
                Keyboard traps. For keyboard users, getting stuck in a modal
                window with no escape key means they&apos;re slamming the tab
                key, furious, and eventually giving up.
              </li>
            </ul>
          </article>
          <article tabIndex="0">
            <h3>Moderate Violations</h3>
            <p>
              These issues are like the tiny annoyances that stack up. Users can
              get past them, but the more they encounter, the more likely they
              are to abandon their visit altogether. It&apos;s the equivalent of
              a slow-loading website: not bad enough to crash, but enough to
              drive users away over time.
              <br />
              <br />
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>
                Misusing headings. If a user relies on screen readers to
                navigate and you skip from Heading 2 to Heading 5, it&apos;s
                like skipping pages in a book. They lose context.
              </li>
              <li>
                Redundant link text like “Click here.” What are they clicking?
                Where is &quot;here&quot;? It forces users to rely on guesswork.
              </li>
              <li>
                Forms that are visually cluttered without clear focus
                indicators. Keyboard users struggle to know which field
                they&apos;re typing in next.
              </li>
              <li>
                Pop-ups without focus management. When a pop-up opens, users
                with disabilities might not know it&apos;s there, or worse, they
                can&apos;t get back to where they were.
              </li>
            </ul>
          </article>
          <article tabIndex="0">
            <h3>Minor Violations</h3>
            <p>
              These are the little things. They won&apos;t derail the whole
              experience, but they can create friction points that chip away at
              the overall user satisfaction. It&apos;s like having a slightly
              squeaky door – tolerable, but eventually annoying.
              <br />
              <br />
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>
                Using placeholder text as a form label. Looks pretty, but as
                soon as users start typing, the hint disappears, and now
                they&apos;ve forgotten what they were supposed to input.
              </li>
              <li>
                Skipping heading levels. Instead of a neat outline, the
                structure feels a bit jumbled. Not a disaster, but it
                doesn&apos;t help anyone understand the content flow.
              </li>
              <li>
                Too much alt text on decorative images. Sure, you&apos;ve
                described it all, but now screen readers have to read through
                unnecessary details, like describing every flourish in your
                logo.
              </li>
              <li>
                Overuse of ARIA roles. While ARIA can enhance accessibility, if
                used wrong, it complicates the experience for users relying on
                screen readers.
              </li>
            </ul>
          </article>
          <div></div>
        </main>
      </LayoutInterior>
    </>
  );
}
