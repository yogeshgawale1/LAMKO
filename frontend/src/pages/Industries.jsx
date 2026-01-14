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
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Advanced materials solutions across semiconductor, display, specialty chemicals, and personal care industries
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {industries.map((industry) => {
              const Icon = iconMap[industry.id];
              return (
                <Card key={industry.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-orange-600">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-3xl font-bold text-white">{industry.name}</h3>
                    </div>
                  </div>

                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Applications:</h4>
                      <ul className="space-y-2">
                        {industry.applications.map((app, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-l-orange-600 p-4 rounded">
                      <h4 className="font-semibold text-gray-900 mb-2">Outcomes:</h4>
                      <p className="text-gray-700 text-sm">{industry.outcomes}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Industry Leaders Choose LAMKO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Seoul-based innovation bridge delivers unmatched value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-gray-900 font-semibold mb-2">Success Rate</div>
                <p className="text-gray-600 text-sm">Projects delivered to electronics-grade quality</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-teal-600 mb-2">40%</div>
                <div className="text-gray-900 font-semibold mb-2">Faster Time-to-Market</div>
                <p className="text-gray-600 text-sm">Compared to traditional CRDMO models</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-orange-600 mb-2">5+</div>
                <div className="text-gray-900 font-semibold mb-2">Industry Leaders</div>
                <p className="text-gray-600 text-sm">Trusted partnerships with Korea's top firms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Advance Your Industry Together
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Share your R&D or scale-up challenge and discover how LAMKO can help
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
              Start a Conversation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
