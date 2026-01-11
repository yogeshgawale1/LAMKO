import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, contactForm } from '../mock';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    project: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting LAMKO. We'll get back to you shortly.",
    });
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      project: ''
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {contactForm.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {contactForm.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardContent className="pt-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-900 font-semibold">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 border-gray-300 focus:border-orange-600 focus:ring-orange-600"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-gray-900 font-semibold">
                        Company *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2 border-gray-300 focus:border-orange-600 focus:ring-orange-600"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-900 font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 border-gray-300 focus:border-orange-600 focus:ring-orange-600"
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-900 font-semibold">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 border-gray-300 focus:border-orange-600 focus:ring-orange-600"
                        placeholder="+82-XXX-XXXX"
                      />
                    </div>

                    <div>
                      <Label htmlFor="project" className="text-gray-900 font-semibold">
                        Project Description *
                      </Label>
                      <Textarea
                        id="project"
                        name="project"
                        required
                        value={formData.project}
                        onChange={handleChange}
                        className="mt-2 border-gray-300 focus:border-orange-600 focus:ring-orange-600 min-h-32"
                        placeholder="Share a brief summary of your R&D or scale-up challenge..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    >
                      Send Message
                      <Send className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're exploring a new R&D project or seeking to scale up production, 
                  our team is ready to help you navigate the innovation journey.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-orange-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                        <p className="text-gray-600">{companyInfo.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-teal-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-teal-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
                        >
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-orange-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600">{companyInfo.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Why Contact Us */}
              <Card className="bg-gray-50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-teal-600 mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Response within 24 hours</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-teal-600 mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Confidential project assessment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-teal-600 mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Tailored solution proposal</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-teal-600 mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Direct access to our technical team</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
