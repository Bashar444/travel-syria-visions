
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
        country: 'إيطاليا',
        type: 'تأشيرة طالب',
        status: 'processing',
        progress: 65,
        estimatedCompletion: '2024-04-15',
        requiredDocuments: [
          { name: 'جواز السفر', status: 'verified', aiVerificationScore: 98 },
          { name: 'خطاب القبول الجامعي', status: 'verified', aiVerificationScore: 95 },
          { name: 'إثبات القدرة المالية', status: 'uploaded', aiVerificationScore: 87 },
          { name: 'شهادة طبية', status: 'pending' },
          { name: 'تأمين سفر', status: 'pending' }
        ],
        nextSteps: [
          'إجراء الفحص الطبي المطلوب',
          'شراء تأمين سفر معتمد',
          'حجز موعد في السفارة'
        ]
      },
      {
        id: '2',
        country: 'رومانيا',
        type: 'تأشيرة طالب',
        status: 'requires-action',
        progress: 40,
        estimatedCompletion: '2024-05-01',
        requiredDocuments: [
          { name: 'جواز السفر', status: 'verified', aiVerificationScore: 96 },
          { name: 'خطاب القبول الجامعي', status: 'rejected', rejectionReason: 'جودة المستند غير كافية' },
          { name: 'إثبات القدرة المالية', status: 'pending' },
          { name: 'شهادة الميلاد', status: 'pending' }
        ],
        nextSteps: [
          'إعادة رفع خطاب القبول الجامعي بصيغة واضحة',
          'تقديم المستندات المالية المطلوبة',
          'تسليم شهادة الميلاد مترجمة ومصدّقة'
        ]
      }
    ]);
  }, []);

  const statusLabels: Record<VisaApplication['status'], string> = {
    pending: 'قيد الانتظار',
    processing: 'تجري المعالجة',
    approved: 'مقبولة',
    rejected: 'مرفوضة',
    'requires-action': 'بحاجة إلى إجراء'
  };

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
    <div className="max-w-6xl mx-auto space-y-6" dir="rtl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
            <FileText className="w-6 h-6 text-[#0018A8]" />
            <span>متابعة طلبات التأشيرات بالذكاء الاصطناعي</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {applications.map((app) => (
              <Card key={app.id} className="border-l-4 border-[#0018A8]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-[#0E1B34]">{app.country} - {app.type}</CardTitle>
                      <p className="text-sm text-[#2B3A3E]">التاريخ المتوقع للإنجاز: {app.estimatedCompletion}</p>
                    </div>
                    <Badge className={getStatusColor(app.status)}>
                      {statusLabels[app.status]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>نسبة التقدم</span>
                        <span>{app.progress}%</span>
                      </div>
                      <Progress value={app.progress} className="w-full" />
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">المستندات المطلوبة</h4>
                      <div className="space-y-2">
                        {app.requiredDocuments.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                              {getStatusIcon(doc.status)}
                              <span className="text-sm">{doc.name}</span>
                              {doc.aiVerificationScore && (
                                <Badge variant="secondary" className="text-xs">
                                  دقة التحقق {doc.aiVerificationScore}%
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
                                <Upload className="w-3 h-3 rtl:ml-1 ltr:mr-1" />
                                رفع المستند
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">الخطوات التالية</h4>
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
                      عرض التفاصيل
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
