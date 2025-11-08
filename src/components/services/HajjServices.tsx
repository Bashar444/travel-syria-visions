
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Plane, Hotel, Star } from 'lucide-react';

const HajjServices = () => {
  const [selectedPackage, setSelectedPackage] = useState('hajj');

  const packages = {
    hajj: [
      {
        id: 1,
        name: "Premium Hajj Package",
        duration: "14 Days",
        price: "$4,500",
        groupSize: "25-30 people",
        accommodation: "5-star hotels",
        features: ["Direct flights", "VIP transportation", "English/Arabic guide", "All meals included", "Medical support"],
        rating: 4.8,
        available: "Dhul Hijjah 2024"
      },
      {
        id: 2,
        name: "Standard Hajj Package",
        duration: "12 Days",
        price: "$3,200",
        groupSize: "40-50 people",
        accommodation: "4-star hotels",
        features: ["Economy flights", "Group transportation", "Multilingual guide", "2 meals daily", "Basic medical support"],
        rating: 4.5,
        available: "Dhul Hijjah 2024"
      }
    ],
    umrah: [
      {
        id: 3,
        name: "Luxury Umrah Package",
        duration: "7 Days",
        price: "$1,800",
        groupSize: "15-20 people",
        accommodation: "5-star near Haram",
        features: ["Direct flights", "Private transportation", "Personal guide", "All meals", "Zam Zam water"],
        rating: 4.9,
        available: "Year-round"
      },
      {
        id: 4,
        name: "Economy Umrah Package",
        duration: "5 Days",
        price: "$1,200",
        groupSize: "30-40 people",
        accommodation: "3-star hotels",
        features: ["Economy flights", "Shared transportation", "Group guide", "Breakfast included", "Basic amenities"],
        rating: 4.3,
        available: "Year-round"
      }
    ]
  };

  const services = [
    {
      icon: Plane,
      title: "Flight Arrangements",
      description: "Direct flights from Damascus and Aleppo with comfortable seating"
    },
    {
      icon: Hotel,
      title: "Accommodation",
      description: "Quality hotels near holy sites with modern amenities"
    },
    {
      icon: Users,
      title: "Guided Tours",
      description: "Experienced guides fluent in Arabic and English"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Multiple departure dates throughout the year"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Package Type Selector */}
      <div className="flex justify-center gap-4 mb-8">
        <Button
          variant={selectedPackage === 'hajj' ? "default" : "outline"}
          onClick={() => setSelectedPackage('hajj')}
          className="px-8"
        >
          Hajj Packages
        </Button>
        <Button
          variant={selectedPackage === 'umrah' ? "default" : "outline"}
          onClick={() => setSelectedPackage('umrah')}
          className="px-8"
        >
          Umrah Packages
        </Button>
      </div>

      {/* Services Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {services.map((service, index) => (
          <Card key={index} className="text-center p-4">
            <service.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
            <p className="text-xs text-gray-600">{service.description}</p>
          </Card>
        ))}
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages[selectedPackage].map(pkg => (
          <Card key={pkg.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{pkg.duration}</Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm">{pkg.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{pkg.available}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{pkg.price}</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    {pkg.groupSize}
                  </div>
                  <div className="flex items-center">
                    <Hotel className="w-4 h-4 mr-2 text-gray-400" />
                    {pkg.accommodation}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Package Includes:</h4>
                  <ul className="space-y-1">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    Book Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Get Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Information */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Need Custom Package?</h3>
          <p className="text-gray-600 mb-4">
            Contact our Hajj specialists for personalized packages and group bookings
          </p>
          <Button 
            onClick={() => window.open('https://wa.me/+963985453247', '_blank')}
            className="bg-green-600 hover:bg-green-700"
          >
            Contact Hajj Specialist
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HajjServices;
