import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const Purifications = () => {
  const purificationTech = [
    {
      name: "High-Vacuum Sublimation",
      description: "Ultra-pure material production through advanced sublimation techniques"
    },
    {
      name: "Zone Refining",
      description: "Precision purification for semiconductor-grade materials"
    },
    {
      name: "Distillation Systems",
      description: "High vacuum and fractional distillation for specialty chemicals"
    },
    {
      name: "Crystallization",
      description: "Controlled crystallization for high-purity final products"
    },
    {
      name: "Chromatography Purification",
      description: "Advanced separation techniques for complex mixtures"
    },
    {
      name: "Recrystallization",
      description: "Multiple recrystallization cycles for enhanced purity"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Droplet className="w-16 h-16 text-teal-600 mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Purification Technologies</h1>
          <p className="text-xl text-gray-300 max-w-4xl">
            State-of-the-art purification technologies delivering electronics-grade quality materials
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Advanced Purification Methods</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              We employ cutting-edge purification technologies to achieve the highest purity standards required for semiconductor, display, and specialty chemical applications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {purificationTech.map((tech, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-t-4 border-t-teal-600">
                <CardContent className="pt-8">
                  <CheckCircle2 className="w-12 h-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-12 bg-orange-50 border-l-4 border-l-orange-600">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Electronics-Grade Quality</h3>
              <p className="text-lg text-gray-700">
                Our purification processes consistently deliver materials meeting the stringent purity requirements of semiconductor and electronics industries, with documented quality assurance and batch traceability.
              </p>
            </CardContent>
          </Card>
          <div className="mt-12 text-center">
            <Link to="/get-in-touch"><Button size="lg" className="bg-orange-600 hover:bg-orange-700">Learn About Our Purification Services<ArrowRight className="ml-2" size={20} /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
