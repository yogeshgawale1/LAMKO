import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { brands } from '../../mock';

export const LumoraBrand = () => {
  const lumora = brands[0];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src={lumora.brandingImage} alt="LUMORA" className="w-full h-auto rounded-lg shadow-2xl" />
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl">
            <CardContent className="pt-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-3">{lumora.name}</h1>
              <p className="text-2xl text-orange-600 font-semibold mb-6">{lumora.tagline}</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{lumora.description}</p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Industries:</h3>
                <div className="flex flex-wrap gap-3">
                  {lumora.industries.map((industry, idx) => (
                    <span key={idx} className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
              <a href={lumora.website} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Visit LUMORA Website
                  <ExternalLink className="ml-2" size={20} />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
