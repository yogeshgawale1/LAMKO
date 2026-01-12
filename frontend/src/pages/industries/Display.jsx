import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const Display = () => {
  const applications = [
    "OLED materials and intermediates",
    "LCD specialty chemicals",
    "Display coating materials",
    "Color filter components"
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Monitor className="w-16 h-16 text-teal-600 mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Display</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Cutting-edge materials for OLED, LCD, and next-generation display technologies.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Applications</h2>
              <ul className="space-y-3 mb-8">
                {applications.map((app, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <span className="text-lg text-gray-700">{app}</span>
                  </li>
                ))}
              </ul>
              <Card className="bg-teal-50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Outcomes:</h3>
                  <p className="text-gray-700">Enhanced display performance, cost-optimized production, innovation acceleration</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1765256931287-e7f0e36b9ba4" alt="Display" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-teal-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Let's Enhance Your Display Technologies</h2>
          <Link to="/contact"><Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">Contact Us<ArrowRight className="ml-2" size={20} /></Button></Link>
        </div>
      </section>
    </div>
  );
};
