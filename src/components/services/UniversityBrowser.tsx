
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Users, DollarSign, Star } from 'lucide-react';

const UniversityBrowser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');

  const universities = [
    {
      id: 1,
      name: "University of Bologna",
      country: "Italy",
      city: "Bologna",
      ranking: 167,
      tuitionFee: "€3,000-4,000/year",
      programs: ["Engineering", "Medicine", "Business"],
      scholarships: true,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80"
    },
    {
      id: 2,
      name: "SRM Institute of Science",
      country: "India",
      city: "Chennai",
      ranking: 801,
      tuitionFee: "$3,000-5,000/year",
      programs: ["Computer Science", "Engineering", "Management"],
      scholarships: true,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80"
    },
    {
      id: 3,
      name: "Babeș-Bolyai University",
      country: "Romania",
      city: "Cluj-Napoca",
      ranking: 651,
      tuitionFee: "€2,000-3,500/year",
      programs: ["Medicine", "Psychology", "Economics"],
      scholarships: true,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=400&q=80"
    },
    {
      id: 4,
      name: "Polytechnic University of Milan",
      country: "Italy",
      city: "Milan",
      ranking: 154,
      tuitionFee: "€3,900/year",
      programs: ["Architecture", "Design", "Engineering"],
      scholarships: true,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&q=80"
    }
  ];

  const countries = ['all', 'Italy', 'India', 'Romania'];

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.programs.some(program => program.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCountry = selectedCountry === 'all' || uni.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search universities, cities, or programs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {countries.map(country => (
            <Button
              key={country}
              variant={selectedCountry === country ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCountry(country)}
              className="capitalize"
            >
              {country}
            </Button>
          ))}
        </div>
      </div>

      {/* University Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredUniversities.map(uni => (
          <Card key={uni.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg mb-1">{uni.name}</CardTitle>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {uni.city}, {uni.country}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Rank #{uni.ranking}</Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm">{uni.rating}</span>
                    </div>
                  </div>
                </div>
                <img 
                  src={uni.image} 
                  alt={uni.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tuition Fee:</span>
                  <span className="font-semibold text-green-600">{uni.tuitionFee}</span>
                </div>
                
                <div>
                  <span className="text-sm text-gray-600 mb-2 block">Popular Programs:</span>
                  <div className="flex flex-wrap gap-1">
                    {uni.programs.map(program => (
                      <Badge key={program} variant="outline" className="text-xs">
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>

                {uni.scholarships && (
                  <div className="flex items-center text-sm text-blue-600">
                    <DollarSign className="w-4 h-4 mr-1" />
                    Scholarships Available
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    Apply Now
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUniversities.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No universities found matching your criteria. Try adjusting your search.
        </div>
      )}
    </div>
  );
};

export default UniversityBrowser;
