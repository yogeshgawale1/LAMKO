import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Droplet, Building2, Factory } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const Capabilities = () => {
  const capabilitiesOverview = [
    {
      id: 1,
      icon: Microscope,
      title: "Research and Development",
      description: "Advanced R&D services for materials innovation and optimization",
      image: "https://images.unsplash.com/photo-1766297247924-6638d54e7c89",
      highlights: [
        "Materials formulation and composition optimization",
        "Performance validation and testing protocols",
        "Analytical characterization (HPLC, GC-MS, LC-MS)",
        "Technical consultation and problem-solving"
      ],
      link: "/capabilities/rd"
    },
    {
      id: 2,
      icon: Droplet,
      title: "Purification Technologies",
      description: "State-of-the-art purification delivering electronics-grade quality",
      image: "https://images.pexels.com/photos/35609693/pexels-photo-35609693.jpeg",
      highlights: [
        "High-Vacuum Sublimation purification",
        "Zone Refining for semiconductor-grade materials",
        "Advanced distillation systems",
        "Electronics-grade quality achievement"
      ],
      link: "/capabilities/purifications"
    },
    {
      id: 3,
      icon: Building2,
      title: "Facility and Infrastructure",
      description: "World-class facilities in Seoul and India for R&D and manufacturing",
      image: "https://images.unsplash.com/photo-1766297246906-210617be31a4",
      highlights: [
        "Seoul R&D Center with clean rooms",
        "India cGMP compliant production facilities",
        "Advanced analytical equipment",
        "Process development laboratories"
      ],
      link: "/capabilities/facility"
    },
    {
      id: 4,
      icon: Factory,
      title: "Production Plants",
      description: "Scalable manufacturing for high-purity specialty materials",
      image: "https://images.unsplash.com/photo-1532186773960-85649e5cb70b",
      highlights: [
        "cGMP compliant manufacturing",
        "Flexible production volumes",
        "Quality control facilities",
        "Licensed production infrastructure"
      ],
      link: "/capabilities/production-plants"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Capabilities
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive infrastructure and expertise from R&D to production-ready materials
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Capabilities Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cutting-edge research to scalable production, we provide end-to-end capabilities for advanced materials
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-16">
            {capabilitiesOverview.map((capability, index) => {
              const Icon = capability.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={capability.id} className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                    <div className="relative">
                      <img
                        src={capability.image}
                        alt={capability.title}
                        className="rounded-lg shadow-2xl w-full h-96 object-cover"
                      />
                      <div className="absolute top-6 left-6 bg-white p-4 rounded-lg shadow-xl">
                        <Icon className="text-orange-600" size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                      <div className="space-y-3">
                        {capability.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to={capability.link}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                        Learn More
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* End-to-End Excellence */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-none">
            <CardContent className="pt-12 pb-12">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  End-to-End Excellence
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  From concept to production-ready processes, we deliver optimized, high-purity materials for advanced technology applications. Our integrated capabilities ensure seamless progression from R&D through purification to scalable manufacturing.
                </p>
              </div>
            </CardContent>
          </Card>
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
          <Link to="/get-in-touch">
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
