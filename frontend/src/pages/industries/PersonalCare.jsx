import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, FlaskConical, TrendingUp, Leaf, FileCheck } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const PersonalCare = () => {
  const offeringItems = [
    {
      icon: FlaskConical,
      title: "CRDMO/CDMO Services",
      description: "End-to-end support from eco-conscious research and development to scalable, low-waste manufacturing of active compounds such as antioxidants, Antifungal, UV filters, and naturally derived emollients."
    },
    {
      icon: TrendingUp,
      title: "Scalable Production",
      description: "Efficient scale-up from lab to commercial volume using processes designed to reduce carbon emissions, water usage, and waste generation."
    },
    {
      icon: Leaf,
      title: "Purification",
      description: "Sustainable purification techniques, including solvent recycling, low-energy crystallization to achieve high purity while minimizing environmental impact."
    },
    {
      icon: FileCheck,
      title: "Compliance & Transparency",
      description: "Full regulatory guidance and technical support for formulation and to help you meet sustainability goals and appeal to eco-aware consumers."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heart className="w-12 h-12 md:w-16 md:h-16 text-teal-600 mb-4 md:mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Personal Care Actives</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-teal-400 font-medium">
            Sustainable, High-Performance Ingredients for Conscious Cosmetics
          </p>
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                At LAMKO, we deliver high-value, sustainably produced active ingredients for cosmetic and personal care brands through integrated CRDMO/CDMO services that span custom molecule design, process development, scale-up, and reliable manufacturing. Our portfolio is centred on UV actives, antimicrobial systems for scalp and hair care, and well aging ingredients, giving formulators a focused toolbox for modern, performance driven skincare, suncare, and haircare products.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                By embedding green chemistry principles, energy-efficient operations, and smart solvent and waste management into each project, we combine scientific excellence with measurable environmental responsibility. Our UV filters, scalp/hair antimicrobials, and well-ageing molecules are engineered for efficacy, purity, and formulation robustness, making them ideally suited for serums, creams, sunscreens, and well-ageing products where performance and a reduced ecological footprint are equally critical.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1764694187667-f28a05a52c0e" 
                alt="Personal Care Products" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Offerings Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sustainable Offerings
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {offeringItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-teal-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-teal-600" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 md:mt-12 text-center">
            <p className="text-base md:text-lg text-gray-700 font-medium max-w-3xl mx-auto">
              Leverage our CRDMO/CDMO capabilities to innovate with confidence in the competitive personal care industry.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-teal-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Let's Innovate Your Personal Care Products</h2>
          <p className="text-base md:text-lg text-teal-100 mb-6 md:mb-8">
            Partner with us for sustainable, high-performance cosmetic actives
          </p>
          <Link to="/get-in-touch">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
