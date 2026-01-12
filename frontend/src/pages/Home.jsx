import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { heroContent, aboutContent, stats, services } from '../mock';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroContent.image}
            alt="LAMKO Innovation"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/75"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="md:text-7xl !font-bold !text-5xl !mb-[18px] text-white">
            {heroContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-teal-400 mb-4 font-medium">
            {heroContent.subtitle}
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            {heroContent.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
                {heroContent.cta}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) =>
            <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {aboutContent.coreFunction.subtitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aboutContent.coreFunction.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-orange-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  The Innovation Gateway: Your R&D Platform for Breakthrough Chemistry
                </h3>
                <p className="text-gray-600">
                  We are the strategic R&D Platform with purification units that seamlessly connect cutting-edge Korean research with global market demand and world-class manufacturing capabilities. Our unique CRDMO model focuses precisely on the high-value front end of the innovation chain, accelerating your journey from concept to commercialization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-teal-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  CRDMO Model
                </h3>
                <p className="text-gray-600">
                  Our CRDMO model combines research, development, and manufacturing under one roof. From concept to commercial delivery, we provide a seamless, integrated solution that reduces risk and accelerates time-to-market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From R&D to production-ready materials, we deliver excellence at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) =>
            <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.benefits.slice(0, 3).map((benefit, idx) =>
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                  )}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Explore All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Industry Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Decades of chemical insight, applied through expert engineering
            </h2>
            <p className="text-2xl font-semibold text-orange-600 mb-6">
              Core industry experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="https://customer-assets.emergentagent.com/job_lamko-emergent/artifacts/68p2e472_image.png"
                alt="Industry Experience 1"
                className="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />

            </div>
            <div className="flex justify-center">
              <img
                src="https://customer-assets.emergentagent.com/job_lamko-emergent/artifacts/6xz4llrc_image.png"
                alt="Industry Experience 2"
                className="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />

            </div>
            <div className="flex justify-center">
              <img
                src="https://customer-assets.emergentagent.com/job_lamko-emergent/artifacts/2lwelm0f_image.png"
                alt="Industry Experience 3"
                className="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />

            </div>
            <div className="flex justify-center">
              <img
                src="https://customer-assets.emergentagent.com/job_lamko-emergent/artifacts/p26ecier_image.png"
                alt="Industry Experience 4"
                className="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />

            </div>
            <div className="flex justify-center">
              <img
                src="https://customer-assets.emergentagent.com/job_lamko-emergent/artifacts/26ucq9m6_image.png"
                alt="Industry Experience 5"
                className="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />

            </div>
            <div className="flex justify-center">
              <img
                src="https://customer-assets.emergentagent.com/job_lamko-emergent/artifacts/n7kf9bbn_image.png"
                alt="Industry Experience 6"
                className="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />

            </div>
            <div className="flex justify-center">
              <img
                src="https://customer-assets.emergentagent.com/job_lamko-emergent/artifacts/vfzsej54_image.png"
                alt="Industry Experience 7"
                className="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300" />

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Accelerate Your Innovation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how LAMKO can de-risk your journey from R&D to production
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
              Start a Conversation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>);

};