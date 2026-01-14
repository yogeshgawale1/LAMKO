import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { companyInfo } from '../mock';
import { useToast } from '../hooks/use-toast';

export const GetInTouch = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    contact: '',
    country: '',
    message: ''
  });

  // Auto-detect country based on user's location
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        if (data.country_name) {
          setFormData(prev => ({ ...prev, country: data.country_name }));
        }
      })
      .catch(() => {
        // Default to empty if detection fails
        console.log('Country detection failed');
      });
  }, []);

  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France',
    'Japan', 'South Korea', 'China', 'India', 'Singapore', 'Taiwan', 'Hong Kong',
    'Netherlands', 'Switzerland', 'Sweden', 'Norway', 'Denmark', 'Finland',
    'Belgium', 'Austria', 'Spain', 'Italy', 'Brazil', 'Mexico', 'Argentina',
    'South Africa', 'United Arab Emirates', 'Saudi Arabia', 'Israel', 'Turkey',
    'Poland', 'Czech Republic', 'Ireland', 'New Zealand', 'Malaysia', 'Thailand',
    'Vietnam', 'Indonesia', 'Philippines', 'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCountryChange = (value) => {
    setFormData({
      ...formData,
      country: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      contact: '',
      country: formData.country, // Keep detected country
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Connect With Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Let's discuss how LAMKO can support your materials innovation journey
            </p>
          </div>
        </div>
      </section>

      {/* Form and Info Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <Card className="shadow-xl md:shadow-2xl">
                <CardContent className="pt-6 md:pt-8 px-4 md:px-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                    Share Your Requirements
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-900 font-semibold text-sm md:text-base">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 md:mt-2 border-gray-300 focus:border-orange-600 focus:ring-orange-600"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-gray-900 font-semibold text-sm md:text-base">
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-1 md:mt-2 border-gray-300 focus:border-orange-600 focus:ring-orange-600"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <Label htmlFor="email" className="text-gray-900 font-semibold text-sm md:text-base">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 md:mt-2 border-gray-300 focus:border-orange-600 focus:ring-orange-600"
                          placeholder="your.email@company.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="contact" className="text-gray-900 font-semibold text-sm md:text-base">
                          Contact Number
                        </Label>
                        <Input
                          id="contact"
                          name="contact"
                          type="tel"
                          value={formData.contact}
                          onChange={handleChange}
                          className="mt-1 md:mt-2 border-gray-300 focus:border-orange-600 focus:ring-orange-600"
                          placeholder="+1-XXX-XXX-XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="country" className="text-gray-900 font-semibold text-sm md:text-base">
                        Country *
                      </Label>
                      <Select value={formData.country} onValueChange={handleCountryChange} required>
                        <SelectTrigger className="mt-1 md:mt-2 border-gray-300 focus:border-orange-600 focus:ring-orange-600">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60">
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-900 font-semibold text-sm md:text-base">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 md:mt-2 border-gray-300 focus:border-orange-600 focus:ring-orange-600 min-h-32 md:min-h-40"
                        placeholder="Tell us about your project, requirements, or any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white text-base md:text-lg py-4 md:py-6"
                    >
                      Get in Touch
                      <Send className="ml-2" size={20} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information - 2 columns */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Contact Information
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                  We're here to help you with your materials innovation needs. Reach out to us and we'll respond within 24 hours.
                </p>
              </div>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-600">
                <CardContent className="pt-4 md:pt-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Location</h3>
                      <p className="text-gray-600 text-sm md:text-base">{companyInfo.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-teal-600">
                <CardContent className="pt-4 md:pt-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-teal-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Email</h3>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-teal-600 hover:text-teal-700 transition-colors duration-200 text-sm md:text-base break-all"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-600">
                <CardContent className="pt-4 md:pt-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Phone</h3>
                      <p className="text-gray-600 text-sm md:text-base">{companyInfo.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-teal-50">
                <CardContent className="pt-4 md:pt-6">
                  <Globe className="w-8 h-8 md:w-10 md:h-10 text-orange-600 mb-2 md:mb-3" />
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                    Global Presence
                  </h3>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                    With R&D centers in Seoul and manufacturing facilities in India, we serve clients worldwide across semiconductor, display, and specialty chemical industries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6 md:pt-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-3xl font-bold text-teal-600">24h</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Quick Response</h3>
                <p className="text-gray-600 text-sm md:text-base">We respond to all inquiries within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6 md:pt-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-3xl font-bold text-orange-600">Expert</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Expert Consultation</h3>
                <p className="text-gray-600 text-sm md:text-base">Direct access to our technical experts</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 sm:col-span-2 md:col-span-1">
              <CardContent className="pt-6 md:pt-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-3xl font-bold text-teal-600">Safe</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Confidential</h3>
                <p className="text-gray-600 text-sm md:text-base">Your information is secure and confidential</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
