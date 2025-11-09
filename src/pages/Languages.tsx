import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, Globe, Languages as LanguagesIcon } from 'lucide-react';

interface BilingualSection {
  key: 'english' | 'german';
  heading: string;
  overview: {
    primary: string;
    secondary: string;
  };
  services: {
    primary: string[];
    secondary: string[];
  };
}

const parseList = (value: string): string[] => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('Unable to parse list for languages page', error);
    return [];
  }
};

const Languages = () => {
  const { t, direction } = useLanguage();

  const primaryLabel = direction === 'rtl' ? 'بالعربية' : 'English';
  const secondaryLabel = direction === 'rtl' ? 'English' : 'العربية';

  const sections: BilingualSection[] = [
    {
      key: 'english',
      heading: t('languages.english.heading'),
      overview: {
        primary: direction === 'rtl' ? t('languages.english.overview.ar') : t('languages.english.overview.en'),
        secondary: direction === 'rtl' ? t('languages.english.overview.en') : t('languages.english.overview.ar'),
      },
      services: {
        primary: parseList(direction === 'rtl' ? t('languages.english.services') : t('languages.english.services.ar')),
        secondary: parseList(direction === 'rtl' ? t('languages.english.services.ar') : t('languages.english.services')),
      },
    },
    {
      key: 'german',
      heading: t('languages.german.heading'),
      overview: {
        primary: direction === 'rtl' ? t('languages.german.overview.ar') : t('languages.german.overview.en'),
        secondary: direction === 'rtl' ? t('languages.german.overview.en') : t('languages.german.overview.ar'),
      },
      services: {
        primary: parseList(direction === 'rtl' ? t('languages.german.services') : t('languages.german.services.ar')),
        secondary: parseList(direction === 'rtl' ? t('languages.german.services.ar') : t('languages.german.services')),
      },
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className={`mb-16 text-center ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full shadow-sm border border-slate-200">
            <LanguagesIcon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">{t('languages.subtitle')}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 mt-6 mb-4">
            {t('languages.title')}
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl">
            {direction === 'rtl'
              ? 'نوفر برامج لغوية متخصصة لدعم الطلاب في إتقان اللغة الإنجليزية والألمانية، مع محتوى ثنائي اللغة لضمان فهم كامل لكل التفاصيل.'
              : 'We deliver specialised language tracks that prepare students for English and German admission requirements while presenting every module in both Arabic and English for total clarity.'}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {sections.map((section) => (
            <Card key={section.key} className="border border-slate-200 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                  {section.heading}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
                    {t('languages.overview')}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                      <p className="text-sm text-blue-900 leading-relaxed">
                        <strong className="block text-xs uppercase tracking-wide text-blue-700 mb-2">{primaryLabel}</strong>
                        {section.overview.primary}
                      </p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-4">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        <strong className="block text-xs uppercase tracking-wide text-slate-500 mb-2">{secondaryLabel}</strong>
                        {section.overview.secondary}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
                    {t('languages.services')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {primaryLabel}
                      </p>
                      <ul className="space-y-2">
                        {section.services.primary.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                        {secondaryLabel}
                      </p>
                      <ul className="space-y-2">
                        {section.services.secondary.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-blue-900">
                            <CheckCircle2 className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-lg border border-blue-100">
            <p className="text-base text-slate-700 max-w-xl">
              {direction === 'rtl'
                ? 'ابدأ تقييمك اللغوي المجاني مع مستشارينا واحصل على خطة تعلم مخصصة لكل من الإنجليزية والألمانية.'
                : 'Begin your free language assessment with our advisors and receive a tailored learning roadmap for both English and German tracks.'}
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => window.location.assign('/contact')}
            >
              {t('languages.cta')}
            </Button>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            {direction === 'rtl'
              ? 'نوفر تقارير تقدم ثنائية اللغة ودعمًا مباشرًا من مستشارينا المعتمدين.'
              : 'We provide bilingual progress reports and direct support from certified advisors.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Languages;
