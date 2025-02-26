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
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
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
    link: Schema.Attribute.String;
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

export interface ElementsPlanComparisonItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_plan_comparison_items';
  info: {
    displayName: 'PlanComparisonItem';
  };
  attributes: {
    cloud: Schema.Attribute.String & Schema.Attribute.Required;
    feature: Schema.Attribute.String & Schema.Attribute.Required;
    selfHosted: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsPlanItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_plan_items';
  info: {
    description: '';
    displayName: 'PlanItem';
  };
  attributes: {
    bottomDescription: Schema.Attribute.Text;
    demoButton: Schema.Attribute.Component<'elements.button', false>;
    description: Schema.Attribute.Text;
    enterpriseDescription: Schema.Attribute.String;
    enterpriseFeatures: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    enterpriseTitle: Schema.Attribute.String;
    featureDesc: Schema.Attribute.String;
    features: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    monthlyText: Schema.Attribute.String;
    pricing: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsResourceCardItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_resource_card_items';
  info: {
    displayName: 'ResourceCardItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
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
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
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

export interface SectionCardsExploreResources extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_explore_resources';
  info: {
    description: '';
    displayName: 'ExploreResources';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.resource-card-item', true>;
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
    description: '';
    displayName: 'ResourceFeatureHighlight';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true>;
    noOfGridColumn: Schema.Attribute.Integer & Schema.Attribute.Required;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionCardsResourceSupportCard
  extends Struct.ComponentSchema {
  collectionName: 'components_section_cards_resource_support_cards';
  info: {
    description: '';
    displayName: 'ResourceSupportCard';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
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
      false
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
    heading: Schema.Attribute.Component<'elements.heading', false>;
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

export interface SectionFaqsFaQsPageSection extends Struct.ComponentSchema {
  collectionName: 'components_section_faqs_fa_qs_page_sections';
  info: {
    description: '';
    displayName: 'FAQs Page Section';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'elements.faq-item', true>;
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
    subTitle: Schema.Attribute.String;
  };
}

export interface SectionFeaturesCloudSectionForDownloads
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_cloud_section_for_downloads';
  info: {
    displayName: 'CloudSectionForDownloads';
  };
  attributes: {
    bottomDescription: Schema.Attribute.String;
    bottomTitle: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionFeaturesCloudTabsForPricing
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_cloud_tabs_for_pricings';
  info: {
    displayName: 'CloudTabsForPricing';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.plan-item', true>;
  };
}

export interface SectionFeaturesDemoFeatures extends Struct.ComponentSchema {
  collectionName: 'components_section_features_demo_features';
  info: {
    displayName: 'demoFeatures';
  };
  attributes: {
    description: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'elements.feature-title-description',
      true
    >;
    title: Schema.Attribute.String;
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

export interface SectionFeaturesFeatureSubPageTopTabs
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_feature_sub_page_top_tabs';
  info: {
    displayName: 'Feature-SubPage-Top-Tabs';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.feature-item', true>;
  };
}

export interface SectionFeaturesHomeFeaturesList
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_home_features_lists';
  info: {
    displayName: 'Home Features List';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.feature-item', true>;
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

export interface SectionFeaturesKeyFeatureWrapper
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_key_feature_wrappers';
  info: {
    displayName: 'KeyFeatureWrapper';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true>;
  };
}

export interface SectionFeaturesObservabilitySpace
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_observability_spaces';
  info: {
    displayName: 'Observability Space';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
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

export interface SectionFeaturesSelfHostedForPricing
  extends Struct.ComponentSchema {
  collectionName: 'components_section_features_self_hosted_for_pricings';
  info: {
    displayName: 'SelfHostedForPricing';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.plan-item', true>;
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
    description: '';
    displayName: 'Contact';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true>;
    subTitle: Schema.Attribute.Text;
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

export interface SectionFormsEnterpriceContact extends Struct.ComponentSchema {
  collectionName: 'components_section_forms_enterprice_contacts';
  info: {
    description: '';
    displayName: 'Enterprice-contact';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Component<'elements.heading', false>;
    items: Schema.Attribute.Component<'elements.items', true>;
    subTitle: Schema.Attribute.Text;
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
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionHeroCompanyWhyO2HeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_company_why_o2_hero_sections';
  info: {
    displayName: 'CompanyWhyO2HeroSection';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionHeroContactHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_contact_hero_sections';
  info: {
    displayName: 'ContactHeroSection';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionHeroDemoHerosection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_demo_herosections';
  info: {
    displayName: 'DemoHerosection';
    icon: 'crown';
  };
  attributes: {
    features: Schema.Attribute.Component<
      'section-features.demo-features',
      true
    >;
    heading: Schema.Attribute.Component<'elements.heading', false>;
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

export interface SectionHeroFeatureSolutionHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_feature_solution_hero_sections';
  info: {
    description: '';
    displayName: 'FeatureSolutionHeroSection';
    icon: 'crown';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
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
    heading: Schema.Attribute.Component<'elements.heading', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
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

export interface SectionHeroKeyFeatureHerosection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_key_feature_herosections';
  info: {
    displayName: 'KeyFeatureHerosection';
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

export interface SectionHeroSolutionsHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_solutions_hero_sections';
  info: {
    displayName: 'SolutionsHeroSection';
    icon: 'crown';
  };
  attributes: {
    heading: Schema.Attribute.Component<'elements.heading', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    items: Schema.Attribute.Component<'elements.items', true>;
    noOfGridColumn: Schema.Attribute.Integer;
    primaryButton: Schema.Attribute.Component<'elements.button', false>;
    secondaryButton: Schema.Attribute.Component<'elements.button', false>;
  };
}

export interface SectionNavigationCompany extends Struct.ComponentSchema {
  collectionName: 'components_section_navigation_companies';
  info: {
    displayName: 'Company';
  };
  attributes: {
    items: Schema.Attribute.Component<'section-navigation.sub-item', true>;
  };
}

export interface SectionNavigationKeyFeature extends Struct.ComponentSchema {
  collectionName: 'components_section_navigation_key_features';
  info: {
    displayName: 'keyFeature';
  };
  attributes: {
    items: Schema.Attribute.Component<'section-navigation.sub-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionNavigationPlatform extends Struct.ComponentSchema {
  collectionName: 'components_section_navigation_platforms';
  info: {
    displayName: 'Platform';
  };
  attributes: {
    items: Schema.Attribute.Component<'section-navigation.platfrom-item', true>;
    keyFeature: Schema.Attribute.Component<
      'section-navigation.key-feature',
      false
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionNavigationPlatfromItem extends Struct.ComponentSchema {
  collectionName: 'components_section_navigation_platfrom_items';
  info: {
    displayName: 'PlatfromItem';
  };
  attributes: {
    items: Schema.Attribute.Component<'section-navigation.sub-item', true>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionNavigationResources extends Struct.ComponentSchema {
  collectionName: 'components_section_navigation_resources';
  info: {
    displayName: 'Resources';
  };
  attributes: {
    item1: Schema.Attribute.Component<'section-navigation.sub-item', true>;
    item2: Schema.Attribute.Component<'section-navigation.support-item', true>;
  };
}

export interface SectionNavigationSoltuions extends Struct.ComponentSchema {
  collectionName: 'components_section_navigation_soltuions';
  info: {
    description: '';
    displayName: 'Solutions';
  };
  attributes: {
    byTeam: Schema.Attribute.Component<'section-navigation.sub-item', true>;
    useCases: Schema.Attribute.Component<'section-navigation.sub-item', true>;
  };
}

export interface SectionNavigationSubItem extends Struct.ComponentSchema {
  collectionName: 'components_section_navigation_sub_items';
  info: {
    displayName: 'subItem';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionNavigationSupportItem extends Struct.ComponentSchema {
  collectionName: 'components_section_navigation_support_items';
  info: {
    displayName: 'SupportItem';
  };
  attributes: {
    items: Schema.Attribute.Component<'section-navigation.sub-item', true>;
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

export interface SectionTablePlansFeatureTable extends Struct.ComponentSchema {
  collectionName: 'components_section_table_plans_feature_tables';
  info: {
    description: '';
    displayName: 'PlansFeatureTable';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.plan-comparison-item', true>;
    heading: Schema.Attribute.Component<'elements.heading', false>;
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
    selfHostedData: Schema.Attribute.Component<
      'section-features.self-hosted-for-downloads',
      false
    >;
  };
}

export interface SectionTabsPricingTabs extends Struct.ComponentSchema {
  collectionName: 'components_section_tabs_pricing_tabs';
  info: {
    description: '';
    displayName: 'PricingTabs';
  };
  attributes: {
    cloudData: Schema.Attribute.Component<'elements.plan-item', true>;
    selfHostedData: Schema.Attribute.Component<'elements.plan-item', false>;
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
      'elements.plan-comparison-item': ElementsPlanComparisonItem;
      'elements.plan-item': ElementsPlanItem;
      'elements.resource-card-item': ElementsResourceCardItem;
      'elements.social-media-icon': ElementsSocialMediaIcon;
      'elements.support-card': ElementsSupportCard;
      'elements.tab-item': ElementsTabItem;
      'elements.testimonial-card': ElementsTestimonialCard;
      'section-cards.blog-with-categories': SectionCardsBlogWithCategories;
      'section-cards.blogs': SectionCardsBlogs;
      'section-cards.case-studies': SectionCardsCaseStudies;
      'section-cards.clients': SectionCardsClients;
      'section-cards.community-support': SectionCardsCommunitySupport;
      'section-cards.explore-resources': SectionCardsExploreResources;
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
      'section-faqs.fa-qs-page-section': SectionFaqsFaQsPageSection;
      'section-faqs.frequently-asked-question': SectionFaqsFrequentlyAskedQuestion;
      'section-features.cloud-section-for-downloads': SectionFeaturesCloudSectionForDownloads;
      'section-features.cloud-tabs-for-pricing': SectionFeaturesCloudTabsForPricing;
      'section-features.demo-features': SectionFeaturesDemoFeatures;
      'section-features.feature-list': SectionFeaturesFeatureList;
      'section-features.feature-sub-page-top-tabs': SectionFeaturesFeatureSubPageTopTabs;
      'section-features.home-features-list': SectionFeaturesHomeFeaturesList;
      'section-features.info-left-feature': SectionFeaturesInfoLeftFeature;
      'section-features.info-right-feature': SectionFeaturesInfoRightFeature;
      'section-features.key-feature-wrapper': SectionFeaturesKeyFeatureWrapper;
      'section-features.observability-space': SectionFeaturesObservabilitySpace;
      'section-features.platform-tabs-wrapper': SectionFeaturesPlatformTabsWrapper;
      'section-features.self-hosted-for-downloads': SectionFeaturesSelfHostedForDownloads;
      'section-features.self-hosted-for-pricing': SectionFeaturesSelfHostedForPricing;
      'section-features.tabs-features': SectionFeaturesTabsFeatures;
      'section-forms.contact': SectionFormsContact;
      'section-forms.download-contact-form': SectionFormsDownloadContactForm;
      'section-forms.enterprice-contact': SectionFormsEnterpriceContact;
      'section-hero.company-hero-section': SectionHeroCompanyHeroSection;
      'section-hero.company-why-o2-hero-section': SectionHeroCompanyWhyO2HeroSection;
      'section-hero.contact-hero-section': SectionHeroContactHeroSection;
      'section-hero.demo-herosection': SectionHeroDemoHerosection;
      'section-hero.feature-hero-section': SectionHeroFeatureHeroSection;
      'section-hero.feature-solution-hero-section': SectionHeroFeatureSolutionHeroSection;
      'section-hero.feature-sub-hero-section': SectionHeroFeatureSubHeroSection;
      'section-hero.homepage-hero': SectionHeroHomepageHero;
      'section-hero.key-feature-herosection': SectionHeroKeyFeatureHerosection;
      'section-hero.resource-hero-section': SectionHeroResourceHeroSection;
      'section-hero.solutions-hero-section': SectionHeroSolutionsHeroSection;
      'section-navigation.company': SectionNavigationCompany;
      'section-navigation.key-feature': SectionNavigationKeyFeature;
      'section-navigation.platform': SectionNavigationPlatform;
      'section-navigation.platfrom-item': SectionNavigationPlatfromItem;
      'section-navigation.resources': SectionNavigationResources;
      'section-navigation.soltuions': SectionNavigationSoltuions;
      'section-navigation.sub-item': SectionNavigationSubItem;
      'section-navigation.support-item': SectionNavigationSupportItem;
      'section-separator.separator': SectionSeparatorSeparator;
      'section-table.plans-feature-table': SectionTablePlansFeatureTable;
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
