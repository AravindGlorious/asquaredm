import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SEO from '@/components/common/SEO';

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Read the terms and conditions for using A Square Digital Marketing's website and services."
        canonical="https://asquaredigitalmarketing.com/terms"
      />
      <Header />
      
      <section className="py-16 xl:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl xl:text-5xl font-bold mb-8">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using the website of A Square Digital Marketing ("Company", "we", "our", or "us"), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services</h2>
              <p className="text-muted-foreground">
                A Square Digital Marketing provides digital marketing services including but not limited to SEO, PPC advertising, performance marketing, content marketing, lead generation, social media marketing, conversion rate optimization, and local SEO services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Use of Website</h2>
              <p className="text-muted-foreground mb-4">
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behaviour includes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Harassing or causing distress or inconvenience to any person</li>
                <li>Transmitting obscene or offensive content</li>
                <li>Disrupting the normal flow of dialogue within our website</li>
                <li>Attempting to gain unauthorised access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                The content on this website, including but not limited to text, graphics, logos, images, and software, is the property of A Square Digital Marketing and is protected by UK and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Service Terms</h2>
              <p className="text-muted-foreground mb-4">
                When you engage our services, the following terms apply:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Services are provided on a month-to-month basis unless otherwise agreed</li>
                <li>Payment terms will be specified in your service agreement</li>
                <li>Either party may terminate services with 30 days' written notice</li>
                <li>We reserve the right to refuse service to anyone for any reason</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Results and Guarantees</h2>
              <p className="text-muted-foreground">
                While we strive to deliver excellent results, digital marketing outcomes can vary based on numerous factors including market conditions, competition, and client cooperation. We do not guarantee specific results, rankings, or revenue increases. All projections and estimates are provided in good faith but should not be considered guarantees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                Clients agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Grant necessary access to accounts and platforms</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in practices that could harm our reputation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, A Square Digital Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless A Square Digital Marketing from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. We recommend reviewing the terms and privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Modifications to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our website or services after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:info@asquaredigitalmarketing.com" className="text-primary hover:underline">info@asquaredigitalmarketing.com</a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Terms;
