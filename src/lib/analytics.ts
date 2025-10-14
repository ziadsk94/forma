// Google Analytics 4 configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track project views
export const trackProjectView = (projectName: string) => {
  event({
    action: 'view_project',
    category: 'engagement',
    label: projectName,
  });
};

// Track service inquiries
export const trackServiceInquiry = (serviceType: string) => {
  event({
    action: 'service_inquiry',
    category: 'conversion',
    label: serviceType,
  });
};

// Track contact form submissions
export const trackContactSubmission = () => {
  event({
    action: 'contact_form_submit',
    category: 'conversion',
    label: 'contact_form',
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  });
};

// Track video interactions
export const trackVideoPlay = (videoName: string) => {
  event({
    action: 'video_play',
    category: 'engagement',
    label: videoName,
  });
};

// Track gallery interactions
export const trackGalleryInteraction = (galleryName: string, action: string) => {
  event({
    action: `gallery_${action}`,
    category: 'engagement',
    label: galleryName,
  });
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}
