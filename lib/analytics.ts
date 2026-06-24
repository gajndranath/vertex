export const generateSessionId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const getSessionId = () => {
  let sessionId = sessionStorage.getItem('vtx_session');
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('vtx_session', sessionId);
  }
  return sessionId;
};

export const trackEvent = async (type: string, data: Record<string, unknown> = {}) => {
  try {
    const payload = {
      type,
      page: window.location.pathname,
      referrer: document.referrer,
      device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
      browser: navigator.userAgent,
      sessionId: getSessionId(),
      timestamp: new Date().toISOString(),
      ...data
    };

    // Make an API call to our backend analytics route.
    // Using fetch with keepalive ensures it fires even if the user navigates away
    await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://vertex-backeend.onrender.com'}/api/analytics/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (error) {
    // Silently fail if analytics fails, we don't want to break the UI
    console.error('Analytics tracking failed:', error);
  }
};
