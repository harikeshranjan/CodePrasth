import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface LanguageBoxProps {
  id: string;
  title: string;
  description: string;
  path: string;
}

export default function LanguageBoxes({ languages, title }: { languages: LanguageBoxProps[], title: string }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-6">
      {languages.map((language) => (
        <Link href={language.path} key={language.id}>
          <Card
            className="relative overflow-hidden group cursor-pointer shadow-lg"
          >
            <CardContent className="px-4 py-8 flex flex-col items-center justify-between gap-4 relative z-10">
              <h3 className="text-xl font-semibold mb-2">{language.title}</h3>
            </CardContent>

            <div className="absolute flex items-center rounded-lg h-full inset-x-0 bottom-0 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-4 backdrop-filter backdrop-blur-lg bg-primary/5 text-white">
              <p className="text-primary/80 text-center text-sm font-medium">
                {language.description}
              </p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
