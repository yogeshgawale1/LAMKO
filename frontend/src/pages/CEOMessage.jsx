import React from 'react';
import { Card, CardContent } from '../components/ui/card';

export const CEOMessage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center">
            CEO Message
          </h1>
        </div>
      </section>

      {/* CEO Message Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                {/* CEO Photo - 2 columns */}
                <div className="md:col-span-2 relative">
                  <img
                    src="https://customer-assets.emergentagent.com/job_lamko-emergent/artifacts/l4lbl2e4_7.jpg"
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
                </div>

                {/* Message Content - 3 columns */}
                <div className="md:col-span-3 p-8 md:p-12 lg:p-16">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Dear Valued Partners and Stakeholders,
                    </h2>
                  </div>

                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p className="text-xl font-semibold text-orange-600 mb-6">
                      새해 복 많이 받으세요. (Saehae bok mani badeuseyo.)
                    </p>

                    <p>
                      As we stand at the beginning of a new and promising year, I extend my warmest greetings and excitement for the innovative journey ahead.
                    </p>

                    <p>
                      In an era defined by rapid technological transformation, the demand for advanced materials that power the semiconductors and displays of tomorrow has never been greater. At LAMKO, headquartered in the heart of Seoul's innovation ecosystem, we have been established with a critical mission: to be the essential catalyst that transforms pioneering Korean R&D into commercial success.
                    </p>

                    <p>
                      Our core philosophy is built on deep collaboration. By working directly with tiers 2 and global technology leaders, we ensure that every project is driven by tangible market needs. Through our integrated CRO, CMO, and CRDMO services, we specialize in perfecting the most complex and high-value stages of development, process intensification, and challenging purification to deliver electronics-grade materials that meet the world's most stringent standards.
                    </p>

                    <p>
                      We focus on the critical front-end innovation, delivering a seamless, pre-validated pipeline of advanced projects that are thoroughly optimized for yield, cost, and scalability, ready for successful mass production.
                    </p>

                    <p>
                      As we step forward into this new year, we are energized by the opportunity to build lasting partnerships. We are committed to being your trusted innovation gateway, accelerating the future of technology together.
                    </p>

                    <p className="font-semibold text-gray-900">
                      We look forward to achieving great things with you.
                    </p>

                    {/* Signature */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <img
                        src="https://customer-assets.emergentagent.com/job_lamko-emergent/artifacts/vjhfvuqu_Signature.jpg"
                        alt="CEO Signature"
                        className="h-16 mb-2"
                      />
                      <div className="text-gray-900 font-semibold">
                        <p className="text-lg">Chief Executive Officer</p>
                        <p className="text-xl">LAMKO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 italic">
            "Your trusted innovation gateway, accelerating the future of technology together."
          </blockquote>
        </div>
      </section>
    </div>
  );
};
