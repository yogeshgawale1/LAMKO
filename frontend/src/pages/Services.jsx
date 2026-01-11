import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Beaker, FlaskConical, Microscope } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services } from '../mock';

export const Services = () => {
  const iconMap = {
    1: Beaker,
    2: FlaskConical,
    3: Microscope
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services & Technology
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive solutions from innovation to production-ready materials
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.id];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-lg shadow-2xl w-full h-96 object-cover"
                      />
                      <div className="absolute top-6 left-6 bg-white p-4 rounded-lg shadow-xl">
                        <Icon className="text-orange-600" size={32} />
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                    <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                      Service {service.id}
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 size={20} className="text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Card className="bg-gray-50 border-l-4 border-l-orange-600">
                      <CardContent className="pt-6">
                        <h4 className="font-semibold text-gray-900 mb-2">For Whom:</h4>
                        <p className="text-gray-600">{service.forWhom}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Light CDMO Model
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focused on high-value front end of the supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-teal-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  R&D Collaboration
                </h3>
                <p className="text-gray-600">
                  Work directly with Korean tech leaders to develop innovative materials and processes
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Process Optimization
                </h3>
                <p className="text-gray-600">
                  Perfect chemical processes for yield, cost, and scalability in our Seoul labs
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-teal-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Production Ready
                </h3>
                <p className="text-gray-600">
                  Deliver electronics-grade quality materials ready for seamless scale-up
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Innovation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your R&D or production challenges
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
