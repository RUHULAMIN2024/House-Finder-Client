import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone, Globe } from "lucide-react";
import NMContainer from "@/components/ui/core/NMContainer";

const AboutUs = () => {
  return (
    <NMContainer>
      <div className="mx-auto py-12 space-y-8">
        <Card className="shadow-lg rounded-2xl border border-gray-200">
          <CardHeader className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              About BasaFinder 🏡
            </h1>
            <p className="text-gray-600 mt-2">
              Smart Rental & Housing Solution designed to simplify your rental
              experience.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600 mt-2">
                To revolutionize the rental housing experience by connecting
                landlords and tenants seamlessly, ensuring a smooth and
                efficient process for all. We aim to reduce the stress of
                finding a rental home while ensuring transparency, security, and
                convenience for everyone involved.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">
                Our Vision
              </h2>
              <p className="text-gray-600 mt-2">
                A world where finding a rental home is effortless, transparent,
                and secure for both landlords and tenants. We envision a
                platform that empowers users with technology-driven solutions,
                making the rental process smoother and more efficient.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">
                Core Values
              </h2>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                <li>
                  <strong>Transparency:</strong> Clear and honest communication
                  between landlords and tenants, ensuring fair and trustworthy
                  transactions.
                </li>
                <li>
                  <strong>Efficiency:</strong> Fast, seamless, and user-friendly
                  rental processes, reducing hassle and saving time.
                </li>
                <li>
                  <strong>Security:</strong> Ensuring safe transactions,
                  protecting user data, and maintaining confidentiality at all
                  levels.
                </li>
                <li>
                  <strong>Innovation:</strong> Continuously improving our
                  platform to meet modern rental needs, integrating the latest
                  technologies to enhance user experience.
                </li>
                <li>
                  <strong>Customer-Centric Approach:</strong> We prioritize our
                  users, striving to offer the best service and support at every
                  step of their rental journey.
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">
                Get in Touch
              </h2>
              <p className="text-gray-600 mt-2">
                We’d love to hear from you! Whether you have questions,
                feedback, or need support, our team is always ready to assist.
                Reach out to us through the following channels:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-700" /> Email:
                  support@basafinder.com
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-700" /> Phone: +880 1234
                  567 890
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-700" /> Website:
                  www.basafinder.com
                </div>
                <p className="text-gray-600 mt-2">
                  Stay connected with us and be a part of the future of smart
                  rental solutions!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </NMContainer>
  );
};

export default AboutUs;
