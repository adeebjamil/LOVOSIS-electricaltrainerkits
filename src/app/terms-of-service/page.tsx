import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-20">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900">Terms of Service</h1>
        
        <div className="prose prose-neutral max-w-none text-neutral-600">
          <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <p className="mb-6">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website operated by Lovosis Technology Private Limited ("us", "we", or "our").
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">1. Conditions of Use</h2>
          <p className="mb-4">
            We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">2. Intellectual Property</h2>
          <p className="mb-4">
            Content published on this website (digital downloads, images, texts, graphics, logos) is the property of Lovosis Technology Private Limited and/or its content creators and protected by international copyright laws.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">3. Communications</h2>
          <p className="mb-4">
            The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">4. Applicable Law</h2>
          <p className="mb-6">
            By visiting this website, you agree that the laws of India, without regard to principles of conflict laws, will govern these Terms of Service, or any dispute of any sort that might come between Lovosis Technology Private Limited and you, or its business partners and associates.
          </p>
          
          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">5. Contact Info</h2>
          <p>
            If you have any questions about these Terms, please contact us at{' '}
            <a href="mailto:info@lovosis.in" className="text-red-600 hover:underline">info@lovosis.in</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
