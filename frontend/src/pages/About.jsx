import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Target, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { aboutContent } from '../mock';

export const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              {aboutContent.whoWeAre.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              {aboutContent.whoWeAre.content}
            </p>
          </div>
        </div>
      </section>

      {/* Core Function Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                {aboutContent.coreFunction.title}
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-600 mb-4 md:mb-6">
                {aboutContent.coreFunction.subtitle}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
                {aboutContent.coreFunction.description}
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-teal-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Specialty Materials Production</h4>
                    <p className="text-gray-600 text-sm md:text-base">Contract Manufacturing Organization (CMO) for high-purity materials</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Process Intensification & Purification</h4>
                    <p className="text-gray-600 text-sm md:text-base">Achieving electronics-grade quality through precision purification and manufacturing</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative mt-8 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1758549885116-c8bd6bc619e8"
                alt="Technology Innovation"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-orange-600 text-white p-4 md:p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <MapPin size={24} className="md:w-8 md:h-8" />
                  <div>
                    <div className="text-xs md:text-sm font-medium">Headquartered in</div>
                    <div className="text-lg md:text-2xl font-bold">Seoul, Korea</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-12 h-12 md:w-16 md:h-16 text-orange-600 mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              {aboutContent.goal.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              {aboutContent.goal.content}
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <Award className="w-10 h-10 md:w-12 md:h-12 text-orange-600 mx-auto mb-3 md:mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              Partnering with leading technology companies and research institutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {aboutContent.clients.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="text-base md:text-xl font-bold text-gray-800">{client}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-base md:text-xl text-teal-100 mb-6 md:mb-8">
            Discover how our innovation bridge can accelerate your next project
          </p>
          <Link to="/get-in-touch">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg">
              Contact Us Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
