import React from 'react';
import { Building2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export const OrganisationChart = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-16 h-16 text-orange-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Organisation Chart
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our organizational structure and leadership team
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="text-6xl mb-6">🏗️</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-600">
                Our organizational chart will be available shortly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
