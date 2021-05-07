export const useBrowserLanguage = (): string => {
  return (navigator.languages && navigator.languages[0]) || navigator.language || (navigator as any).userLanguage;
};
