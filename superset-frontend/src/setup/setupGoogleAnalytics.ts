import ReactGA from 'react-ga';
// @ts-ignore
import TagManager from 'react-gtm-module';
import ga from '../utils/googleAnalyticsConfig';

export default function setupGoogleAnalytics(
  trackingId: string = ga.trackingId,
  gtmId: string = ga.gtmId,
) {
  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname + window.location.search);
  TagManager.initialize({ gtmId });
}
