import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function absoluteUrl(path: string) {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:3000/${path}`
    : `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
