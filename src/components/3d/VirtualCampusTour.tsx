
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Plane } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, BookOpen, Home } from 'lucide-react';
import * as THREE from 'three';

interface CampusLocation {
  id: string;
  name: string;
  position: [number, number, number];
  color: string;
  description: string;
  capacity?: number;
  type: 'building' | 'facility' | 'residence';
}

const CampusBuilding: React.FC<{ location: CampusLocation; onClick: () => void }> = ({ location, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.scale.setScalar(hovered ? 1.1 : 1);
    }
  });

  return (
    <group position={location.position}>
      <Box
        ref={meshRef}
        args={[2, 3, 2]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial color={hovered ? '#00A3E0' : location.color} />
      </Box>
      <Text
        position={[0, 2, 0]}
        fontSize={0.5}
        color="#0E1B34"
        anchorX="center"
        anchorY="middle"
      >
        {location.name}
      </Text>
    </group>
  );
};

const Campus3D: React.FC<{ locations: CampusLocation[]; onLocationSelect: (location: CampusLocation) => void }> = ({ 
  locations, 
  onLocationSelect 
}) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Ground plane */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <meshStandardMaterial color="#90EE90" />
      </Plane>
      
      {/* Campus buildings */}
      {locations.map((location) => (
        <CampusBuilding
          key={location.id}
          location={location}
          onClick={() => onLocationSelect(location)}
        />
      ))}
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
};

const VirtualCampusTour: React.FC = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<string>('sant-anna');
  const [selectedLocation, setSelectedLocation] = useState<CampusLocation | null>(null);

  const universities = {
    'sant-anna': {
      name: "Sant'Anna School of Advanced Studies",
      country: 'Italy',
      locations: [
        {
          id: '1',
          name: 'Main Library',
          position: [0, 0, 0] as [number, number, number],
          color: '#8B4513',
          description: 'State-of-the-art research library with over 500,000 volumes',
          type: 'building' as const
        },
        {
          id: '2',
          name: 'Research Labs',
          position: [5, 0, 5] as [number, number, number],
          color: '#4169E1',
          description: 'Advanced research facilities for international security studies',
          type: 'building' as const
        },
        {
          id: '3',
          name: 'Student Residence',
          position: [-5, 0, 5] as [number, number, number],
          color: '#32CD32',
          description: 'Modern accommodation for international students',
          capacity: 200,
          type: 'residence' as const
        },
        {
          id: '4',
          name: 'Sports Center',
          position: [0, 0, -5] as [number, number, number],
          color: '#FF6347',
          description: 'Complete fitness and sports facilities',
          type: 'facility' as const
        }
      ]
    },
    'srm': {
      name: 'SRM Institute of Science and Technology',
      country: 'India',
      locations: [
        {
          id: '1',
          name: 'Engineering Block',
          position: [0, 0, 0] as [number, number, number],
          color: '#B22222',
          description: 'Modern engineering labs and classrooms',
          type: 'building' as const
        },
        {
          id: '2',
          name: 'Tech Park',
          position: [6, 0, 3] as [number, number, number],
          color: '#4682B4',
          description: 'Industry collaboration and innovation center',
          type: 'building' as const
        },
        {
          id: '3',
          name: 'Campus Hostel',
          position: [-4, 0, 4] as [number, number, number],
          color: '#228B22',
          description: 'International student accommodation',
          capacity: 500,
          type: 'residence' as const
        }
      ]
    }
  };

  const currentUniversity = universities[selectedUniversity as keyof typeof universities];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 rtl:space-x-reverse">
            <MapPin className="w-6 h-6 text-[#0018A8]" />
            <span>Virtual Campus Tours</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex space-x-4 mb-4">
              {Object.entries(universities).map(([key, uni]) => (
                <Button
                  key={key}
                  variant={selectedUniversity === key ? "default" : "outline"}
                  onClick={() => setSelectedUniversity(key)}
                  className={selectedUniversity === key ? "bg-[#0018A8]" : ""}
                >
                  {uni.name}
                </Button>
              ))}
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Badge variant="secondary">{currentUniversity.country}</Badge>
              <span className="text-[#2B3A3E]">{currentUniversity.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
                <Canvas camera={{ position: [15, 10, 15], fov: 60 }}>
                  <Suspense fallback={null}>
                    <Campus3D
                      locations={currentUniversity.locations}
                      onLocationSelect={setSelectedLocation}
                    />
                  </Suspense>
                </Canvas>
              </div>
              <div className="mt-4 text-sm text-[#2B3A3E]">
                Click and drag to rotate • Scroll to zoom • Click buildings for details
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Campus Locations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentUniversity.locations.map((location) => (
                      <div
                        key={location.id}
                        className={`p-3 rounded border cursor-pointer transition-colors ${
                          selectedLocation?.id === location.id 
                            ? 'border-[#0018A8] bg-blue-50' 
                            : 'border-gray-200 hover:border-[#00A3E0]'
                        }`}
                        onClick={() => setSelectedLocation(location)}
                      >
                        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                          {location.type === 'building' && <BookOpen className="w-4 h-4 text-[#0018A8]" />}
                          {location.type === 'residence' && <Home className="w-4 h-4 text-[#0018A8]" />}
                          {location.type === 'facility' && <Users className="w-4 h-4 text-[#0018A8]" />}
                          <span className="font-medium">{location.name}</span>
                        </div>
                        <p className="text-sm text-[#2B3A3E]">{location.description}</p>
                        {location.capacity && (
                          <Badge variant="outline" className="mt-2">
                            Capacity: {location.capacity}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {selectedLocation && (
                <Card className="border-[#0018A8]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#0018A8]">
                      {selectedLocation.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#2B3A3E] mb-4">{selectedLocation.description}</p>
                    {selectedLocation.capacity && (
                      <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                        <Users className="w-4 h-4 text-[#00A3E0]" />
                        <span className="text-sm">Capacity: {selectedLocation.capacity}</span>
                      </div>
                    )}
                    <Button className="w-full bg-[#0018A8] hover:bg-[#00A3E0]">
                      Schedule Virtual Meeting
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VirtualCampusTour;
