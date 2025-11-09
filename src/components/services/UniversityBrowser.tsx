import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, DollarSign, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface University {
  id: number;
  name: string;
  city: string;
  country: string;
  ranking: number;
  programs: string[];
  scholarships: boolean;
  rating: number;
  image: string;
  filterCountry: string;
  keywords: string[];
}

const universities: University[] = [
  {
    id: 1,
    name: 'جامعة بولونيا',
    city: 'بولونيا',
    country: 'إيطاليا',
    ranking: 167,
    programs: ['الهندسة', 'الطب', 'إدارة الأعمال'],
    scholarships: true,
    rating: 4.5,
    image: '/lovable-uploads/6b3b5567-fd2c-4b7a-9a5d-f064f7109719.png',
    filterCountry: 'italy',
    keywords: ['جامعة بولونيا', 'Bologna', 'Italy']
  },
  {
    id: 2,
    name: 'معهد SRM للعلوم والتكنولوجيا',
    city: 'تشيناي',
    country: 'الهند',
    ranking: 801,
    programs: ['علوم الحاسوب', 'الهندسة', 'الإدارة'],
    scholarships: true,
    rating: 4.2,
    image: '/lovable-uploads/c591c245-e976-4338-939b-f22ccec167ab.png',
    filterCountry: 'india',
    keywords: ['SRM', 'Chennai', 'India']
  },
  {
    id: 3,
    name: 'جامعة بابش-بولياي',
    city: 'كلوج نابوكا',
    country: 'رومانيا',
    ranking: 651,
    programs: ['الطب', 'علم النفس', 'الاقتصاد'],
    scholarships: true,
    rating: 4.3,
    image: '/lovable-uploads/a3ebc772-a1f3-42d0-9c45-03d9c677e2a6.png',
    filterCountry: 'romania',
    keywords: ['Babes-Bolyai', 'Romania', 'Cluj']
  },
  {
    id: 4,
    name: 'جامعة ميلانو التقنية',
    city: 'ميلانو',
    country: 'إيطاليا',
    ranking: 154,
    programs: ['العمارة', 'التصميم', 'الهندسة'],
    scholarships: true,
    rating: 4.6,
    image: '/lovable-uploads/fe6a4f68-f143-4f67-9542-a8e94d68c617.png',
    filterCountry: 'italy',
    keywords: ['Politecnico di Milano', 'Milan', 'Italy']
  }
];

const countries = [
  { value: 'all', label: 'كل الدول' },
  { value: 'italy', label: 'إيطاليا' },
  { value: 'india', label: 'الهند' },
  { value: 'romania', label: 'رومانيا' }
];

const UniversityBrowser = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const { t } = useLanguage();

  const filteredUniversities = universities.filter((uni) => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const matchesSearch =
      normalizedSearch.length === 0 ||
      uni.name.toLowerCase().includes(normalizedSearch) ||
      uni.city.toLowerCase().includes(normalizedSearch) ||
      uni.country.toLowerCase().includes(normalizedSearch) ||
      uni.programs.some((program) => program.toLowerCase().includes(normalizedSearch)) ||
      uni.keywords.some((keyword) => keyword.toLowerCase().includes(normalizedSearch));

    const matchesCountry = selectedCountry === 'all' || uni.filterCountry === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="ابحث عن جامعة أو مدينة أو تخصص"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-10 text-right"
          />
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {countries.map((country) => (
            <Button
              key={country.value}
              variant={selectedCountry === country.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCountry(country.value)}
              className="text-sm"
            >
              {country.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredUniversities.map((uni) => (
          <Card key={uni.id} className="hover:shadow-lg transition-shadow duration-300" dir="rtl">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="text-right">
                  <CardTitle className="text-lg mb-1">{uni.name}</CardTitle>
                  <div className="flex items-center justify-end text-sm text-gray-600 mb-2 gap-1">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{uni.city}، {uni.country}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <Badge variant="secondary">الترتيب العالمي #{uni.ranking}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
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
            <CardContent className="pt-0" dir="rtl">
              <div className="space-y-3">
                <div className="text-sm text-gray-600 leading-relaxed">
                  <span className="block font-semibold text-gray-700 mb-1">تفاصيل الرسوم الدراسية:</span>
                  <span className="text-green-700 font-medium">{t('pricing.note')}</span>
                </div>

                <div>
                  <span className="text-sm text-gray-600 mb-2 block">التخصصات المتاحة:</span>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {uni.programs.map((program) => (
                      <Badge key={program} variant="outline" className="text-xs">
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>

                {uni.scholarships && (
                  <div className="flex items-center justify-end text-sm text-blue-600 gap-1">
                    <span>منح دراسية متوفرة</span>
                    <DollarSign className="w-4 h-4" />
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    قدّم طلبك الآن
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    اطلب استشارة
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUniversities.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          لم نعثر على جامعة تطابق معايير البحث الحالية. حاول تعديل الكلمات المفتاحية أو اختيار دولة مختلفة.
        </div>
      )}
    </div>
  );
};

export default UniversityBrowser;
