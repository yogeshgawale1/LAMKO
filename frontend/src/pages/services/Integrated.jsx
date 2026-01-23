import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const Integrated = () => {
  const benefits = [
    "Complete R&D to manufacturing integration",
    "Seamless technology transfer and scale-up",
    "Reliable supply chain delivery",
    "Single partner for entire value chain",
    "Reduced project risk and timelines",
    "Cost-effective end-to-end solution"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 bg-orange-600 rounded-full text-sm font-semibold mb-4">
            CRDMO - Contract Research, Development & Manufacturing Organization
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Integrated Materials Solutions
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            End-to-end partnership from initial material development through scalable manufacturing and reliable supply chain delivery.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Zap className="w-16 h-16 text-orange-600 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Complete Value Chain Partnership
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our CRDMO model combines research, development, and manufacturing under one roof. From concept to commercial delivery, we provide a seamless, integrated solution that reduces risk and accelerates time-to-market.
              </p>
            </div>
            <div>
              <img
                src="https://customer-assets.emergentagent.com/job_lamko-b2b/artifacts/syp9zdec_CRDMO2.png"
                alt="Integrated Solutions"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Process Flow */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Integrated Approach
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-orange-600 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-orange-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Research & Development
                  </h3>
                  <p className="text-gray-600">
                    Material formulation, testing, and optimization in our Seoul R&D center
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-teal-600 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-teal-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Scale-Up & Manufacturing
                  </h3>
                  <p className="text-gray-600">
                    Seamless transfer to cGMP production facilities in India
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-orange-600 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-orange-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Supply & Delivery
                  </h3>
                  <p className="text-gray-600">
                    Reliable supply chain management and global delivery
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Benefits
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 size={24} className="text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* For Whom */}
          <Card className="bg-gradient-to-r from-orange-50 to-teal-50 border-l-4 border-l-orange-600">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideal For:</h3>
              <p className="text-lg text-gray-700">
                Companies seeking complete materials solution from concept to commercial delivery with reduced risk and faster time-to-market. Perfect for businesses looking for a single, reliable partner throughout the entire development and production lifecycle.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Complete Integration?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss your end-to-end materials solution
          </p>
          <Link to="/get-in-touch">
            <Button size="lg" className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-6 text-lg">
              Contact Our Team
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
