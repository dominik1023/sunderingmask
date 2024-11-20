import Image from "next/image";
import LayoutInterior from "./components/LayoutInterior";
import SEO from "./components/SEO";
// import faqData from "./components/data/faq.json";
import Link from "next/link";

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQs: Everything You Need to Know About Our Organic Sourdough Bread"
        description="Find answers to common questions about our organic sourdough bread, including ingredients, health benefits, sustainability, and ordering information. Learn why our bread is healthier, tastier, and better for the planet."
        keywords="FAQs organic sourdough bread, sourdough bread health benefits, organic baking FAQs, Celtic salt sourdough, organic flour bread, artisan bread questions, sustainable bread FAQs, how to store sourdough, sourdough bread ingredients, ordering organic bread."
      />
      <LayoutInterior pageTitle={"Frequently Asked Questions"}>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h2 className="text-3xl font-bold">
            We understand that you may have questions about our services,
            processes, and policies
          </h2>
          <h3>General Questions</h3>
          <ul>
            <li className="question">What makes your sourdough bread organic?</li>
            <li className="answer">Our sourdough bread is made with 100% organic ingredients, including organic flour, Celtic salt, and a naturally cultured starter. We avoid synthetic additives, preservatives, and pesticides to ensure our bread is as pure and natural as possible.</li>
          </ul>
          <ul>
            <li className="question">Why is sourdough bread healthier than regular bread?</li>
            <li className="answer">Sourdough bread undergoes a slow fermentation process, which breaks down gluten and starches, making it easier to digest. It also has a lower glycemic index and higher nutrient availability compared to mass-produced bread.</li>
          </ul>
          <ul>
            <li className="question">What is Celtic salt, and why do you use it?</li>
            <li className="answer">Celtic salt is an unrefined sea salt rich in natural minerals. We use it for its superior flavor and nutritional benefits, which enhance the taste and quality of our bread.</li>
          </ul>
          <ul>
            <li className="question">Is your bread gluten-free?</li>
            <li className="answer">Our bread is not gluten-free but is often easier to digest due to the fermentation process. If you have celiac disease, we recommend avoiding our bread.</li>
          </ul>         
          <h3>Ingredients and Process</h3>
          <ul>
            <li className="question">What types of flour do you use?</li>
            <li className="answer">We use organic flours such as unbleached white, whole wheat, rye, and spelt. Each type of flour is carefully selected to provide unique flavors and nutritional benefits.</li>
          </ul>
          <ul>
            <li className="question">Do you use any preservatives or additives?</li>
            <li className="answer">No, our bread contains no preservatives, artificial flavors, or additives. It&apos;s made with only natural, organic ingredients.</li>
          </ul>
          <ul>
            <li className="question">How long does the fermentation process take?</li>
            <li className="answer">Our bread ferments for 12 to 48 hours, depending on the recipe. This slow process enhances flavor and improves digestibility.</li>
          </ul>
          <ul>
            <li className="question">Do you use commercial yeast in your bread?</li>
            <li className="answer">No, our sourdough bread relies solely on wild yeast from our naturally cultured starter, giving it its characteristic tang and texture.</li>
          </ul>          
          <h3>Health and Nutrition</h3>
          <ul>
            <li className="question">Is sourdough bread suitable for people with dietary restrictions?</li>
            <li className="answer">Sourdough bread is often more digestible for people with mild gluten sensitivities, but it&apos;s not gluten-free. It&apos;s also a great choice for those seeking lower-glycemic options.</li>
          </ul> 
          <ul>
            <li className="question">How does sourdough bread support gut health?</li>
            <li className="answer">The fermentation process creates probiotics and reduces phytic acid, which can enhance nutrient absorption and promote a healthy gut.</li>
          </ul> 
          <ul>
            <li className="question">What are the nutritional benefits of your bread?</li>
            <li className="answer">Our bread is rich in natural nutrients like B vitamins, magnesium, and zinc. It contains no harmful residues or chemicals, ensuring a clean and nourishing option.</li>
          </ul> 
          <h3>Sustainability and Philosophy</h3>
          <ul>
            <li className="question">Why do you focus on organic baking?</li>
            <li className="answer">We believe organic baking is better for your health and the planet. By choosing organic, we support sustainable farming practices and avoid harmful chemicals.</li>
          </ul> 
          <ul>
            <li className="question">How does organic bread differ from store-bought bread?</li>
            <li className="answer">Organic bread is made with pure ingredients and traditional methods, resulting in richer flavor, better nutrition, and no artificial additives. Store-bought bread often contains preservatives and highly processed ingredients.</li>
          </ul> 
          <ul>
            <li className="question">Are your packaging materials eco-friendly?</li>
            <li className="answer">Yes, we use recyclable and biodegradable packaging to minimize our environmental impact.</li>
          </ul> 
          <h3>Storing</h3>
          <ul>
            <li className="question">How should I store your sourdough bread?</li>
            <li className="answer">To keep your bread fresh, store it in a breathable bag or wrapped in a tea towel at room temperature. For longer storage, freeze it in an airtight bag.</li>
          </ul> 
          <ul>
            <li className="question">How long does your bread stay fresh?</li>
            <li className="answer">Our bread stays fresh for 2 to 3 days at room temperature. It can be frozen for up to 3 months and reheated for optimal flavor.</li>
          </ul>           
          <ul>
            <li className="question">Can I toast or reheat sourdough bread?</li>
            <li className="answer">Absolutely! Toasting or warming sourdough bread enhances its flavor and texture. Try it with butter or your favorite spread for a delicious treat.</li>
          </ul>
          <h3>Ordering and Availability</h3>
          <ul>
            <li className="question">Where can I buy your sourdough bread?</li>
            <li className="answer">You can purchase our bread directly from our website, however, we will not ship at this time - it's local pickup only.</li>
          </ul>
          <ul>
            <li className="question">Do you ship your bread?</li>
            <li className="answer">Yes, we offer nationwide shipping. Orders are baked fresh and shipped to ensure maximum freshness upon arrival.</li>
          </ul>
          <ul>
            <li className="question">Can I place a custom order?</li>
            <li className="answer">Yes, we take custom orders for events or specific dietary preferences. Contact us directly to discuss your needs.</li>
          </ul>          
          <ul>
            <li className="question">What is your return policy?</li>
            <li className="answer">If you&apos;re unsatisfied with your order, please contact us within 24 hours. We&apos;re happy to address any concerns or provide a replacement.</li>
          </ul>

 

        </main>
      </LayoutInterior>
    </>
  );
}
