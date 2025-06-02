import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    theme: Schema.Attribute.Enumeration<
      [
        'theme-blue',
        'theme-red',
        'theme-purple',
        'theme-green',
        'theme-outline',
      ]
    >;
  };
}

export interface ElementsButtonWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_with_icons';
  info: {
    description: '';
    displayName: 'ButtonWithIcon';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    target: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsCardInnerItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_card_inner_items';
  info: {
    displayName: 'cardInnerItems';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ElementsCardItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_card_items';
  info: {
    description: '';
    displayName: 'cardItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<'elements.card-inner-items', true>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCaseStudyItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_case_study_items';
  info: {
    description: '';
    displayName: 'case study item';
  };
  attributes: {
    clientLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    link: Schema.Attribute.String;
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
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_sections';
  info: {
    displayName: 'FaqSection';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faq-item', true>;
    label: Schema.Attribute.String;
  };
}

export interface ElementsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_items';
  info: {
    description: '';
    displayName: 'feature-item';
  };
  attributes: {
    featureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    items: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    tabImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
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
    description: Schema.Attribute.Text;
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
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsHomepageFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_homepage_feature_items';
  info: {
    displayName: 'Homepage Feature Item';
  };
  attributes: {
    cardData: Schema.Attribute.Component<'elements.testimonial-card', false>;
    direction: Schema.Attribute.Enumeration<['LEFT', 'RIGHT']>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    theme: Schema.Attribute.Enumeration<
      [
        'theme-blue',
        'theme-red',
        'theme-purple',
        'theme-green',
        'theme-outline',
      ]
    >;
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
    button: Schema.Attribute.Component<'elements.button', false>;
    cardLink: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    target: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<
      [
        'theme-blue',
        'theme-red',
        'theme-purple',
        'theme-green',
        'theme-outline',
      ]
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsItemsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_items_links';
  info: {
    description: '';
    displayName: 'Items-link';
    icon: 'attachment';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsKeyFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_key_feature_items';
  info: {
    description: '';
    displayName: 'KeyFeatureItem';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.items', false>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface ElementsPartnerItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_partner_items';
  info: {
    displayName: 'PartnerItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ElementsPricingItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_items';
  info: {
    description: '';
    displayName: 'PricingItem';
  };
  attributes: {
    bottomDescription: Schema.Attribute.Text;
    cardTheme: Schema.Attribute.Enumeration<
      [
        'theme-blue',
        'theme-red',
        'theme-purple',
        'theme-green',
        'theme-outline',
        'theme-pricing-button',
        'theme-pricing-card',
      ]
    >;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'elements.card-inner-items', true>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String;
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

export interface ElementsTechWeUse extends Struct.ComponentSchema {
  collectionName: 'components_elements_tech_we_uses';
  info: {
    description: '';
    displayName: 'Tech We  Use';
  };
  attributes: {
    techList: Schema.Attribute.Component<'elements.card-inner-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTechnologiesFeatures extends Struct.ComponentSchema {
  collectionName: 'components_elements_technologies_features_s';
  info: {
    displayName: 'Technologies Features ';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.card-inner-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonial_cards';
  info: {
    description: '';
    displayName: 'testimonial-card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface SectionCardsArticles extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_articles';
  info: {
    displayName: 'Articles';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCardsBlog extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_blog_s';
  info: {
    displayName: 'Blog ';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCardsCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_case_studies';
  info: {
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
    displayName: 'Community-Support';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true>;
  };
}

export interface SectionCardsFeature1 extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_feature1s';
  info: {
    description: '';
    displayName: 'Feature1';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['LEFT', 'CENTER', 'RIGHT']>;
    background: Schema.Attribute.Boolean;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    headingLevel: Schema.Attribute.Enumeration<
      ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
    >;
    items: Schema.Attribute.Component<'elements.items', true>;
  };
}

export interface SectionCardsFeature3 extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_feature3s';
  info: {
    description: '';
    displayName: 'Feature3';
  };
  attributes: {
    background: Schema.Attribute.Boolean;
    button: Schema.Attribute.Component<'elements.button', false>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true>;
  };
}

export interface SectionCardsFeature4 extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_feature4s';
  info: {
    description: '';
    displayName: 'Feature2';
  };
  attributes: {
    background: Schema.Attribute.Boolean;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    headingLevel: Schema.Attribute.Enumeration<
      ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
    >;
    items: Schema.Attribute.Component<'elements.card-item', true>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    titleItems: Schema.Attribute.Component<'elements.card-inner-items', true>;
  };
}

export interface SectionCardsOurPartners extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_our_partners';
  info: {
    description: '';
    displayName: 'Our Partners';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.partner-item', true>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCardsPlaformKeyFeatures extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_plaform_key_features';
  info: {
    description: '';
    displayName: 'Plaform-Key-Features';
  };
  attributes: {
    enterprise: Schema.Attribute.Component<'elements.items', true>;
    enterpriseCTA: Schema.Attribute.Component<'elements.button', false>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    standard: Schema.Attribute.Component<'elements.items', true>;
    standardCTA: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCardsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
  };
  attributes: {
    background: Schema.Attribute.Boolean;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.testimonial-card', true> &
      Schema.Attribute.Required;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionFaqsFaQsPageSection extends Struct.ComponentSchema {
  collectionName: 'components_section_faqs_fa_qs_page_sections';
  info: {
    description: '';
    displayName: 'FAQs Page Section';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.faq-section', true>;
  };
}

export interface SectionFaqsFrequentlyAskedQuestion
  extends Struct.ComponentSchema {
  collectionName: 'components_section_faqs_frequently_asked_questions';
  info: {
    description: '';
    displayName: 'Frequently Asked Question';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faq-item', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface SectionFeaturesCloudSectionForDownloads
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_cloud_section_for_downloads';
  info: {
    description: '';
    displayName: 'CloudSectionForDownloads';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    > &
      Schema.Attribute.Required;
    primaryButton: Schema.Attribute.Component<
      'elements.button-with-icon',
      false
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionFeaturesFeatureLeftTabs extends Struct.ComponentSchema {
  collectionName: 'components_section_features_feature_left_tabs';
  info: {
    description: '';
    displayName: 'Feature-Left-Tabs';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.card-item', true>;
  };
}

export interface SectionFeaturesFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_section_features_feature_lists';
  info: {
    description: '';
    displayName: 'Feature List';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.feature-item', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionFeaturesFeatureSubPageTopTabs
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_feature_sub_page_top_tabs';
  info: {
    description: '';
    displayName: 'Feature-SubPage-Top-Tabs';
  };
  attributes: {
    background: Schema.Attribute.Boolean;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.feature-item', true>;
  };
}

export interface SectionFeaturesGlobalTeam extends Struct.ComponentSchema {
  collectionName: 'components_section_features_global_teams';
  info: {
    displayName: 'Global Team';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.items', true>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionFeaturesHomeMarketectureSection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_home_marketecture_sections';
  info: {
    displayName: 'Home-Marketecture-Section';
  };
  attributes: {
    background: Schema.Attribute.Boolean;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionFeaturesHomepageFeature extends Struct.ComponentSchema {
  collectionName: 'components_section_features_homepage_features';
  info: {
    description: '';
    displayName: 'Homepage Feature';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.homepage-feature-item', true>;
  };
}

export interface SectionFeaturesOurCommitment extends Struct.ComponentSchema {
  collectionName: 'components_section_features_our_commitments';
  info: {
    displayName: 'Our Commitment';
  };
  attributes: {
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionFeaturesOurStory extends Struct.ComponentSchema {
  collectionName: 'components_section_features_our_stories';
  info: {
    displayName: 'Our Story';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFeaturesSelfHostedForDownloads
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_self_hosted_for_downloads';
  info: {
    description: '';
    displayName: 'SelfHostedForDownloads';
  };
  attributes: {
    dockerCommand: Schema.Attribute.Text & Schema.Attribute.Required;
    downloadTitle: Schema.Attribute.String;
    enterpriseBottomDescription: Schema.Attribute.Text;
    enterpriseDescription: Schema.Attribute.Text;
    enterpriseFeatures: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    enterpriseTitle: Schema.Attribute.String;
    haDeploymentDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    selfHostedButton: Schema.Attribute.Component<'elements.button', false>;
    systemDownload: Schema.Attribute.Component<'elements.items', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFeaturesTabsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_section_features_tabs_features';
  info: {
    description: '';
    displayName: 'Features-Top-Tabs';
  };
  attributes: {
    background: Schema.Attribute.Boolean;
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.feature-item', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionFeaturesTechnologies extends Struct.ComponentSchema {
  collectionName: 'components_section_features_technologies';
  info: {
    description: '';
    displayName: 'Technologies';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.items', true>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    techFeatures: Schema.Attribute.Component<
      'elements.technologies-features',
      true
    >;
    techTags: Schema.Attribute.Component<'elements.tech-we-use', false>;
  };
}

export interface SectionFormsContact extends Struct.ComponentSchema {
  collectionName: 'components_section_forms_contacts';
  info: {
    description: '';
    displayName: 'Contact';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionFormsContactSalesForm extends Struct.ComponentSchema {
  collectionName: 'components_section_forms_contact_sales_forms';
  info: {
    displayName: 'Contact Sales Form';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.items', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFormsDemoPageForm extends Struct.ComponentSchema {
  collectionName: 'components_section_forms_demo_page_forms';
  info: {
    description: '';
    displayName: 'Demo Page Form';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.items', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFormsDownloadContactForm
  extends Struct.ComponentSchema {
  collectionName: 'components_section_forms_download_contact_forms';
  info: {
    displayName: 'DownloadContactForm';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionHeroHomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_homepage_heroes';
  info: {
    description: '';
    displayName: 'Homepage-Hero';
  };
  attributes: {
    badge: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'elements.button', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    trustedCompanies: Schema.Attribute.Component<'elements.image', true>;
    trustedText: Schema.Attribute.Text;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionHeroResourceHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_resource_hero_sections';
  info: {
    description: '';
    displayName: 'Landing Page Herosection';
    icon: 'crown';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['LEFT', 'CENTER', 'RIGHT']> &
      Schema.Attribute.DefaultTo<'LEFT'>;
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionHeroSolutionSubpageHerosection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_solution_subpage_herosections';
  info: {
    displayName: 'Solution subpage herosection';
  };
  attributes: {
    bgImageForLaptop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bgImageForMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionHeroSolutionsHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_solutions_hero_sections';
  info: {
    description: '';
    displayName: 'Platform subpage herosection';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionTabsDownloadTabs extends Struct.ComponentSchema {
  collectionName: 'components_section_tabs_download_tabs';
  info: {
    description: '';
    displayName: 'DownloadTabs';
  };
  attributes: {
    cloudData: Schema.Attribute.Component<
      'section-features.cloud-section-for-downloads',
      false
    >;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    selfHostedData: Schema.Attribute.Component<
      'section-features.self-hosted-for-downloads',
      false
    >;
  };
}

export interface SectionTabsPricingTabs extends Struct.ComponentSchema {
  collectionName: 'components_section_tabs_pricing_tabs';
  info: {
    displayName: 'PricingTabs';
  };
  attributes: {
    cloud: Schema.Attribute.Component<'elements.pricing-item', true>;
    selfHosted: Schema.Attribute.Component<'elements.pricing-item', true>;
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
      'elements.card-inner-items': ElementsCardInnerItems;
      'elements.card-item': ElementsCardItem;
      'elements.case-study-item': ElementsCaseStudyItem;
      'elements.company-customer-feature': ElementsCompanyCustomerFeature;
      'elements.faq-item': ElementsFaqItem;
      'elements.faq-section': ElementsFaqSection;
      'elements.feature-item': ElementsFeatureItem;
      'elements.feature-title-description': ElementsFeatureTitleDescription;
      'elements.footer-item': ElementsFooterItem;
      'elements.heading': ElementsHeading;
      'elements.homepage-feature-item': ElementsHomepageFeatureItem;
      'elements.image': ElementsImage;
      'elements.items': ElementsItems;
      'elements.items-link': ElementsItemsLink;
      'elements.key-feature-item': ElementsKeyFeatureItem;
      'elements.partner-item': ElementsPartnerItem;
      'elements.pricing-item': ElementsPricingItem;
      'elements.social-media-icon': ElementsSocialMediaIcon;
      'elements.tech-we-use': ElementsTechWeUse;
      'elements.technologies-features': ElementsTechnologiesFeatures;
      'elements.testimonial-card': ElementsTestimonialCard;
      'section-cards.articles': SectionCardsArticles;
      'section-cards.blog': SectionCardsBlog;
      'section-cards.case-studies': SectionCardsCaseStudies;
      'section-cards.clients': SectionCardsClients;
      'section-cards.community-support': SectionCardsCommunitySupport;
      'section-cards.feature1': SectionCardsFeature1;
      'section-cards.feature3': SectionCardsFeature3;
      'section-cards.feature4': SectionCardsFeature4;
      'section-cards.our-partners': SectionCardsOurPartners;
      'section-cards.plaform-key-features': SectionCardsPlaformKeyFeatures;
      'section-cards.testimonials': SectionCardsTestimonials;
      'section-cta.banner': SectionCtaBanner;
      'section-faqs.fa-qs-page-section': SectionFaqsFaQsPageSection;
      'section-faqs.frequently-asked-question': SectionFaqsFrequentlyAskedQuestion;
      'section-features.cloud-section-for-downloads': SectionFeaturesCloudSectionForDownloads;
      'section-features.feature-left-tabs': SectionFeaturesFeatureLeftTabs;
      'section-features.feature-list': SectionFeaturesFeatureList;
      'section-features.feature-sub-page-top-tabs': SectionFeaturesFeatureSubPageTopTabs;
      'section-features.global-team': SectionFeaturesGlobalTeam;
      'section-features.home-marketecture-section': SectionFeaturesHomeMarketectureSection;
      'section-features.homepage-feature': SectionFeaturesHomepageFeature;
      'section-features.our-commitment': SectionFeaturesOurCommitment;
      'section-features.our-story': SectionFeaturesOurStory;
      'section-features.self-hosted-for-downloads': SectionFeaturesSelfHostedForDownloads;
      'section-features.tabs-features': SectionFeaturesTabsFeatures;
      'section-features.technologies': SectionFeaturesTechnologies;
      'section-forms.contact': SectionFormsContact;
      'section-forms.contact-sales-form': SectionFormsContactSalesForm;
      'section-forms.demo-page-form': SectionFormsDemoPageForm;
      'section-forms.download-contact-form': SectionFormsDownloadContactForm;
      'section-hero.homepage-hero': SectionHeroHomepageHero;
      'section-hero.resource-hero-section': SectionHeroResourceHeroSection;
      'section-hero.solution-subpage-herosection': SectionHeroSolutionSubpageHerosection;
      'section-hero.solutions-hero-section': SectionHeroSolutionsHeroSection;
      'section-tabs.download-tabs': SectionTabsDownloadTabs;
      'section-tabs.pricing-tabs': SectionTabsPricingTabs;
      'seo.alternates-item': SeoAlternatesItem;
      'seo.authors-item': SeoAuthorsItem;
      'seo.opengraph-item': SeoOpengraphItem;
      'seo.seo': SeoSeo;
      'seo.twitter-item': SeoTwitterItem;
    }
  }
}
