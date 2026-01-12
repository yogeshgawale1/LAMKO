import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const Semiconductor = () => {
  const applications = [
    "Photoresists and specialty chemicals",
    "High-purity process materials",
    "Advanced packaging materials",
    "Etch and deposition chemistries"
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Cpu className="w-16 h-16 text-orange-600 mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Semiconductor</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Advanced materials and chemicals for semiconductor manufacturing processes, enabling next-generation chip production.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img src="https://images.unsplash.com/photo-1760842543741-876d7837fa0b" alt="Semiconductor" className="rounded-lg shadow-2xl" />
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
                  <p className="text-gray-700">Faster time-to-market, reduced production risk, electronics-grade purity</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Let's Advance Your Semiconductor Materials</h2>
          <Link to="/contact"><Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">Contact Us<ArrowRight className="ml-2" size={20} /></Button></Link>
        </div>
      </section>
    </div>
  );
};
