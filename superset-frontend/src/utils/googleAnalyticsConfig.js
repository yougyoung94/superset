// Environment variables are not proper input on this case, because webpack bundle is executed on browser-side.
export default {
  trackingId: `${process.env.REACT_APP_GA_TRACKING_ID}`, // PROD: "UA-192454100-1" // DEV: "UA-192256724-1"
  gtmId: `${process.env.REACT_APP_GA_TAG_MANAGER_ID}`, // PROD: "GTM-MMJMSRD", // DEV: "GTM-WTLKRXJ",
};
