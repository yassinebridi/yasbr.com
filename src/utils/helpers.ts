import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const dateFormat = (date: Date) => {
  const dateString = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
  return dateString;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
