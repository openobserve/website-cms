import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_items';
  info: {
    displayName: 'faqItem';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_items';
  info: {
    displayName: 'feature-item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureTitleDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_title_descriptions';
  info: {
    description: '';
    displayName: 'feature-title-description';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsHeading extends Struct.ComponentSchema {
  collectionName: 'components_elements_headings';
  info: {
    description: '';
    displayName: 'heading';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface ElementsItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_items';
  info: {
    description: '';
    displayName: 'items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      [
        'logs',
        'metrices',
        'traces',
        'alerts',
        'dashboard',
        'real-user-monitorting',
        'session-replay',
        'error-tracking',
        'pipelines',
        'slack',
        'github',
        'devops',
        'developer',
        'site-reliability-engineer',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'logs'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsItemsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_items_links';
  info: {
    displayName: 'Items-link';
    icon: 'attachment';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSocialMediaIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_media_icons';
  info: {
    displayName: 'SocialMediaIcon';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.Enumeration<
      ['slack', 'twitter', 'github', 'linkdin', 'youtube']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'slack'>;
  };
}

export interface ElementsTabItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_tab_items';
  info: {
    description: '';
    displayName: 'TabItem';
    icon: 'database';
  };
  attributes: {
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonial_cards';
  info: {
    description: '';
    displayName: 'testimonial-card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface ElementsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_section_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.testimonial-card', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    bannerDescription: Schema.Attribute.Text;
    bannerTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    primary: Schema.Attribute.Component<'elements.button', false>;
    secondary: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCardWrapper extends Struct.ComponentSchema {
  collectionName: 'components_section_home_platform _wrapper';
  info: {
    description: '';
    displayName: 'HomePlatformWrapper';
  };
  attributes: {
    data: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    useCaseButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_section_case_studies';
  info: {
    displayName: 'CaseStudy';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.button', false>;
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionCommunitySupport extends Struct.ComponentSchema {
  collectionName: 'components_section_community_supports';
  info: {
    displayName: 'Community-Support';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionCompany extends Struct.ComponentSchema {
  collectionName: 'components_section_companies';
  info: {
    description: '';
    displayName: 'Company';
  };
  attributes: {
    images: Schema.Attribute.Component<'elements.image', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionCompanyHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_company_hero_sections';
  info: {
    displayName: 'CompanyHeroSection';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primary: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionContact extends Struct.ComponentSchema {
  collectionName: 'components_section_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionFaq extends Struct.ComponentSchema {
  collectionName: 'components_section_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faq-item', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionFeatureHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_feature_hero_sections';
  info: {
    displayName: 'FeatureHeroSection';
    icon: 'crown';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true>;
    primary: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    secondary: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_section_feature_sections';
  info: {
    description: '';
    displayName: 'FeatureSection';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.feature-item', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionFeatureSubHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_feature_sub_hero_sections';
  info: {
    description: '';
    displayName: 'FeatureSubHeroSection';
    icon: 'crown';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true>;
    primary: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    secondary: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionHeadingWithButtton extends Struct.ComponentSchema {
  collectionName: 'components_section_heading_with_butttons';
  info: {
    displayName: 'HeadingWithButtton';
  };
  attributes: {
    primary: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionHerosection extends Struct.ComponentSchema {
  collectionName: 'components_section_herosections';
  info: {
    description: '';
    displayName: 'Herosection';
    icon: 'crown';
  };
  attributes: {
    backgroundVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    headingTextGradient: Schema.Attribute.Enumeration<
      ['gray', 'blue', 'sky-blue']
    > &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    secondaryButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionHomeSolutionWrapper extends Struct.ComponentSchema {
  collectionName: 'components_section_home_solution_wrappers';
  info: {
    displayName: 'HomeSolutionWrapper';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionHomeWhyO2Section extends Struct.ComponentSchema {
  collectionName: 'components_section_home_why_o2_sections';
  info: {
    displayName: 'HomeWhyO2Section';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionPlatformTabsWrapper extends Struct.ComponentSchema {
  collectionName: 'components_section_platform_tabs_wrappers';
  info: {
    displayName: 'PlatformTabsWrapper';
    icon: 'database';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.tab-item', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.button': ElementsButton;
      'elements.faq-item': ElementsFaqItem;
      'elements.feature-item': ElementsFeatureItem;
      'elements.feature-title-description': ElementsFeatureTitleDescription;
      'elements.heading': ElementsHeading;
      'elements.image': ElementsImage;
      'elements.items': ElementsItems;
      'elements.items-link': ElementsItemsLink;
      'elements.social-media-icon': ElementsSocialMediaIcon;
      'elements.tab-item': ElementsTabItem;
      'elements.testimonial-card': ElementsTestimonialCard;
      'elements.testimonials': ElementsTestimonials;
      'section.banner': SectionBanner;
      'section.card-wrapper': SectionCardWrapper;
      'section.case-study': SectionCaseStudy;
      'section.community-support': SectionCommunitySupport;
      'section.company': SectionCompany;
      'section.company-hero-section': SectionCompanyHeroSection;
      'section.contact': SectionContact;
      'section.faq': SectionFaq;
      'section.feature-hero-section': SectionFeatureHeroSection;
      'section.feature-section': SectionFeatureSection;
      'section.feature-sub-hero-section': SectionFeatureSubHeroSection;
      'section.heading-with-buttton': SectionHeadingWithButtton;
      'section.herosection': SectionHerosection;
      'section.home-solution-wrapper': SectionHomeSolutionWrapper;
      'section.home-why-o2-section': SectionHomeWhyO2Section;
      'section.platform-tabs-wrapper': SectionPlatformTabsWrapper;
    }
  }
}
