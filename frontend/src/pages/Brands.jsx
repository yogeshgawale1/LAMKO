import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { brands } from '../mock';

export const Brands = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Sparkles className="w-16 h-16 text-orange-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Brands
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Discover our portfolio of specialized brands delivering innovative materials solutions
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-12">
            {brands.map((brand) => (
              <Card key={brand.id} className="shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                {/* Brand Image */}
                <div className="relative">
                  <img
                    src={brand.brandingImage}
                    alt={brand.name}
                    className="w-full h-auto"
                  />
                </div>

                <CardContent className="pt-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">
                        {brand.name}
                      </h2>
                      <p className="text-xl text-orange-600 font-semibold">
                        {brand.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {brand.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Industries:</h3>
                    <div className="flex flex-wrap gap-2">
                      {brand.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white w-full md:w-auto">
                      Visit {brand.name} Website
                      <ExternalLink className="ml-2" size={20} />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Brands Coming Soon
          </h2>
          <p className="text-lg text-gray-600">
            We're continuously expanding our portfolio to serve diverse markets and applications
          </p>
        </div>
      </section>
    </div>
  );
};
