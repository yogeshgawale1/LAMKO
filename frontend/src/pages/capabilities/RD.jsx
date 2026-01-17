import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const RD = () => {
  useEffect(() => {
    const prevent = (e) => e.preventDefault();
    document.addEventListener('copy', prevent);
    document.addEventListener('contextmenu', prevent);
    return () => {
      document.removeEventListener('copy', prevent);
      document.removeEventListener('contextmenu', prevent);
    };
  }, []);

  const rdCapabilities = [
    "Materials formulation and composition optimization",
    "Performance validation and testing protocols",
    "Process development and scale-up studies",
    "Analytical characterization (HPLC, GC-MS, LC-MS)",
    "Spectroscopy analysis (FTIR, DSC)",
    "Quality control and method development",
    "Stability and compatibility studies",
    "Technical consultation and problem-solving"
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Microscope className="w-16 h-16 text-orange-600 mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">R&D Capabilities</h1>
          <p className="text-xl text-gray-300 max-w-4xl">
            Advanced research and development services for materials innovation and optimization
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive R&D Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Seoul-based R&D center provides world-class facilities and expert scientists to support your materials development needs from concept to commercial reality.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1766297247924-6638d54e7c89" alt="R&D" className="rounded-lg shadow-2xl" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core R&D Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {rdCapabilities.map((capability, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 size={24} className="text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{capability}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/get-in-touch"><Button size="lg" className="bg-orange-600 hover:bg-orange-700">Partner with Our R&D Team<ArrowRight className="ml-2" size={20} /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
