import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const SpecialtyChemicals = () => {
  const applications = [
    "Advanced intermediates",
    "High-purity materials",
    "Custom synthesis solutions",
    "Process optimization"
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Sparkles className="w-16 h-16 text-orange-600 mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Chemicals</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            High-performance specialty chemicals for diverse industrial applications.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img src="https://images.pexels.com/photos/3665442/pexels-photo-3665442.jpeg" alt="Specialty Chemicals" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Applications</h2>
              <ul className="space-y-3 mb-8">
                {applications.map((app, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <span className="text-lg text-gray-700">{app}</span>
                  </li>
                ))}
              </ul>
              <Card className="bg-orange-50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Outcomes:</h3>
                  <p className="text-gray-700">Superior quality, scalable processes, reliable supply chain</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Let's Develop Your Specialty Chemicals</h2>
          <Link to="/contact"><Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">Contact Us<ArrowRight className="ml-2" size={20} /></Button></Link>
        </div>
      </section>
    </div>
  );
};
