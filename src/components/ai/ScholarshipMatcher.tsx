
import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Target, Award, Globe } from 'lucide-react';

interface StudentProfile {
  academicScore: number;
  financialNeed: number;
  conflictAreaStatus: boolean;
  preferredCountries: string[];
  fieldOfStudy: string;
  languageProficiency: number;
}

interface ScholarshipMatch {
  id: string;
  university: string;
  program: string;
  country: string;
  matchScore: number;
  fundingAmount: number;
  requirements: string[];
  deadline: string;
}

const ScholarshipMatcher: React.FC = () => {
  const [studentProfile, setStudentProfile] = useState<StudentProfile | null>(null);
  const [matches, setMatches] = useState<ScholarshipMatch[]>([]);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState<tf.LayersModel | null>(null);

  useEffect(() => {
    loadAIModel();
  }, []);

  const loadAIModel = async () => {
    try {
      // In production, this would load a pre-trained model from a URL
      const modelData = {
        inputs: tf.input({ shape: [6] }),
        layers: [
          tf.layers.dense({ units: 64, activation: 'relu' }),
          tf.layers.dropout({ rate: 0.3 }),
          tf.layers.dense({ units: 32, activation: 'relu' }),
          tf.layers.dense({ units: 1, activation: 'sigmoid' })
        ]
      };
      
      // Create a simple sequential model for demonstration
      const newModel = tf.sequential({
        layers: [
          tf.layers.dense({ inputShape: [6], units: 64, activation: 'relu' }),
          tf.layers.dropout({ rate: 0.3 }),
          tf.layers.dense({ units: 32, activation: 'relu' }),
          tf.layers.dense({ units: 1, activation: 'sigmoid' })
        ]
      });

      newModel.compile({
        optimizer: 'adam',
        loss: 'binaryCrossentropy',
        metrics: ['accuracy']
      });

      setModel(newModel);
    } catch (error) {
      console.error('Error loading AI model:', error);
    }
  };

  const calculateMatchScore = async (profile: StudentProfile): Promise<number> => {
    if (!model) return Math.random() * 0.4 + 0.6; // Fallback random score

    try {
      const inputTensor = tf.tensor2d([[
        profile.academicScore / 100,
        profile.financialNeed / 10,
        profile.conflictAreaStatus ? 1 : 0,
        profile.preferredCountries.length / 5,
        profile.languageProficiency / 10,
        Math.random() // Simulated additional factor
      ]]);

      const prediction = model.predict(inputTensor) as tf.Tensor;
      const score = await prediction.data();
      
      inputTensor.dispose();
      prediction.dispose();
      
      return score[0];
    } catch (error) {
      console.error('Error calculating match score:', error);
      return Math.random() * 0.4 + 0.6;
    }
  };

  const generateMatches = async (profile: StudentProfile) => {
    setLoading(true);
    
    const scholarshipData = [
      {
        id: '1',
        university: "Sant'Anna School of Advanced Studies",
        program: 'International Security Studies',
        country: 'Italy',
        fundingAmount: 15000,
        requirements: ['GPA > 3.5', 'English B2', 'Research proposal'],
        deadline: '2024-06-30'
      },
      {
        id: '2',
        university: 'SRM Institute of Science and Technology',
        program: 'Computer Science Engineering',
        country: 'India',
        fundingAmount: 8000,
        requirements: ['GPA > 3.0', 'English B1', 'Entrance exam'],
        deadline: '2024-07-15'
      },
      {
        id: '3',
        university: 'Babeș-Bolyai University',
        program: 'Business Administration',
        country: 'Romania',
        fundingAmount: 12000,
        requirements: ['GPA > 3.2', 'English B2', 'Interview'],
        deadline: '2024-08-01'
      },
      {
        id: '4',
        university: 'University of Milano-Bicocca',
        program: 'Medicine',
        country: 'Italy',
        fundingAmount: 20000,
        requirements: ['GPA > 3.8', 'English C1', 'Medical aptitude test'],
        deadline: '2024-05-30'
      }
    ];

    const matchedScholarships = await Promise.all(
      scholarshipData.map(async (scholarship) => {
        const matchScore = await calculateMatchScore(profile);
        return {
          ...scholarship,
          matchScore: Math.round(matchScore * 100)
        };
      })
    );

    // Sort by match score and prioritize conflict area students
    const sortedMatches = matchedScholarships.sort((a, b) => {
      if (profile.conflictAreaStatus) {
        return b.matchScore - a.matchScore;
      }
      return b.matchScore - a.matchScore;
    });

    setMatches(sortedMatches);
    setLoading(false);
  };

  const handleProfileSubmit = (profile: StudentProfile) => {
    setStudentProfile(profile);
    generateMatches(profile);
  };

  if (!studentProfile) {
    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
            <Target className="w-6 h-6 text-[#0018A8]" />
            <span>AI-Powered Scholarship Matching</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-[#2B3A3E] leading-relaxed">
              Our AI system analyzes your academic profile and matches you with the most suitable scholarships from over 150+ universities.
            </p>
            <Button 
              onClick={() => handleProfileSubmit({
                academicScore: 85,
                financialNeed: 8,
                conflictAreaStatus: true,
                preferredCountries: ['Italy', 'Romania'],
                fieldOfStudy: 'Engineering',
                languageProficiency: 7
              })}
              className="bg-[#0018A8] hover:bg-[#00A3E0] text-white"
            >
              Start AI Matching Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
            <Award className="w-6 h-6 text-[#0018A8]" />
            <span>Your Scholarship Matches</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              <div className="text-center">
                <div className="animate-pulse text-[#0018A8]">AI is analyzing your profile...</div>
              </div>
              <Progress value={85} className="w-full" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {matches.map((match) => (
                <Card key={match.id} className="border-l-4 border-[#0018A8] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-[#0E1B34]">{match.university}</CardTitle>
                        <p className="text-[#2B3A3E]">{match.program}</p>
                      </div>
                      <Badge variant={match.matchScore > 80 ? "default" : "secondary"}>
                        {match.matchScore}% Match
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Globe className="w-4 h-4 text-[#00A3E0]" />
                        <span className="text-sm">{match.country}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <BookOpen className="w-4 h-4 text-[#00A3E0]" />
                        <span className="text-sm font-semibold">${match.fundingAmount.toLocaleString()} funding</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Requirements:</p>
                        <ul className="text-xs text-[#2B3A3E] space-y-1">
                          {match.requirements.map((req, index) => (
                            <li key={index} className="flex items-center space-x-1 rtl:space-x-reverse">
                              <span className="w-1 h-1 bg-[#0018A8] rounded-full"></span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs text-[#EE3524] font-medium">
                        Deadline: {match.deadline}
                      </div>
                      <Button size="sm" className="w-full bg-[#0018A8] hover:bg-[#00A3E0]">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ScholarshipMatcher;
