
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, AlertCircle, FileText, Upload } from 'lucide-react';

interface VisaApplication {
  id: string;
  country: string;
  type: string;
  status: 'pending' | 'processing' | 'approved' | 'rejected' | 'requires-action';
  progress: number;
  estimatedCompletion: string;
  requiredDocuments: Document[];
  nextSteps: string[];
}

interface Document {
  name: string;
  status: 'pending' | 'uploaded' | 'verified' | 'rejected';
  aiVerificationScore?: number;
  rejectionReason?: string;
}

const VisaProcessingModule: React.FC = () => {
  const [applications, setApplications] = useState<VisaApplication[]>([]);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize with demo data
    setApplications([
      {
        id: '1',
        country: 'Italy',
        type: 'Student Visa',
        status: 'processing',
        progress: 65,
        estimatedCompletion: '2024-04-15',
        requiredDocuments: [
          { name: 'Passport', status: 'verified', aiVerificationScore: 98 },
          { name: 'University Acceptance Letter', status: 'verified', aiVerificationScore: 95 },
          { name: 'Financial Proof', status: 'uploaded', aiVerificationScore: 87 },
          { name: 'Medical Certificate', status: 'pending' },
          { name: 'Travel Insurance', status: 'pending' }
        ],
        nextSteps: [
          'Complete medical examination',
          'Purchase travel insurance',
          'Schedule embassy appointment'
        ]
      },
      {
        id: '2',
        country: 'Romania',
        type: 'Student Visa',
        status: 'requires-action',
        progress: 40,
        estimatedCompletion: '2024-05-01',
        requiredDocuments: [
          { name: 'Passport', status: 'verified', aiVerificationScore: 96 },
          { name: 'University Acceptance Letter', status: 'rejected', rejectionReason: 'Document quality too low' },
          { name: 'Financial Proof', status: 'pending' },
          { name: 'Birth Certificate', status: 'pending' }
        ],
        nextSteps: [
          'Re-upload university acceptance letter',
          'Provide financial documentation',
          'Submit birth certificate'
        ]
      }
    ]);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'processing':
      case 'uploaded':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'rejected':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <FileText className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'processing':
      case 'uploaded':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'requires-action':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const simulateAIVerification = async (documentName: string) => {
    setLoading(true);
    
    // Simulate AI document verification process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const verificationScore = Math.floor(Math.random() * 30) + 70; // 70-100%
    
    setApplications(prev => prev.map(app => ({
      ...app,
      requiredDocuments: app.requiredDocuments.map(doc => 
        doc.name === documentName 
          ? { ...doc, status: 'verified' as const, aiVerificationScore: verificationScore }
          : doc
      )
    })));
    
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
            <FileText className="w-6 h-6 text-[#0018A8]" />
            <span>AI-Powered Visa Processing</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {applications.map((app) => (
              <Card key={app.id} className="border-l-4 border-[#0018A8]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{app.country} {app.type}</CardTitle>
                      <p className="text-sm text-[#2B3A3E]">Est. completion: {app.estimatedCompletion}</p>
                    </div>
                    <Badge className={getStatusColor(app.status)}>
                      {app.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{app.progress}%</span>
                      </div>
                      <Progress value={app.progress} className="w-full" />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Required Documents</h4>
                      <div className="space-y-2">
                        {app.requiredDocuments.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                              {getStatusIcon(doc.status)}
                              <span className="text-sm">{doc.name}</span>
                              {doc.aiVerificationScore && (
                                <Badge variant="secondary" className="text-xs">
                                  {doc.aiVerificationScore}% confidence
                                </Badge>
                              )}
                            </div>
                            {doc.status === 'pending' && (
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => simulateAIVerification(doc.name)}
                                disabled={loading}
                              >
                                <Upload className="w-3 h-3 mr-1" />
                                Upload
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Next Steps</h4>
                      <ul className="text-sm space-y-1">
                        {app.nextSteps.map((step, index) => (
                          <li key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="w-1 h-1 bg-[#0018A8] rounded-full"></span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="w-full bg-[#0018A8] hover:bg-[#00A3E0]"
                      onClick={() => setSelectedApp(app.id)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisaProcessingModule;
