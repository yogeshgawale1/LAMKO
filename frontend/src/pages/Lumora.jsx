import React from 'react';
import { ExternalLink, CheckCircle2, Sparkles, Award, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { lumoraContent } from '../mock';

export const Lumora = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Branding Image */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <img
            src={lumoraContent.brandingImage}
            alt="Lumora - Advanced Materials Korea"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* About Lumora Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-semibold mb-4">
                A LAMKO Brand
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                {lumoraContent.name}
              </h2>
              <p className="text-2xl text-orange-600 font-semibold mb-6">
                {lumoraContent.tagline}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {lumoraContent.description}
              </p>
              <a
                href={lumoraContent.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  {lumoraContent.cta}
                  <ExternalLink className="ml-2" size={20} />
                </Button>
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1766297247924-6638d54e7c89"
                alt="Advanced Materials Research"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-lg shadow-xl">
                <Award className="w-12 h-12 mb-2" />
                <div className="text-sm font-medium">Innovation</div>
                <div className="text-xs text-teal-100">Leadership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Korea-India Vertical Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining Korea's innovation leadership with India's manufacturing efficiency for sustainable competitive advantages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lumoraContent.features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-teal-600">
                <CardContent className="pt-8">
                  <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              High-performance materials for critical technology sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <Target className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Semiconductors</h3>
                <p className="text-gray-600">
                  Advanced materials and specialty chemicals for next-generation semiconductor manufacturing processes
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <Target className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Display Technologies</h3>
                <p className="text-gray-600">
                  Cutting-edge materials for OLED, LCD, and innovative display technology applications
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <Target className="w-10 h-10 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialty Chemicals</h3>
                <p className="text-gray-600">
                  High-purity specialty chemicals and advanced intermediates for diverse industrial applications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-orange-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Lumora's Advanced Materials
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Visit the Lumora website to explore our complete range of high-performance materials for semiconductors, display, and specialty chemicals
          </p>
          <a
            href={lumoraContent.externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
              Visit Lumora Website
              <ExternalLink className="ml-2" size={20} />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};
