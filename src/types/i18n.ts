export type Locale = 'id' | 'en';

export interface SiteConfig {
  name: string;
  tagline: string;
  secondaryTagline: string;
  description: string;
  url: string;
  ogImage: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  greeting: string;
  heading: string;
  description: string;
  cta: string;
}

export interface ServicePillar {
  title: string;
  description: string;
  icon: 'web' | 'mobile' | 'fullstack';
}

export interface PortfolioItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
  category: string;
}

export interface AboutValue {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TranslationDict {
  site: SiteConfig;
  nav: NavItem[];
  home: {
    hero: HeroContent;
    services: {
      heading: string;
      description: string;
      pillars: ServicePillar[];
    };
    portfolioPreview: {
      heading: string;
      description: string;
      cta: string;
    };
    ctaBanner: {
      heading: string;
      description: string;
      button: string;
    };
  };
  about: {
    hero: {
      heading: string;
      description: string;
    };
    vision: {
      heading: string;
      description: string;
    };
    values: {
      heading: string;
      description: string;
      items: AboutValue[];
    };
    partners: {
      heading: string;
      description: string;
      partnerName: string;
      partnerDesc: string;
    };
  };
  services: {
    hero: {
      heading: string;
      description: string;
    };
    pillars: ServicePillar[];
    cta: {
      heading: string;
      description: string;
      button: string;
    };
  };
  portfolio: {
    hero: {
      heading: string;
      description: string;
    };
    projects: PortfolioItem[];
    cta: string;
  };
  blog: {
    hero: {
      heading: string;
      description: string;
    };
    placeholder: {
      heading: string;
      description: string;
    };
  };
  contact: {
    hero: {
      heading: string;
      description: string;
    };
    wa: {
      heading: string;
      description: string;
      button: string;
    };
    email: {
      heading: string;
      description: string;
      button: string;
    };
  };
  faq: {
    heading: string;
    description: string;
    items: FAQItem[];
  };
  footer: {
    copyright: string;
    tagline: string;
    secondaryTagline: string;
  };
  cta: {
    waMessage: string;
  };
}
