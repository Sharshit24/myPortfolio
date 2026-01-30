// Global module declarations for project-specific imports

declare module '*.css';
declare module '*.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.svg';

declare module '@vercel/analytics/next';
declare module '@vercel/speed-insights/next';

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_BASE_URL?: string;
  }
}
