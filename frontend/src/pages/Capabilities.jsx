import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Building2, CheckCircle2, FlaskConical, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { reactionCapabilities, facilityInfrastructure } from '../mock';

export const Capabilities = () => {
  // Group reactions by category for better display
  const groupedReactions = reactionCapabilities.reactions.reduce((acc, reaction) => {
    if (!acc[reaction.category]) {
      acc[reaction.category] = [];
    }
    acc[reaction.category].push(reaction.name);
    return acc;
  }, {});

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Capabilities
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              World-class infrastructure and expertise in advanced chemical reactions and materials processing
            </p>
          </div>
        </div>
      </section>

      {/* Reaction Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Beaker className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {reactionCapabilities.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {reactionCapabilities.description}
            </p>
          </div>

          {/* Reactions Grid */}
          <div className="mt-12">
            <Card className="shadow-xl">
              <CardContent className="pt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {reactionCapabilities.reactions.map((reaction, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200 group"
                    >
                      <CheckCircle2 
                        size={18} 
                        className="text-teal-600 mt-0.5 flex-shrink-0 group-hover:text-orange-600 transition-colors duration-200" 
                      />
                      <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900">
                        {reaction.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Specialization Highlight */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-orange-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">45+</div>
                <div className="text-gray-900 font-semibold mb-2">Specialized Reactions</div>
                <p className="text-gray-600 text-sm">Comprehensive reaction expertise</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-teal-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
                <div className="text-gray-900 font-semibold mb-2">Years Experience</div>
                <p className="text-gray-600 text-sm">Proven track record in complex chemistry</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-orange-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-gray-900 font-semibold mb-2">Projects Completed</div>
                <p className="text-gray-600 text-sm">From lab to production scale</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facility & Infrastructure Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Building2 className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {facilityInfrastructure.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              {facilityInfrastructure.description}
            </p>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md border-l-4 border-l-orange-600">
              <p className="text-lg text-gray-700 leading-relaxed">
                {facilityInfrastructure.valueProposition}
              </p>
            </div>
          </div>

          {/* Locations */}
          <div className="mt-16 space-y-12">
            {facilityInfrastructure.locations.map((location, locIndex) => (
              <Card key={locIndex} className="shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-teal-600 p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <MapPin size={32} />
                    <div>
                      <h3 className="text-2xl font-bold">{location.name}</h3>
                    </div>
                  </div>
                </div>

                <CardContent className="pt-8">
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {location.description}
                  </p>

                  <div className="space-y-8">
                    {location.capabilities.map((capability, capIndex) => (
                      <div key={capIndex}>
                        <div className="flex items-center space-x-3 mb-4">
                          <FlaskConical className="text-orange-600" size={24} />
                          <h4 className="text-xl font-bold text-gray-900">
                            {capability.category}
                          </h4>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 pl-9">
                          {capability.equipment.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                            >
                              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
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

          {/* End-to-End Value */}
          <div className="mt-12">
            <Card className="bg-gradient-to-br from-teal-900 via-teal-800 to-orange-900 text-white shadow-2xl">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-2xl font-bold mb-4">End-to-End Excellence</h3>
                <p className="text-xl text-teal-100 max-w-4xl mx-auto">
                  {facilityInfrastructure.endToEnd}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Leverage Our Capabilities?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our infrastructure and expertise can accelerate your project
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
              Contact Our Technical Team
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
