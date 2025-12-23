import type { Schema, Struct } from '@strapi/strapi';

export interface AbExperimentsComponentTargetingRules
  extends Struct.ComponentSchema {
  collectionName: 'components_ab_experiments_targeting_rules';
  info: {
    description: 'Targeting rules for AB experiments';
    displayName: 'Targeting Rules';
  };
  attributes: {
    devices: Schema.Attribute.Enumeration<['desktop', 'mobile', 'tablet']>;
    url: Schema.Attribute.Component<'ab-experiments-component.url-rule', true>;
  };
}

export interface AbExperimentsComponentUrlRule extends Struct.ComponentSchema {
  collectionName: 'components_ab_experiments_url_rules';
  info: {
    description: 'URL targeting rule for AB experiments';
    displayName: 'URL Rule';
  };
  attributes: {
    matchType: Schema.Attribute.Enumeration<
      ['exact', 'contains', 'startsWith', 'regex', 'endsWith']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'exact'>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AbExperimentsComponentVariant extends Struct.ComponentSchema {
  collectionName: 'components_ab_experiments_variants';
  info: {
    description: 'Experiment variant configuration';
    displayName: 'Variant';
  };
  attributes: {
    changes: Schema.Attribute.Component<
      'ab-experiments-component.variant-change',
      true
    >;
    key: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    weight: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<50>;
  };
}

export interface AbExperimentsComponentVariantChange
  extends Struct.ComponentSchema {
  collectionName: 'components_ab_experiments_variant_changes';
  info: {
    description: 'DOM change configuration for experiment variants';
    displayName: 'Variant Change';
  };
  attributes: {
    className: Schema.Attribute.String;
    html: Schema.Attribute.Text;
    selector: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Text;
    type: Schema.Attribute.Enumeration<
      ['text', 'style', 'image', 'html', 'class']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String;
    value: Schema.Attribute.Text;
  };
}

export interface ComparisionPagesComponentDemoSection
  extends Struct.ComponentSchema {
  collectionName: 'components_comparision_pages_component_demo_sections';
  info: {
    displayName: 'Demo Section';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface ComparisionPagesComponentFaqsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_comparision_pages_component_faqs_sections';
  info: {
    displayName: 'Faqs Section';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faq-item', true>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface ComparisionPagesComponentFeatureCards
  extends Struct.ComponentSchema {
  collectionName: 'components_comparision_pages_component_feature_cards';
  info: {
    displayName: 'Feature Cards';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'elements.button', false>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true>;
  };
}

export interface ComparisionPagesComponentHerosection
  extends Struct.ComponentSchema {
  collectionName: 'components_comparision_pages_component_herosections';
  info: {
    description: '';
    displayName: 'Herosection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
    stats: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    tagLine: Schema.Attribute.String;
    title: Schema.Attribute.String;
    trustedCompanies: Schema.Attribute.Component<'elements.image', true>;
  };
}

export interface ComparisionPagesComponentMigrationSection
  extends Struct.ComponentSchema {
  collectionName: 'components_comparision_pages_component_migration_section_s';
  info: {
    description: '';
    displayName: 'Migration Section ';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
    testimonial: Schema.Attribute.Component<'elements.testimonial-card', false>;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    link: Schema.Attribute.String;
    target: Schema.Attribute.String;
    text: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<
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
    cardLink: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<'elements.card-inner-items', true>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    target: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<
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

export interface ElementsComparisonRow extends Struct.ComponentSchema {
  collectionName: 'components_elements_comparison_rows';
  info: {
    description: 'Row in feature comparison table';
    displayName: 'Comparison Row';
  };
  attributes: {
    datadogValue: Schema.Attribute.String & Schema.Attribute.Required;
    featureName: Schema.Attribute.String & Schema.Attribute.Required;
    openobserveValue: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsEventCardItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_event_card_items';
  info: {
    description: '';
    displayName: 'Event CardItem';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.button', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 250;
        minLength: 150;
      }>;
    eventEndDate: Schema.Attribute.Date;
    eventPlace: Schema.Attribute.String;
    eventStartDate: Schema.Attribute.Date;
    eventType: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<
      ['theme-green-minimal', 'theme-orange']
    >;
    title: Schema.Attribute.String;
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

export interface ElementsFaqItemV2Markdown extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_item_v2_markdowns';
  info: {
    displayName: 'FaqItem-v2-markdown';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.RichText & Schema.Attribute.Required;
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

export interface ElementsFeatureDescription extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_descriptions';
  info: {
    displayName: 'Feature-Description';
  };
  attributes: {
    description: Schema.Attribute.Text;
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
    title: Schema.Attribute.String;
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
        'theme-pricing-button',
        'theme-pricing-card',
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

export interface ElementsMigrationStep extends Struct.ComponentSchema {
  collectionName: 'components_elements_migration_steps';
  info: {
    description: 'Individual migration step';
    displayName: 'Migration Step';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsOsSvsEnterpriseComparisonItem
  extends Struct.ComponentSchema {
  collectionName: 'components_elements_os_svs_enterprise_comparison_items';
  info: {
    displayName: 'OSSvsEnterprise-ComparisonItem';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
  };
}

export interface ElementsPartnerItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_partner_items';
  info: {
    description: '';
    displayName: 'PartnerItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface ElementsPlatformFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_platform_feature_items';
  info: {
    description: '';
    displayName: 'Platform-Feature-Item';
  };
  attributes: {
    featureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    items: Schema.Attribute.Component<'elements.platform-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsPlatformItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_platform_items';
  info: {
    displayName: 'Platform-Item';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ElementsPopupItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_popup_items';
  info: {
    description: '';
    displayName: 'popupItem';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.button', false>;
    isVideo: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
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
    calculationButton: Schema.Attribute.Component<'elements.button', false>;
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

export interface ElementsReasonItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_reason_items';
  info: {
    description: 'Individual reason card';
    displayName: 'Reason Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface ElementsTechnologies extends Struct.ComponentSchema {
  collectionName: 'components_elements_technologies';
  info: {
    displayName: 'Technologies';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface ElementsTrustLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_trust_logos';
  info: {
    description: 'Logo for trust section';
    displayName: 'Trust Logo';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingPageComponentCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_cta_banners';
  info: {
    description: 'Call-to-action banner for landing pages';
    displayName: 'CTA Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageComponentFeatureCards
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_feature_cards';
  info: {
    description: 'Cards section for landing pages';
    displayName: 'Feature Cards';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.reason-item', true>;
  };
}

export interface LandingPageComponentFeatureComparison
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_feature_comparisons';
  info: {
    description: 'Feature comparison table for landing pages';
    displayName: 'Feature Comparison';
  };
  attributes: {
    comparisonRows: Schema.Attribute.Component<'elements.comparison-row', true>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
  };
}

export interface LandingPageComponentHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_hero_sections';
  info: {
    description: 'Hero section for landing pages';
    displayName: 'Herosection';
  };
  attributes: {
    comparisions: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    description: Schema.Attribute.Text;
    stats: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    tagLine: Schema.Attribute.String;
    title: Schema.Attribute.String;
    trustedCompanies: Schema.Attribute.Component<'elements.image', true>;
  };
}

export interface LandingPageComponentMigrationSteps
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_migration_steps';
  info: {
    description: 'Step-by-step migration guide for landing pages';
    displayName: 'Migration Steps';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    steps: Schema.Attribute.Component<'elements.migration-step', true>;
  };
}

export interface LandingPageComponentModernFoundationCard
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_modern_foundation_card_s';
  info: {
    displayName: 'Modern Foundation Card ';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.technologies', true>;
  };
}

export interface LandingPageComponentTestimonialSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_component_testimonial_sections';
  info: {
    description: 'Customer testimonials for landing pages';
    displayName: 'Testimonial Section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
  };
}

export interface SectionCardsAdditionalResources
  extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_additional_resources';
  info: {
    displayName: 'Additional Resources';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true>;
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

export interface SectionCardsDatadogSwitchReasons
  extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_datadog_switch_reasons';
  info: {
    displayName: 'Datadog Switch Reasons';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    reasons: Schema.Attribute.Component<'elements.reason-item', true>;
  };
}

export interface SectionCardsEventCards extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_event_cards';
  info: {
    description: '';
    displayName: 'EventCards';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.event-card-item', true>;
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
    ctaButton: Schema.Attribute.Component<'elements.button', false>;
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

export interface SectionCardsModernFoundationCard
  extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_modern_foundation_card_s';
  info: {
    description: '';
    displayName: 'Modern Foundation Card ';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.technologies', true>;
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

export interface SectionCardsSwitchReasons extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_switch_reasons';
  info: {
    description: 'Why teams switch section';
    displayName: 'Feature5';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true>;
  };
}

export interface SectionCardsTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_testimonial_sections';
  info: {
    description: 'Customer testimonial';
    displayName: 'Testimonial Section';
  };
  attributes: {
    authorImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    authorInitials: Schema.Attribute.String & Schema.Attribute.Required;
    authorName: Schema.Attribute.String & Schema.Attribute.Required;
    authorTitle: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
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

export interface SectionCardsWebinar extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_webinars';
  info: {
    displayName: 'Webinar';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCtaAiNativeCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_ai_native_cta_banners';
  info: {
    description: '';
    displayName: 'CTA Type 1';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String;
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

export interface SectionCtaDatadogCta extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_datadog_cta_s';
  info: {
    description: '';
    displayName: 'CTA Type 2';
  };
  attributes: {
    description: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionCtaDownloadCta extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_download_ctas';
  info: {
    displayName: 'Download CTA';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface SectionFaqsPlatformFaqs extends Struct.ComponentSchema {
  collectionName: 'components_section_faqs_platform_faqs';
  info: {
    description: '';
    displayName: 'Platform-faqs';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faq-item-v2-markdown', true>;
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

export interface SectionFeaturesDownloadDeploymentOption
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_download_deployment_options';
  info: {
    description: '';
    displayName: 'Download Deployment Option';
  };
  attributes: {
    description: Schema.Attribute.String;
    enterpriseButton: Schema.Attribute.Component<'elements.button', false>;
    freeIngestionText: Schema.Attribute.String;
    haDeploymentDescription: Schema.Attribute.Text;
    haDeploymentPrimaryButton: Schema.Attribute.Component<
      'elements.button',
      false
    >;
    haDeploymentTitle: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionFeaturesFeatureComparison
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_feature_comparisons';
  info: {
    description: 'Feature comparison table section';
    displayName: 'Feature Comparison';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.comparison-row', true>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
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

export interface SectionFeaturesMigrationSteps extends Struct.ComponentSchema {
  collectionName: 'components_section_features_migration_steps';
  info: {
    description: 'Migration process section';
    displayName: 'Migration Steps';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    steps: Schema.Attribute.Component<'elements.migration-step', true>;
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

export interface SectionFeaturesPlatformFeaturesTopTabs
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_platform_features_top_tabs';
  info: {
    displayName: 'Platform-Features-Top-Tabs';
  };
  attributes: {
    background: Schema.Attribute.Boolean;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.platform-feature-item', true>;
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
    quote: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionFormsDownloadContactForm
  extends Struct.ComponentSchema {
  collectionName: 'components_section_forms_download_contact_forms';
  info: {
    description: '';
    displayName: 'Partner Page Form';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionHeroAiNativePageHerosection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_ai_native_page_herosections';
  info: {
    description: '';
    displayName: 'AI Native Page Herosection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stats: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    tagLine: Schema.Attribute.String;
    title: Schema.Attribute.String;
    trustedCompanies: Schema.Attribute.Component<'elements.image', true>;
  };
}

export interface SectionHeroDatadogHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_datadog_hero_sections';
  info: {
    description: 'Hero section for Datadog alternative landing page';
    displayName: 'Datadog Hero Section';
    icon: 'crown';
  };
  attributes: {
    datadogNote: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+ $0.05/custom metric + $1.70/million spans'>;
    datadogPricing: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'$15-27/host/month'>;
    eyebrowText: Schema.Attribute.String & Schema.Attribute.Required;
    formDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    formTitle: Schema.Attribute.String & Schema.Attribute.Required;
    highlightedText: Schema.Attribute.String & Schema.Attribute.Required;
    openobserveNote: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Unlimited custom metrics included'>;
    openobservePricing: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'$0/host'>;
    subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    trustLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Teams that made the switch'>;
    trustLogos: Schema.Attribute.Component<'elements.trust-logo', true>;
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
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
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
    description: '';
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
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
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
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionJsonStructureForGoogleBotJsonLdSchema
  extends Struct.ComponentSchema {
  collectionName: 'components_section_json_structure_for_google_bot_json_ld_schemas';
  info: {
    description: '';
    displayName: 'JSON LD Schema';
  };
  attributes: {
    about: Schema.Attribute.String;
    audienceType: Schema.Attribute.String;
    authors: Schema.Attribute.Relation<'oneToMany', 'api::author.author'>;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    proficiencyLevel: Schema.Attribute.String;
    publishedDate: Schema.Attribute.Date;
    type: Schema.Attribute.String;
    url: Schema.Attribute.String;
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
    Authors: Schema.Attribute.Component<'seo.authors-item', false>;
    canonical: Schema.Attribute.String;
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
      'ab-experiments-component.targeting-rules': AbExperimentsComponentTargetingRules;
      'ab-experiments-component.url-rule': AbExperimentsComponentUrlRule;
      'ab-experiments-component.variant': AbExperimentsComponentVariant;
      'ab-experiments-component.variant-change': AbExperimentsComponentVariantChange;
      'comparision-pages-component.demo-section': ComparisionPagesComponentDemoSection;
      'comparision-pages-component.faqs-section': ComparisionPagesComponentFaqsSection;
      'comparision-pages-component.feature-cards': ComparisionPagesComponentFeatureCards;
      'comparision-pages-component.herosection': ComparisionPagesComponentHerosection;
      'comparision-pages-component.migration-section': ComparisionPagesComponentMigrationSection;
      'elements.button': ElementsButton;
      'elements.button-with-icon': ElementsButtonWithIcon;
      'elements.card-inner-items': ElementsCardInnerItems;
      'elements.card-item': ElementsCardItem;
      'elements.case-study-item': ElementsCaseStudyItem;
      'elements.company-customer-feature': ElementsCompanyCustomerFeature;
      'elements.comparison-row': ElementsComparisonRow;
      'elements.event-card-item': ElementsEventCardItem;
      'elements.faq-item': ElementsFaqItem;
      'elements.faq-item-v2-markdown': ElementsFaqItemV2Markdown;
      'elements.faq-section': ElementsFaqSection;
      'elements.feature-description': ElementsFeatureDescription;
      'elements.feature-item': ElementsFeatureItem;
      'elements.feature-title-description': ElementsFeatureTitleDescription;
      'elements.footer-item': ElementsFooterItem;
      'elements.heading': ElementsHeading;
      'elements.homepage-feature-item': ElementsHomepageFeatureItem;
      'elements.image': ElementsImage;
      'elements.items': ElementsItems;
      'elements.items-link': ElementsItemsLink;
      'elements.key-feature-item': ElementsKeyFeatureItem;
      'elements.migration-step': ElementsMigrationStep;
      'elements.os-svs-enterprise-comparison-item': ElementsOsSvsEnterpriseComparisonItem;
      'elements.partner-item': ElementsPartnerItem;
      'elements.platform-feature-item': ElementsPlatformFeatureItem;
      'elements.platform-item': ElementsPlatformItem;
      'elements.popup-item': ElementsPopupItem;
      'elements.pricing-item': ElementsPricingItem;
      'elements.reason-item': ElementsReasonItem;
      'elements.social-media-icon': ElementsSocialMediaIcon;
      'elements.tech-we-use': ElementsTechWeUse;
      'elements.technologies': ElementsTechnologies;
      'elements.technologies-features': ElementsTechnologiesFeatures;
      'elements.testimonial-card': ElementsTestimonialCard;
      'elements.trust-logo': ElementsTrustLogo;
      'landing-page-component.cta-banner': LandingPageComponentCtaBanner;
      'landing-page-component.feature-cards': LandingPageComponentFeatureCards;
      'landing-page-component.feature-comparison': LandingPageComponentFeatureComparison;
      'landing-page-component.hero-section': LandingPageComponentHeroSection;
      'landing-page-component.migration-steps': LandingPageComponentMigrationSteps;
      'landing-page-component.modern-foundation-card': LandingPageComponentModernFoundationCard;
      'landing-page-component.testimonial-section': LandingPageComponentTestimonialSection;
      'section-cards.additional-resources': SectionCardsAdditionalResources;
      'section-cards.articles': SectionCardsArticles;
      'section-cards.blog': SectionCardsBlog;
      'section-cards.case-studies': SectionCardsCaseStudies;
      'section-cards.clients': SectionCardsClients;
      'section-cards.community-support': SectionCardsCommunitySupport;
      'section-cards.datadog-switch-reasons': SectionCardsDatadogSwitchReasons;
      'section-cards.event-cards': SectionCardsEventCards;
      'section-cards.feature1': SectionCardsFeature1;
      'section-cards.feature3': SectionCardsFeature3;
      'section-cards.feature4': SectionCardsFeature4;
      'section-cards.modern-foundation-card': SectionCardsModernFoundationCard;
      'section-cards.our-partners': SectionCardsOurPartners;
      'section-cards.plaform-key-features': SectionCardsPlaformKeyFeatures;
      'section-cards.switch-reasons': SectionCardsSwitchReasons;
      'section-cards.testimonial-section': SectionCardsTestimonialSection;
      'section-cards.testimonials': SectionCardsTestimonials;
      'section-cards.webinar': SectionCardsWebinar;
      'section-cta.ai-native-cta-banner': SectionCtaAiNativeCtaBanner;
      'section-cta.banner': SectionCtaBanner;
      'section-cta.datadog-cta': SectionCtaDatadogCta;
      'section-cta.download-cta': SectionCtaDownloadCta;
      'section-faqs.fa-qs-page-section': SectionFaqsFaQsPageSection;
      'section-faqs.frequently-asked-question': SectionFaqsFrequentlyAskedQuestion;
      'section-faqs.platform-faqs': SectionFaqsPlatformFaqs;
      'section-features.cloud-section-for-downloads': SectionFeaturesCloudSectionForDownloads;
      'section-features.download-deployment-option': SectionFeaturesDownloadDeploymentOption;
      'section-features.feature-comparison': SectionFeaturesFeatureComparison;
      'section-features.feature-left-tabs': SectionFeaturesFeatureLeftTabs;
      'section-features.feature-list': SectionFeaturesFeatureList;
      'section-features.feature-sub-page-top-tabs': SectionFeaturesFeatureSubPageTopTabs;
      'section-features.global-team': SectionFeaturesGlobalTeam;
      'section-features.home-marketecture-section': SectionFeaturesHomeMarketectureSection;
      'section-features.homepage-feature': SectionFeaturesHomepageFeature;
      'section-features.migration-steps': SectionFeaturesMigrationSteps;
      'section-features.our-commitment': SectionFeaturesOurCommitment;
      'section-features.our-story': SectionFeaturesOurStory;
      'section-features.platform-features-top-tabs': SectionFeaturesPlatformFeaturesTopTabs;
      'section-features.self-hosted-for-downloads': SectionFeaturesSelfHostedForDownloads;
      'section-features.tabs-features': SectionFeaturesTabsFeatures;
      'section-features.technologies': SectionFeaturesTechnologies;
      'section-forms.contact': SectionFormsContact;
      'section-forms.contact-sales-form': SectionFormsContactSalesForm;
      'section-forms.demo-page-form': SectionFormsDemoPageForm;
      'section-forms.download-contact-form': SectionFormsDownloadContactForm;
      'section-hero.ai-native-page-herosection': SectionHeroAiNativePageHerosection;
      'section-hero.datadog-hero-section': SectionHeroDatadogHeroSection;
      'section-hero.homepage-hero': SectionHeroHomepageHero;
      'section-hero.resource-hero-section': SectionHeroResourceHeroSection;
      'section-hero.solution-subpage-herosection': SectionHeroSolutionSubpageHerosection;
      'section-hero.solutions-hero-section': SectionHeroSolutionsHeroSection;
      'section-json-structure-for-google-bot.json-ld-schema': SectionJsonStructureForGoogleBotJsonLdSchema;
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
