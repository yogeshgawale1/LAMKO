import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, FlaskConical, Layers, Sparkles, HeadphonesIcon } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const Display = () => {
  const expertiseItems = [
    {
      icon: FlaskConical,
      title: "CRDMO Services",
      description: "End-to-end partnerships covering material design, development, scalable synthesis, purification, and reliable global delivery."
    },
    {
      icon: Layers,
      title: "OLED Materials Production",
      description: "Synthesis and purification of intermediates and finished materials, including sublimed-grade HOST, HTL, HIL, ETL layers, and emitters."
    },
    {
      icon: Sparkles,
      title: "Tailored Solutions",
      description: "Custom development of novel materials and stack designs based on precise optical and electronic specifications."
    },
    {
      icon: HeadphonesIcon,
      title: "Comprehensive Support",
      description: "Technical assistance, troubleshooting, process optimization, and after-sales support to ensure seamless integration and sustained performance in your production environment."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Monitor className="w-12 h-12 md:w-16 md:h-16 text-teal-600 mb-4 md:mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Display</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-teal-400 font-medium">
            Cutting-edge materials for OLED, and next-generation display technologies
          </p>
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                At LAMKO, we provide end-to-end CRDMO services for building blocks, intermediates, HOST, ETL, and custom stack materials for cutting-edge OLED and next-generation display technologies. We combine deep scientific expertise with scalable manufacturing excellence to support your most demanding material and production requirements.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Our state-of-the-art R&D and process development laboratories are engineered to ensure seamless scaling of production using large-scale reaction vessels based in India. These facilities feature advanced instrumentation for handling complex chemical processes, including C-C and C-N bond-forming reactions, boronization, and borylation, enabling a smooth transition from laboratory-scale innovation to full-scale commercial manufacturing.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                To meet the industry's most demanding performance standards, we utilize advanced purification technologies, such as filtration, crystallization, flash chromatography, and high-vacuum sublimation, to deliver materials of exceptional purity, consistency, and reliability.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1765256931287-e7f0e36b9ba4" 
                alt="Display Technology" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Synthesis, Production and Purification Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {expertiseItems.map((item, idx) => {
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-teal-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Let's Enhance Your Display Technologies</h2>
          <p className="text-base md:text-lg text-teal-100 mb-6 md:mb-8">
            Partner with us for cutting-edge OLED and display materials
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
