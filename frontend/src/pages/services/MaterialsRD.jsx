import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, CheckCircle2, Plus, X, Calendar } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { useToast } from '../../hooks/use-toast';

export const MaterialsRD = () => {
  const { toast } = useToast();
  
  const benefits = [
    "External lab for semiconductor materials development",
    "Formulation and composition optimization",
    "Comprehensive analysis and characterization",
    "Performance validation and testing",
    "Rapid prototyping and iteration",
    "Expert scientific consultation"
  ];

  // Product Inquiry State
  const [products, setProducts] = useState([{
    id: 1,
    productName: '',
    casNumber: '',
    packSize: '',
    unit: 'mg',
    packQuantity: '',
    purityLevel: '',
    grade: 'Reagent'
  }]);

  const [customerInfo, setCustomerInfo] = useState({
    phoneNumber: '',
    customerName: '',
    companyName: '',
    email: ''
  });

  // Meeting Request State
  const [meetingRequest, setMeetingRequest] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const addProduct = () => {
    if (products.length < 10) {
      setProducts([...products, {
        id: products.length + 1,
        productName: '',
        casNumber: '',
        packSize: '',
        unit: 'mg',
        packQuantity: '',
        purityLevel: '',
        grade: 'Reagent'
      }]);
    }
  };

  const removeProduct = (id) => {
    if (products.length > 1) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleProductChange = (id, field, value) => {
    setProducts(products.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const handleCustomerInfoChange = (field, value) => {
    setCustomerInfo({ ...customerInfo, [field]: value });
  };

  const handleMeetingChange = (field, value) => {
    setMeetingRequest({ ...meetingRequest, [field]: value });
  };

  const handleProductInquiry = (e) => {
    e.preventDefault();
    console.log('Product Inquiry:', { customerInfo, products });
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your inquiry. Our team will contact you shortly.",
    });
  };

  const handleMeetingRequest = (e) => {
    e.preventDefault();
    console.log('Meeting Request:', meetingRequest);
    toast({
      title: "Meeting Request Sent!",
      description: "Our custom synthesis team will reach out to schedule a meeting.",
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 bg-orange-600 rounded-full text-sm font-semibold mb-4">
            CRO - Contract Research Organization
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Materials R&D Services
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            We act as your external lab for developing and testing new semiconductor materials, including formulation, analysis, and performance validation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Beaker className="w-16 h-16 text-orange-600 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your External Research Partner
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                LAMKO provides comprehensive R&D services for companies requiring specialized expertise in advanced materials without building internal infrastructure. Our team of expert scientists works as an extension of your team.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1766297247924-6638d54e7c89"
                alt="Materials R&D"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Benefits
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 size={24} className="text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* For Whom */}
          <Card className="bg-orange-50 border-l-4 border-l-orange-600">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideal For:</h3>
              <p className="text-lg text-gray-700">
                Companies requiring specialized R&D expertise for advanced materials without building internal infrastructure. Perfect for startups, research institutions, and established companies looking to accelerate innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Accelerate Your R&D?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your materials development needs
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
              Contact Our Team
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
