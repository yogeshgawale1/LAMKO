import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const ProductionPlants = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Factory className="w-16 h-16 text-teal-600 mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Production Plants</h1>
          <p className="text-xl text-gray-300 max-w-4xl">
            State-of-the-art manufacturing facilities for high-purity specialty materials
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">cGMP Compliant Manufacturing</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our production facilities in India are fully equipped with cGMP compliant infrastructure, ensuring the highest standards of quality and consistency for specialty materials manufacturing.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1766297246906-210617be31a4" alt="Production" className="rounded-lg shadow-2xl" />
            </div>
          </div>
          <Card className="bg-teal-50 border-l-4 border-l-teal-600">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Production Capabilities</h3>
              <p className="text-lg text-gray-700 mb-4">
                Flexible production space with scalable manufacturing units, from pilot batches to commercial scale production. Licensed under Indian Factory Act with comprehensive quality control facilities.
              </p>
              <p className="text-gray-600 italic">
                More detailed information about our production plants will be added soon.
              </p>
            </CardContent>
          </Card>
          <div className="mt-12 text-center">
            <Link to="/get-in-touch"><Button size="lg" className="bg-orange-600 hover:bg-orange-700">Inquire About Production Capacity<ArrowRight className="ml-2" size={20} /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
