import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const Production = () => {
  const benefits = [
    "High-purity materials manufacturing at scale",
    "Consistent quality and batch-to-batch reliability",
    "Cleanroom-ready packaging standards",
    "cGMP compliant production",
    "Flexible production volumes",
    "Quality assurance and documentation"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 bg-orange-600 rounded-full text-sm font-semibold mb-4">
            CMO - Contract Manufacturing Organization
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Specialty Materials Production
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            We manufacture your specified high-purity materials at scale, ensuring consistency, quality, and cleanroom-ready packaging.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1766297246906-210617be31a4"
                alt="Production"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <Factory className="w-16 h-16 text-teal-600 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Scalable, Reliable Manufacturing
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our cGMP-compliant manufacturing facilities in India deliver high-purity specialty materials with exceptional consistency. From pilot batches to commercial scale, we ensure your materials meet stringent quality requirements.
              </p>
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
          <Card className="bg-teal-50 border-l-4 border-l-teal-600">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideal For:</h3>
              <p className="text-lg text-gray-700">
                Companies needing reliable, scalable manufacturing of specialty materials with stringent purity requirements. Perfect for businesses looking to outsource production while maintaining quality control.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Production?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss your manufacturing requirements
          </p>
          <Link to="/get-in-touch">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
              Contact Our Team
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
