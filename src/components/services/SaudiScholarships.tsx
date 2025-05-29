
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, DollarSign, FileText, CheckCircle } from 'lucide-react';

const SaudiScholarships = () => {
  const [selectedLevel, setSelectedLevel] = useState('undergraduate');

  const scholarships = {
    undergraduate: [
      {
        id: 1,
        name: "King Saud University Scholarship",
        university: "King Saud University",
        location: "Riyadh",
        coverage: "Full Scholarship",
        fields: ["Engineering", "Medicine", "Sciences", "Computer Science"],
        requirements: ["High School Diploma", "IELTS 6.0+", "Age under 25"],
        deadline: "March 2024",
        benefits: ["Full tuition", "Monthly allowance", "Housing", "Health insurance"],
        rating: "Excellent"
      },
      {
        id: 2,
        name: "Princess Nourah University",
        university: "Princess Nourah bint Abdulrahman University",
        location: "Riyadh",
        coverage: "Full Scholarship (Women Only)",
        fields: ["Education", "Health Sciences", "Arts", "Business"],
        requirements: ["High School Diploma", "Arabic proficiency", "Age under 23"],
        deadline: "April 2024",
        benefits: ["Full tuition", "Living expenses", "Transportation", "Books"],
        rating: "Excellent"
      }
    ],
    graduate: [
      {
        id: 3,
        name: "KAUST Graduate Scholarship",
        university: "King Abdullah University",
        location: "Thuwal",
        coverage: "Full PhD/Masters",
        fields: ["Engineering", "Science", "Technology", "Applied Mathematics"],
        requirements: ["Bachelor's degree", "GRE/GMAT", "TOEFL 79+", "Research experience"],
        deadline: "January 2024",
        benefits: ["Full tuition", "$30,000 stipend", "Housing", "Family support"],
        rating: "Outstanding"
      },
      {
        id: 4,
        name: "Imam University Graduate Program",
        university: "Imam Muhammad Ibn Saud University",
        location: "Riyadh",
        coverage: "Partial to Full",
        fields: ["Islamic Studies", "Arabic Language", "Sharia", "Education"],
        requirements: ["Bachelor's degree", "Arabic fluency", "Islamic knowledge test"],
        deadline: "May 2024",
        benefits: ["Tuition coverage", "Monthly stipend", "Research funding"],
        rating: "Very Good"
      }
    ]
  };

  const applicationSteps = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "We evaluate your academic background and eligibility",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "Prepare and translate all required documents",
      duration: "1-2 weeks"
    },
    {
      step: 3,
      title: "Application Submission",
      description: "Submit applications to selected universities",
      duration: "2-3 weeks"
    },
    {
      step: 4,
      title: "Interview Preparation",
      description: "Coaching for scholarship interviews if required",
      duration: "1 week"
    },
    {
      step: 5,
      title: "Visa Processing",
      description: "Handle student visa application and travel arrangements",
      duration: "4-6 weeks"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Level Selector */}
      <div className="flex justify-center gap-4 mb-8">
        <Button
          variant={selectedLevel === 'undergraduate' ? "default" : "outline"}
          onClick={() => setSelectedLevel('undergraduate')}
          className="px-8"
        >
          Undergraduate
        </Button>
        <Button
          variant={selectedLevel === 'graduate' ? "default" : "outline"}
          onClick={() => setSelectedLevel('graduate')}
          className="px-8"
        >
          Graduate/PhD
        </Button>
      </div>

      {/* Scholarships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {scholarships[selectedLevel].map(scholarship => (
          <Card key={scholarship.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg mb-1">{scholarship.name}</CardTitle>
                  <p className="text-sm text-gray-600 mb-2">{scholarship.university}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{scholarship.location}</Badge>
                    <Badge 
                      variant={scholarship.rating === 'Outstanding' ? 'default' : 'outline'}
                      className={scholarship.rating === 'Outstanding' ? 'bg-green-600' : ''}
                    >
                      {scholarship.rating}
                    </Badge>
                  </div>
                </div>
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-1">{scholarship.coverage}</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    Deadline: {scholarship.deadline}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Available Fields:</h4>
                  <div className="flex flex-wrap gap-1">
                    {scholarship.fields.map(field => (
                      <Badge key={field} variant="outline" className="text-xs">
                        {field}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {scholarship.requirements.map((req, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {scholarship.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <DollarSign className="w-3 h-3 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Application Process */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-center">Our Scholarship Application Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {applicationSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 mb-1">{step.description}</p>
                <Badge variant="outline" className="text-xs">{step.duration}</Badge>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open('https://wa.me/+963985453247', '_blank')}
            >
              Start Your Scholarship Journey
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaudiScholarships;
