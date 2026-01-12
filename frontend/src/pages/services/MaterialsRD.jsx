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

      {/* Inquiry Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Submit Your Inquiry
            </h2>
            <p className="text-xl text-gray-600">
              Request materials or schedule a meeting with our custom synthesis team
            </p>
          </div>

          <Tabs defaultValue="product" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="product">Product Inquiry</TabsTrigger>
              <TabsTrigger value="meeting">Request Meeting</TabsTrigger>
            </TabsList>

            {/* Product Inquiry Tab */}
            <TabsContent value="product">
              <Card className="shadow-2xl">
                <CardContent className="pt-8">
                  <form onSubmit={handleProductInquiry}>
                    {/* Customer Information */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phoneNumber">Phone Number *</Label>
                          <Input
                            id="phoneNumber"
                            required
                            value={customerInfo.phoneNumber}
                            onChange={(e) => handleCustomerInfoChange('phoneNumber', e.target.value)}
                            placeholder="Enter your contact number"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="customerName">Customer Name * (Last name first)</Label>
                          <Input
                            id="customerName"
                            required
                            value={customerInfo.customerName}
                            onChange={(e) => handleCustomerInfoChange('customerName', e.target.value)}
                            placeholder="Doe, John"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="companyName">Company/ University/ Institution Name *</Label>
                          <Input
                            id="companyName"
                            required
                            value={customerInfo.companyName}
                            onChange={(e) => handleCustomerInfoChange('companyName', e.target.value)}
                            placeholder="Enter organization name"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={customerInfo.email}
                            onChange={(e) => handleCustomerInfoChange('email', e.target.value)}
                            placeholder="your.email@company.com"
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">Product Details</h3>
                        {products.length < 10 && (
                          <Button type="button" onClick={addProduct} variant="outline" size="sm">
                            <Plus size={16} className="mr-2" />
                            Add Product
                          </Button>
                        )}
                      </div>

                      {products.map((product, index) => (
                        <Card key={product.id} className="mb-6 bg-gray-50">
                          <CardContent className="pt-6">
                            <div className="flex justify-between items-center mb-4">
                              <h4 className="text-lg font-semibold text-gray-900">Product {index + 1}</h4>
                              {products.length > 1 && (
                                <Button
                                  type="button"
                                  onClick={() => removeProduct(product.id)}
                                  variant="ghost"
                                  size="sm"
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <X size={16} />
                                </Button>
                              )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <Label>Product Name *</Label>
                                <Input
                                  required
                                  value={product.productName}
                                  onChange={(e) => handleProductChange(product.id, 'productName', e.target.value)}
                                  placeholder="Enter product name"
                                  className="mt-2"
                                />
                              </div>
                              <div>
                                <Label>CAS Number</Label>
                                <Input
                                  value={product.casNumber}
                                  onChange={(e) => handleProductChange(product.id, 'casNumber', e.target.value)}
                                  placeholder="Enter CAS Number if known"
                                  className="mt-2"
                                />
                              </div>
                              <div>
                                <Label>Pack Size *</Label>
                                <div className="flex gap-2 mt-2">
                                  <Input
                                    required
                                    type="number"
                                    value={product.packSize}
                                    onChange={(e) => handleProductChange(product.id, 'packSize', e.target.value)}
                                    placeholder="Size"
                                    className="flex-1"
                                  />
                                  <Select
                                    value={product.unit}
                                    onValueChange={(value) => handleProductChange(product.id, 'unit', value)}
                                  >
                                    <SelectTrigger className="w-24">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="mg">mg</SelectItem>
                                      <SelectItem value="gm">gm</SelectItem>
                                      <SelectItem value="kg">kg</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <div>
                                <Label>Pack Quantity</Label>
                                <Input
                                  type="number"
                                  value={product.packQuantity}
                                  onChange={(e) => handleProductChange(product.id, 'packQuantity', e.target.value)}
                                  placeholder="Quantity"
                                  className="mt-2"
                                />
                              </div>
                              <div>
                                <Label>Purity Level</Label>
                                <Input
                                  value={product.purityLevel}
                                  onChange={(e) => handleProductChange(product.id, 'purityLevel', e.target.value)}
                                  placeholder="e.g., 95%, 99%"
                                  className="mt-2"
                                />
                              </div>
                              <div>
                                <Label>Grade</Label>
                                <Select
                                  value={product.grade}
                                  onValueChange={(value) => handleProductChange(product.id, 'grade', value)}
                                >
                                  <SelectTrigger className="mt-2">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Reagent">Reagent</SelectItem>
                                    <SelectItem value="Sublimed">Sublimed</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white mt-6">
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Meeting Request Tab */}
            <TabsContent value="meeting">
              <Card className="shadow-2xl">
                <CardContent className="pt-8">
                  <div className="mb-6 text-center">
                    <Calendar className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Connect with Our Custom Synthesis Team
                    </h3>
                    <p className="text-gray-600">
                      Schedule a meeting to discuss your specific requirements
                    </p>
                  </div>

                  <form onSubmit={handleMeetingRequest} className="space-y-6">
                    <div>
                      <Label htmlFor="meetingName">Name *</Label>
                      <Input
                        id="meetingName"
                        required
                        value={meetingRequest.name}
                        onChange={(e) => handleMeetingChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="meetingCompany">Company *</Label>
                      <Input
                        id="meetingCompany"
                        required
                        value={meetingRequest.company}
                        onChange={(e) => handleMeetingChange('company', e.target.value)}
                        placeholder="Your company name"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="meetingEmail">Email *</Label>
                      <Input
                        id="meetingEmail"
                        type="email"
                        required
                        value={meetingRequest.email}
                        onChange={(e) => handleMeetingChange('email', e.target.value)}
                        placeholder="your.email@company.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="meetingMessage">Message *</Label>
                      <Textarea
                        id="meetingMessage"
                        required
                        value={meetingRequest.message}
                        onChange={(e) => handleMeetingChange('message', e.target.value)}
                        placeholder="Tell us about your requirements and preferred meeting times..."
                        className="mt-2 min-h-32"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Request Meeting
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
