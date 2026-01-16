import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, CheckCircle2, FlaskConical, Shield, Microscope, HeadphonesIcon } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const Semiconductor = () => {
  const expertiseItems = [
    {
      icon: FlaskConical,
      title: "CRDMO Services",
      description: "We provide end-to-end solutions—from contract research and custom synthesis of small-molecule monomers based on client specifications to scalable development and manufacturing—ensuring materials are tailored to your specific lithographic requirements."
    },
    {
      icon: Shield,
      title: "Ultra-Purification",
      description: "We apply rigorous purification techniques, including filtration, crystallization, flash chromatography, zone refining, wiped-film evaporation, and high-vacuum distillation, to eliminate impurities, control moisture, and reduce metal ions and halides to ultralow levels, ensuring exceptional batch-to-batch consistency."
    },
    {
      icon: Microscope,
      title: "Rigorous Characterization",
      description: "Every synthesized material undergoes thorough verification of structure and purity using advanced analytical techniques such as ICP-MS (for parts-per-trillion detection), GC-MS, NMR, and FTIR, guaranteeing performance and reliability in the most demanding photoresist formulations."
    },
    {
      icon: HeadphonesIcon,
      title: "Comprehensive Support",
      description: "We offer end-to-end technical assistance, including troubleshooting, purification guidance, and responsive after-sales support, to ensure seamless integration and sustained performance of materials in your production environment."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Cpu className="w-12 h-12 md:w-16 md:h-16 text-orange-600 mb-4 md:mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Semiconductor Materials</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-teal-400 font-medium mb-4">
            Precision Chemicals for Advanced Photoresist Polymers
          </p>
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                As a specialised CRDMO, LAMKO acts as an end‑to‑end solution provider for semiconductor photoresist materials, covering custom monomer design, synthesis, purification, scale‑up, and reliable manufacturing for ArF and EUV applications.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                At LAMKO, we combine deep synthetic expertise with a robust purification infrastructure to deliver semiconductor-grade speciality monomers and related materials for ArF and EUV photoresist applications. Our integrated purification platform spans advanced adsorption and chromatographic techniques for clean separation of complex metal impurity profiles, high vacuum plus fractional distillation for high-boiling speciality chemicals and zone refining for ultra-precise purification of critical solids. By partnering with LAMKO, customers gain access not only to custom-engineered monomers but also to a purification ecosystem specifically built to meet the stringent quality and reliability requirements of modern semiconductor manufacturing.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1760842543741-876d7837fa0b" 
                alt="Semiconductor Manufacturing" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Synthesis, Production and Purification Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {expertiseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-orange-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-orange-600" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Let's Advance Your Semiconductor Materials</h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
            Partner with us for precision chemicals that meet your lithographic requirements
          </p>
          <Link to="/get-in-touch">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
