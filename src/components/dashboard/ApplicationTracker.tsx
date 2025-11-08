
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

interface ApplicationStep {
  id: string;
  name: string;
  status: 'completed' | 'current' | 'pending' | 'blocked';
  completedDate?: string;
  estimatedDate?: string;
  description: string;
}

interface Application {
  id: string;
  university: string;
  program: string;
  country: string;
  status: string;
  progress: number;
  steps: ApplicationStep[];
  deadline: string;
}

const ApplicationTracker: React.FC = () => {
  const timelineRef = useRef<SVGSVGElement>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedApp, setSelectedApp] = useState<string>('');

  useEffect(() => {
    // Initialize demo data
    setApplications([
      {
        id: '1',
        university: "Sant'Anna School",
        program: 'International Security',
        country: 'Italy',
        status: 'In Progress',
        progress: 75,
        deadline: '2024-06-30',
        steps: [
          {
            id: '1',
            name: 'Application Submitted',
            status: 'completed',
            completedDate: '2024-02-15',
            description: 'Initial application and documents submitted'
          },
          {
            id: '2',
            name: 'Document Verification',
            status: 'completed',
            completedDate: '2024-03-01',
            description: 'All documents verified by AI system'
          },
          {
            id: '3',
            name: 'Interview Scheduled',
            status: 'current',
            estimatedDate: '2024-04-15',
            description: 'Virtual interview with admission committee'
          },
          {
            id: '4',
            name: 'Final Review',
            status: 'pending',
            estimatedDate: '2024-05-01',
            description: 'Final admission decision review'
          },
          {
            id: '5',
            name: 'Admission Decision',
            status: 'pending',
            estimatedDate: '2024-05-15',
            description: 'Official admission letter issued'
          }
        ]
      },
      {
        id: '2',
        university: 'SRM Institute',
        program: 'Computer Science',
        country: 'India',
        status: 'Pending Documents',
        progress: 40,
        deadline: '2024-07-15',
        steps: [
          {
            id: '1',
            name: 'Application Started',
            status: 'completed',
            completedDate: '2024-03-01',
            description: 'Application form completed'
          },
          {
            id: '2',
            name: 'Documents Upload',
            status: 'blocked',
            description: 'Missing academic transcripts'
          },
          {
            id: '3',
            name: 'Entrance Exam',
            status: 'pending',
            estimatedDate: '2024-05-20',
            description: 'Online entrance examination'
          }
        ]
      }
    ]);
    setSelectedApp('1');
  }, []);

  useEffect(() => {
    if (selectedApp && timelineRef.current) {
      drawTimeline();
    }
  }, [selectedApp, applications]);

  const drawTimeline = () => {
    const svg = d3.select(timelineRef.current);
    svg.selectAll("*").remove();

    const selectedApplication = applications.find(app => app.id === selectedApp);
    if (!selectedApplication) return;

    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const width = 800 - margin.left - margin.right;
    const height = 300 - margin.bottom - margin.top;

    const g = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const steps = selectedApplication.steps;
    const stepWidth = width / (steps.length - 1);

    // Create timeline line
    g.append("line")
      .attr("x1", 0)
      .attr("y1", height / 2)
      .attr("x2", width)
      .attr("y2", height / 2)
      .attr("stroke", "#E5E7EB")
      .attr("stroke-width", 3);

    // Create step circles and labels
    steps.forEach((step, index) => {
      const x = index * stepWidth;
      const y = height / 2;

      // Circle background
      g.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 20)
        .attr("fill", getStepColor(step.status))
        .attr("stroke", "#fff")
        .attr("stroke-width", 3);

      // Step number
      g.append("text")
        .attr("x", x)
        .attr("y", y + 5)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-weight", "bold")
        .text(index + 1);

      // Step name
      g.append("text")
        .attr("x", x)
        .attr("y", y - 35)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .text(step.name);

      // Step date
      const date = step.completedDate || step.estimatedDate;
      if (date) {
        g.append("text")
          .attr("x", x)
          .attr("y", y + 45)
          .attr("text-anchor", "middle")
          .attr("font-size", "10px")
          .attr("fill", "#6B7280")
          .text(date);
      }
    });
  };

  const getStepColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#10B981';
      case 'current':
        return '#3B82F6';
      case 'blocked':
        return '#EF4444';
      default:
        return '#9CA3AF';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'current':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'blocked':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const selectedApplication = applications.find(app => app.id === selectedApp);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
            <Calendar className="w-6 h-6 text-[#0018A8]" />
            <span>Application Progress Tracker</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            {applications.map((app) => (
              <Card
                key={app.id}
                className={`cursor-pointer transition-all ${
                  selectedApp === app.id 
                    ? 'border-[#0018A8] shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedApp(app.id)}
              >
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">{app.university}</h3>
                    <p className="text-xs text-[#2B3A3E]">{app.program}</p>
                    <Badge variant="outline">{app.country}</Badge>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{app.progress}%</span>
                      </div>
                      <Progress value={app.progress} className="h-2" />
                    </div>
                    <p className="text-xs text-[#EE3524]">Due: {app.deadline}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedApplication && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-[#0E1B34] mb-2">
                  {selectedApplication.university} - {selectedApplication.program}
                </h2>
                <Badge className="mb-4">{selectedApplication.status}</Badge>
              </div>

              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Timeline</h3>
                <svg ref={timelineRef} className="w-full"></svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedApplication.steps.map((step, index) => (
                  <Card key={step.id} className="border-l-4 border-[#0018A8]">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                        {getStatusIcon(step.status)}
                        <span className="font-medium text-sm">{step.name}</span>
                      </div>
                      <p className="text-xs text-[#2B3A3E] mb-2">{step.description}</p>
                      {(step.completedDate || step.estimatedDate) && (
                        <p className="text-xs text-[#00A3E0]">
                          {step.completedDate ? `Completed: ${step.completedDate}` : `Expected: ${step.estimatedDate}`}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center space-x-4">
                <Button className="bg-[#0018A8] hover:bg-[#00A3E0]">
                  Update Application
                </Button>
                <Button variant="outline">
                  Contact Support
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationTracker;
