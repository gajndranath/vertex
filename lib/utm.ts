export const getUTMParams = () => {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get('utm_source') || 'Direct',
    medium: params.get('utm_medium') || '',
    campaign: params.get('utm_campaign') || '',
  };
};
