import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Monitor, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { industries } from '../mock';

export const Industries = () => {
  const iconMap = {
    1: Cpu,
    2: Monitor,
    3: Heart
  };

  const linkMap = {
    1: '/industries/semiconductor',
    2: '/industries/display',
    3: '/industries/personal-care'
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Industries We Serve
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Advanced materials solutions across semiconductor, display, and personal care industries
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {industries.map((industry) => {
              const Icon = iconMap[industry.id];
              return (
                <Link to={linkMap[industry.id]} key={industry.id}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-orange-600 h-full">
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex items-center space-x-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                          <Icon className="text-white" size={20} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{industry.name}</h3>
                      </div>
                    </div>

                    <CardContent className="pt-4 md:pt-6">
                      <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base line-clamp-3">
                        {industry.description}
                      </p>

                      <div className="bg-orange-50 border-l-4 border-l-orange-600 p-3 md:p-4 rounded">
                        <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Outcomes:</h4>
                        <p className="text-gray-700 text-xs md:text-sm">{industry.outcomes}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Industry Leaders Choose LAMKO
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our Seoul-based innovation bridge delivers unmatched value
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6 md:pt-8">
                <div className="text-3xl md:text-5xl font-bold text-orange-600 mb-1 md:mb-2">98%</div>
                <div className="text-gray-900 font-semibold mb-1 md:mb-2 text-sm md:text-base">Success Rate</div>
                <p className="text-gray-600 text-xs md:text-sm">Projects delivered to electronics-grade quality</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6 md:pt-8">
                <div className="text-3xl md:text-5xl font-bold text-teal-600 mb-1 md:mb-2">40%</div>
                <div className="text-gray-900 font-semibold mb-1 md:mb-2 text-sm md:text-base">Faster Time-to-Market</div>
                <p className="text-gray-600 text-xs md:text-sm">Compared to traditional CRDMO models</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300 sm:col-span-2 md:col-span-1">
              <CardContent className="pt-6 md:pt-8">
                <div className="text-3xl md:text-5xl font-bold text-orange-600 mb-1 md:mb-2">5+</div>
                <div className="text-gray-900 font-semibold mb-1 md:mb-2 text-sm md:text-base">Industry Leaders</div>
                <p className="text-gray-600 text-xs md:text-sm">Trusted partnerships with Korea's top firms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Let's Advance Your Industry Together
          </h2>
          <p className="text-base md:text-xl text-teal-100 mb-6 md:mb-8">
            Share your R&D or scale-up challenge and discover how LAMKO can help
          </p>
          <Link to="/get-in-touch">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg">
              Start a Conversation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
