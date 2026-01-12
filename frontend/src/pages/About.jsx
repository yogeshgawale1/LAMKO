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
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {aboutContent.whoWeAre.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {aboutContent.whoWeAre.content}
            </p>
          </div>
        </div>
      </section>

      {/* Core Function Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {aboutContent.coreFunction.title}
              </h2>
              <h3 className="text-2xl font-semibold text-orange-600 mb-6">
                {aboutContent.coreFunction.subtitle}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {aboutContent.coreFunction.description}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Specialty Materials Production</h4>
                    <p className="text-gray-600">Contract Manufacturing Organization (CMO) for high-purity materials</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Process Intensification & Purification</h4>
                    <p className="text-gray-600">Achieving electronics-grade quality through precision purification and manufacturing</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1758549885116-c8bd6bc619e8"
                alt="Technology Innovation"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <MapPin size={32} />
                  <div>
                    <div className="text-sm font-medium">Headquartered in</div>
                    <div className="text-2xl font-bold">Seoul, Korea</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 text-orange-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {aboutContent.goal.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {aboutContent.goal.content}
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Partnering with leading technology companies and research institutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.clients.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-xl font-bold text-gray-800">{client}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Discover how our innovation bridge can accelerate your next project
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
              Contact Us Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
