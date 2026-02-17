import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-20">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900">Privacy Policy</h1>
        
        <div className="prose prose-neutral max-w-none text-neutral-600">
          <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <p className="mb-6">
            Lovosis Technology Private Limited ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you strictly provide to us voluntarily, such as when you fill out a contact form, request a quote, or sign up for our newsletter. 
            This may include your name, email address, phone number, and institution details.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>To provide and maintain our services.</li>
            <li>To notify you about changes to our products or services.</li>
            <li>To allow you to participate in interactive features of our service.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our service.</li>
          </ul>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">3. Data Security</h2>
          <p className="mb-6">
            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. 
            But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
          </p>

          <h2 className="text-xl font-bold text-neutral-900 mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at{' '}
            <a href="mailto:info@lovosis.in" className="text-red-600 hover:underline">info@lovosis.in</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
