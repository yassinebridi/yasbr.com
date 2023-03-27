export const pageview = (url: string) => {
  if (typeof window?.gtag !== 'undefined') {
    window?.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }) => {
  if (typeof window?.gtag !== 'undefined') {
    window?.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
