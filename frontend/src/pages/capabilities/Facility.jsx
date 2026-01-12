import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, FlaskConical, MapPin } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { facilityInfrastructure } from '../../mock';

export const Facility = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Building2 className="w-16 h-16 text-teal-600 mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{facilityInfrastructure.title}</h1>
          <p className="text-xl text-gray-300 max-w-4xl mb-4">{facilityInfrastructure.description}</p>
          <p className="text-lg text-teal-300 max-w-4xl">{facilityInfrastructure.valueProposition}</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {facilityInfrastructure.locations.map((location, idx) => (
              <Card key={idx} className="shadow-2xl">
                <div className="bg-gradient-to-r from-orange-600 to-teal-600 p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <MapPin size={32} />
                    <h3 className="text-2xl font-bold">{location.name}</h3>
                  </div>
                </div>
                <CardContent className="pt-8">
                  <p className="text-lg text-gray-600 mb-8">{location.description}</p>
                  <div className="space-y-8">
                    {location.capabilities.map((capability, capIdx) => (
                      <div key={capIdx}>
                        <div className="flex items-center space-x-3 mb-4">
                          <FlaskConical className="text-orange-600" size={24} />
                          <h4 className="text-xl font-bold text-gray-900">{capability.category}</h4>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 pl-9">
                          {capability.equipment.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start space-x-2 p-3 bg-gray-50 rounded-lg">
                              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/get-in-touch"><Button size="lg" className="bg-orange-600 hover:bg-orange-700">Visit Our Facilities<ArrowRight className="ml-2" size={20} /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
