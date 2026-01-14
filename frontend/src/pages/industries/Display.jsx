import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const Display = () => {
  const applications = [
    "OLED materials and intermediates",
    "LCD specialty chemicals",
    "Display coating materials",
    "Color filter components"
  ];

  const outcomes = [
    "Enhanced display performance",
    "Cost-optimized production",
    "Innovation acceleration"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Monitor className="w-12 h-12 md:w-16 md:h-16 text-teal-600 mb-4 md:mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Display</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl">
            From OLED emitters and host materials to LCD alignment agents and quantum dot precursors, we develop and produce the specialty chemicals critical for next-generation displays. Our rigorous quality control—including sublimation purification and trace metal analysis—ensures materials that meet your performance specifications.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Key Applications</h2>
              <ul className="space-y-3 mb-6 md:mb-8">
                {applications.map((app, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-base md:text-lg text-gray-700">{app}</span>
                  </li>
                ))}
              </ul>
              <Card className="bg-teal-50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Outcomes:</h3>
                  <ul className="space-y-2">
                    {outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle2 size={16} className="text-teal-600 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-teal-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Let's Enhance Your Display Technologies</h2>
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
