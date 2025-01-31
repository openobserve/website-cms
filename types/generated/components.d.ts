import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String;
  };
}

export interface ElementsButtonWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_with_icons';
  info: {
    displayName: 'ButtonWithIcon';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsCompanyCustomerFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_company_customer_features';
  info: {
    displayName: 'company-customer-feature';
  };
  attributes: {
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    description: '';
    displayName: 'feature-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
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

export interface ElementsFooterItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_items';
  info: {
    displayName: 'footerItem';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.items-link', true>;
    title: Schema.Attribute.String;
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
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface ElementsSupportCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_support_cards';
  info: {
    description: '';
    displayName: 'supportCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
    primaryButton: Schema.Attribute.Component<
      'elements.button-with-icon',
      false
    >;
    secondaryButton: Schema.Attribute.Component<
      'elements.button-with-icon',
      false
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SectionCardsBlogWithCategories extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_blog_with_categories';
  info: {
    displayName: 'BlogWithCategories';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionCardsBlogs extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_blogs';
  info: {
    displayName: 'Blogs';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCardsCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_case_studies';
  info: {
    description: '';
    displayName: 'Case Studies';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCardsClients extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_clients';
  info: {
    description: '';
    displayName: 'Clients';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.image', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionCardsCommunitySupport extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_community_supports';
  info: {
    description: '';
    displayName: 'Community-Support';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionCardsFeatureHighlights extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_feature_highlights';
  info: {
    displayName: 'FeatureHighlights';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionCardsFeature4 extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_feature4s';
  info: {
    description: '';
    displayName: 'Feature4';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
    noOfGridColumns: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface SectionCardsFeatures1 extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_features1s';
  info: {
    description: '';
    displayName: 'Features1';
  };
  attributes: {
    data: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCardsFeatures2 extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_features2s';
  info: {
    displayName: 'Features2';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionCardsFeatures3 extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_features3s';
  info: {
    description: '';
    displayName: 'Features3';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
    noOfGridColumns: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface SectionCardsFeatures5 extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_features5s';
  info: {
    displayName: 'Features5';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
    primaryButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionCardsResourceFeatureHighlight
  extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_resource_feature_highlights';
  info: {
    displayName: 'ResourceFeatureHighlight';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true>;
    primaryButton: Schema.Attribute.Component<'elements.button', true>;
  };
}

export interface SectionCardsResourceSupportCard
  extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_resource_support_cards';
  info: {
    displayName: 'ResourceSupportCard';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.support-card', true>;
  };
}

export interface SectionCardsStats extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_stats';
  info: {
    description: '';
    displayName: 'Stats';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionCardsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.testimonial-card', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionCardsWhyCustomerLoveUs extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_why_customer_love_uses';
  info: {
    description: '';
    displayName: 'Why-Customer-Love-Us';
  };
  attributes: {
    integrations: Schema.Attribute.Component<
      'elements.company-customer-feature',
      false
    > &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true> &
      Schema.Attribute.Required;
    unifiedObservability: Schema.Attribute.Component<
      'elements.company-customer-feature',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    bannerDescription: Schema.Attribute.Text;
    bannerTitle: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCtaCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_call_to_actions';
  info: {
    description: '';
    displayName: 'Call-To-Action';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'elements.button', false>;
    ctaDescription: Schema.Attribute.Text;
    ctaTitle: Schema.Attribute.String;
  };
}

export interface SectionCtaPlainCta extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_plain_ctas';
  info: {
    description: '';
    displayName: 'Plain-CTA';
  };
  attributes: {
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionFaqsFrequentlyAskedQuestion
  extends Struct.ComponentSchema {
  collectionName: 'components_section_faqs_frequently_asked_questions';
  info: {
    displayName: 'Frequently Asked Question';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faq-item', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionFeaturesFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_section_features_feature_lists';
  info: {
    displayName: 'Feature List';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.feature-item', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionFeaturesInfoLeftFeature extends Struct.ComponentSchema {
  collectionName: 'components_section_features_info_left_features';
  info: {
    displayName: 'Info-Left-Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionFeaturesInfoRightFeature
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_info_right_features';
  info: {
    displayName: 'Info-Right-Feature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionFeaturesPlatformTabsWrapper
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_platform_tabs_wrappers';
  info: {
    description: '';
    displayName: 'Features-Left-Tabs';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.tab-item', true>;
  };
}

export interface SectionFeaturesTabsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_section_features_tabs_features';
  info: {
    description: '';
    displayName: 'Features-Top-Tabs';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.feature-item', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionFormsContact extends Struct.ComponentSchema {
  collectionName: 'components_section_forms_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionFormsEnterpriceContact extends Struct.ComponentSchema {
  collectionName: 'components_section_forms_enterprice_contacts';
  info: {
    displayName: 'Enterprice-contact';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionHeroCompanyHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_company_hero_sections';
  info: {
    description: '';
    displayName: 'CompanyHeroSection';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headingGradientColor: Schema.Attribute.Enumeration<
      ['blue', 'cyan', 'orange']
    >;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionHeroFeatureHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_feature_hero_sections';
  info: {
    description: '';
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
    noOfGridColumns: Schema.Attribute.Integer & Schema.Attribute.Required;
    primaryButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionHeroFeatureSubHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_feature_sub_hero_sections';
  info: {
    description: '';
    displayName: 'FeatureSubHeroSection';
    icon: 'crown';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bottomImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true>;
    primaryButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    secondaryButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionHeroHomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_homepage_heroes';
  info: {
    displayName: 'Homepage-Hero';
  };
  attributes: {
    backgroundVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    secondaryButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionHeroResourceHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_resource_hero_sections';
  info: {
    displayName: 'ResourceHeroSection';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionSeparatorSeparator extends Struct.ComponentSchema {
  collectionName: 'components_section_separator_separators';
  info: {
    displayName: 'Separator';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SeoAlternatesItem extends Struct.ComponentSchema {
  collectionName: 'components_seo_alternates_items';
  info: {
    displayName: 'Alternates-Item';
  };
  attributes: {
    canonical: Schema.Attribute.String;
  };
}

export interface SeoAuthorsItem extends Struct.ComponentSchema {
  collectionName: 'components_seo_authors_items';
  info: {
    displayName: 'Authors-Item';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SeoOpengraphItem extends Struct.ComponentSchema {
  collectionName: 'components_seo_opengraph_items';
  info: {
    displayName: 'Opengraph-Item';
  };
  attributes: {
    alt: Schema.Attribute.String;
    authors: Schema.Attribute.String;
    description: Schema.Attribute.String;
    height: Schema.Attribute.String;
    tags: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    url: Schema.Attribute.String;
    width: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'SEO';
  };
  attributes: {
    Alternates: Schema.Attribute.Component<'seo.alternates-item', false>;
    Authors: Schema.Attribute.Component<'seo.authors-item', false>;
    category: Schema.Attribute.String;
    creator: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    manifest: Schema.Attribute.String;
    OpenGraph: Schema.Attribute.Component<'seo.opengraph-item', false>;
    publisher: Schema.Attribute.String;
    robots: Schema.Attribute.String;
    title: Schema.Attribute.String;
    Twitter: Schema.Attribute.Component<'seo.twitter-item', false>;
    viewport: Schema.Attribute.String;
  };
}

export interface SeoTwitterItem extends Struct.ComponentSchema {
  collectionName: 'components_seo_twitter_items';
  info: {
    displayName: 'Twitter-Item';
  };
  attributes: {
    card: Schema.Attribute.String;
    creator: Schema.Attribute.String;
    creatorId: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    Images: Schema.Attribute.String;
    site: Schema.Attribute.String;
    siteId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.button': ElementsButton;
      'elements.button-with-icon': ElementsButtonWithIcon;
      'elements.company-customer-feature': ElementsCompanyCustomerFeature;
      'elements.faq-item': ElementsFaqItem;
      'elements.feature-item': ElementsFeatureItem;
      'elements.feature-title-description': ElementsFeatureTitleDescription;
      'elements.footer-item': ElementsFooterItem;
      'elements.heading': ElementsHeading;
      'elements.image': ElementsImage;
      'elements.items': ElementsItems;
      'elements.items-link': ElementsItemsLink;
      'elements.social-media-icon': ElementsSocialMediaIcon;
      'elements.support-card': ElementsSupportCard;
      'elements.tab-item': ElementsTabItem;
      'elements.testimonial-card': ElementsTestimonialCard;
      'elements.testimonials': ElementsTestimonials;
      'section-cards.blog-with-categories': SectionCardsBlogWithCategories;
      'section-cards.blogs': SectionCardsBlogs;
      'section-cards.case-studies': SectionCardsCaseStudies;
      'section-cards.clients': SectionCardsClients;
      'section-cards.community-support': SectionCardsCommunitySupport;
      'section-cards.feature-highlights': SectionCardsFeatureHighlights;
      'section-cards.feature4': SectionCardsFeature4;
      'section-cards.features1': SectionCardsFeatures1;
      'section-cards.features2': SectionCardsFeatures2;
      'section-cards.features3': SectionCardsFeatures3;
      'section-cards.features5': SectionCardsFeatures5;
      'section-cards.resource-feature-highlight': SectionCardsResourceFeatureHighlight;
      'section-cards.resource-support-card': SectionCardsResourceSupportCard;
      'section-cards.stats': SectionCardsStats;
      'section-cards.testimonials': SectionCardsTestimonials;
      'section-cards.why-customer-love-us': SectionCardsWhyCustomerLoveUs;
      'section-cta.banner': SectionCtaBanner;
      'section-cta.call-to-action': SectionCtaCallToAction;
      'section-cta.plain-cta': SectionCtaPlainCta;
      'section-faqs.frequently-asked-question': SectionFaqsFrequentlyAskedQuestion;
      'section-features.feature-list': SectionFeaturesFeatureList;
      'section-features.info-left-feature': SectionFeaturesInfoLeftFeature;
      'section-features.info-right-feature': SectionFeaturesInfoRightFeature;
      'section-features.platform-tabs-wrapper': SectionFeaturesPlatformTabsWrapper;
      'section-features.tabs-features': SectionFeaturesTabsFeatures;
      'section-forms.contact': SectionFormsContact;
      'section-forms.enterprice-contact': SectionFormsEnterpriceContact;
      'section-hero.company-hero-section': SectionHeroCompanyHeroSection;
      'section-hero.feature-hero-section': SectionHeroFeatureHeroSection;
      'section-hero.feature-sub-hero-section': SectionHeroFeatureSubHeroSection;
      'section-hero.homepage-hero': SectionHeroHomepageHero;
      'section-hero.resource-hero-section': SectionHeroResourceHeroSection;
      'section-separator.separator': SectionSeparatorSeparator;
      'seo.alternates-item': SeoAlternatesItem;
      'seo.authors-item': SeoAuthorsItem;
      'seo.opengraph-item': SeoOpengraphItem;
      'seo.seo': SeoSeo;
      'seo.twitter-item': SeoTwitterItem;
    }
  }
}
