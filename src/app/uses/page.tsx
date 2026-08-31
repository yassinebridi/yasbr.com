import { usesContent } from '@/data';
import { hostname } from '@utils';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Uses',
  description: 'What I use to build things',
  alternates: {
    canonical: `${hostname}/uses`,
  },
};
export default function UsesPage() {
  return (
    <div className="max-w-3xl px-6 py-6 mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold text-center sm:text-3xl">Uses</h1>
        <p className="mt-2 text-sm text-primary-600 text-center dark:text-primary-300 sm:text-lg">
          {usesContent.description}
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {usesContent.categories.map((category) => (
          <div key={category.title}>
            <h2 className="text-lg font-bold">{category.title}</h2>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              {category.items.map((item) => (
                <li key={item.label}>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:no-underline"
                    >
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
