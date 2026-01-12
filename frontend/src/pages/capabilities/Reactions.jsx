import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { reactionCapabilities } from '../../mock';

export const Reactions = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Beaker className="w-16 h-16 text-orange-600 mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{reactionCapabilities.title}</h1>
          <p className="text-xl text-gray-300 max-w-4xl">{reactionCapabilities.description}</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardContent className="pt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {reactionCapabilities.reactions.map((reaction, index) => (
                  <div key={index} className="flex items-start space-x-2 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                    <CheckCircle2 size={18} className="text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{reaction.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="mt-12 text-center">
            <Link to="/get-in-touch"><Button size="lg" className="bg-orange-600 hover:bg-orange-700">Discuss Your Reaction Needs<ArrowRight className="ml-2" size={20} /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
