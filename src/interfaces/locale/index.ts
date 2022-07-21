export type Locale = {
  /** Language ISO string like: 'en' 'pl' or 'de' */
  language: string;
  /**
   * All the translations.
   */
  translations: Partial<LocaleTranslations>;
}

export type LocaleTranslationsBlock = {
  actions: {
    [key: string]: string;
  };
  buttons: {
    [key: string]: string;
  };
  labels: {
    [key: string]: string;
  };
  messages: {
    [key: string]: string;
  };
  properties: {
    [key: string]: string;
  };
}

// Locale translations is not well parsed by JSDoc so the typedef is placed below
export type LocaleTranslations = Partial<LocaleTranslationsBlock> & {
  resources?: {
    [key: string]: Partial<LocaleTranslationsBlock>;
  };
}
