import React from 'react';
import { Building, Users, Award, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Stats() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <Building className="h-8 w-8" />,
      value: '500+',
      label: t('stats.projectsCompleted')
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: '250+',
      label: t('stats.teamMembers')
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: '25+',
      label: t('stats.yearsExperience')
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      value: '98%',
      label: t('stats.onTimeCompletion')
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-red-600/20 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
