// import React, { createContext, useState, useEffect } from "react";

// export const PageSpeedContext = createContext();

// export const PageSpeedProvider = ({ children }) => {

  
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
// useEffect(() => {
//   const url =
//     "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://developers.google.com";

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) throw new Error("Network response was not ok");
//       console.log("API response:", response);  // Check if API response is received
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Raw API data:", data);  // Log raw data to understand the structure
//       const performanceData = {
//         imageUrl: data.lighthouseResult?.audits["final-screenshot"]?.details?.data || "default_image_url_here",
//         pageSize: (data.loadingExperience?.page_size || 2.5).toFixed(1),
//         pageRequests: data.loadingExperience?.page_requests || 50,
//         pageSpeed: (data.loadingExperience?.page_speed || 5.2).toFixed(1),
//         performanceScore: data.lighthouseResult?.categories?.performance?.score * 25,
//       };
//       console.log("Formatted performanceData:", performanceData);  // Log formatted data to verify correctness
//       setData(performanceData);
//       setLoading(false);
//     })
//     .catch((error) => {
//       console.error("Error fetching PageSpeed data:", error);  // Log error if fetch fails
//       setError(error);
//       setLoading(false);
//     });
// }, []);
//   return (
//     <PageSpeedContext.Provider value={{ data, loading, error }}>
//       {children}
//     </PageSpeedContext.Provider>
//   );
// };



// // context.js
// import React, { createContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";

// export const PageSpeedContext = createContext();

// export const PageSpeedProvider = ({ children }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const url =
//       "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://developers.google.com";

//     fetch(url)
//       .then((response) => {
//         if (!response.ok) throw new Error("Network response was not ok");
//         return response.json();
//       })
//       .then((data) => {
//         const performanceData = {
//           imageUrl:
//             data.lighthouseResult?.audits["final-screenshot"]?.details?.data || null,
//           pageSize: (data.lighthouseResult?.audits["total-byte-weight"]?.displayValue || "2.5 MB").replace(" MB", ""),
//           pageRequests: data.lighthouseResult?.audits["network-requests"]?.details?.items?.length || 50,
//           pageSpeed: (
//             data.lighthouseResult?.audits["interactive"]?.displayValue || "5.2s"
//           ).replace("s", ""),
//           performanceScore:
//             (data.lighthouseResult?.categories?.performance?.score || 0) * 25,
//         };

//         // performance data 
//         console.log("Processed performanceData:", performanceData); // Debug log
//         setData(performanceData);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching PageSpeed data:", error);
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <PageSpeedContext.Provider value={{ data, loading, error }}>
//       {children}
//     </PageSpeedContext.Provider>
//   );
// };

// PageSpeedProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };



// export default PageSpeedProvider;


// // Context/context.js
// import React, { createContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";

// export const PageSpeedContext = createContext();

// export const PageSpeedProvider = ({ children, url = '' }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!url.trim()) {
//       return;
//     }

//     setLoading(true);
//     setError(null);
    
//     const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=performance&category=accessibility&category=best-practices&category=seo`;

//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) throw new Error("Network response was not ok");
//         return response.json();
//       })
//       .then((responseData) => {
//         const performanceData = {
//           performanceScore: Math.round((responseData.lighthouseResult?.categories?.performance?.score || 0) * 100),
//           accessibilityScore: Math.round((responseData.lighthouseResult?.categories?.accessibility?.score || 0) * 100),
//           bestPracticesScore: Math.round((responseData.lighthouseResult?.categories?.["best-practices"]?.score || 0) * 100),
//           seoScore: Math.round((responseData.lighthouseResult?.categories?.seo?.score || 0) * 100),
//           imageUrl: responseData.lighthouseResult?.audits["final-screenshot"]?.details?.data,
//           metrics: {
//             firstContentfulPaint: responseData.lighthouseResult?.audits["first-contentful-paint"]?.displayValue,
//             speedIndex: responseData.lighthouseResult?.audits["speed-index"]?.displayValue,
//             largestContentfulPaint: responseData.lighthouseResult?.audits["largest-contentful-paint"]?.displayValue,
//             timeToInteractive: responseData.lighthouseResult?.audits["interactive"]?.displayValue,
//             totalBlockingTime: responseData.lighthouseResult?.audits["total-blocking-time"]?.displayValue,
//             cumulativeLayoutShift: responseData.lighthouseResult?.audits["cumulative-layout-shift"]?.displayValue,
//           }
//         };

//         setData(performanceData);
//       })
//       .catch((error) => {
//         console.error("Error fetching PageSpeed data:", error);
//         setError("Failed to analyze website. Please check the URL and try again.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [url]);

//   return (
//     <PageSpeedContext.Provider value={{ data, loading, error }}>
//       {children}
//     </PageSpeedContext.Provider>
//   );
// };

// PageSpeedProvider.propTypes = {
//   children: PropTypes.node.isRequired,
//   url: PropTypes.string
// };

// export default PageSpeedProvider;


// import React, { createContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";

// export const PageSpeedContext = createContext();

// export const PageSpeedProvider = ({ children, url = '' }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!url.trim()) {
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=performance&category=accessibility&category=best-practices&category=seo`;

//     console.log("Fetching data for URL:", apiUrl); 
//     console.log("URL :",url);
//     // Log the URL

//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) throw new Error("Network response was not ok");
//         return response.json();
//       })
//       .then((responseData) => {
//         console.log("Received data:", responseData); // Log the raw data

//         const performanceData = {
//           performanceScore: Math.round((responseData.lighthouseResult?.categories?.performance?.score || 0) * 100),
//           accessibilityScore: Math.round((responseData.lighthouseResult?.categories?.accessibility?.score || 0) * 100),
//           bestPracticesScore: Math.round((responseData.lighthouseResult?.categories?.["best-practices"]?.score || 0) * 100),
//           seoScore: Math.round((responseData.lighthouseResult?.categories?.seo?.score || 0) * 100),
//           imageUrl: responseData.lighthouseResult?.audits["final-screenshot"]?.details?.data,
//           metrics: {
//             firstContentfulPaint: responseData.lighthouseResult?.audits["first-contentful-paint"]?.displayValue,
//             speedIndex: responseData.lighthouseResult?.audits["speed-index"]?.displayValue,
//             largestContentfulPaint: responseData.lighthouseResult?.audits["largest-contentful-paint"]?.displayValue,
//             timeToInteractive: responseData.lighthouseResult?.audits["interactive"]?.displayValue,
//             totalBlockingTime: responseData.lighthouseResult?.audits["total-blocking-time"]?.displayValue,
//             cumulativeLayoutShift: responseData.lighthouseResult?.audits["cumulative-layout-shift"]?.displayValue,
//           }
//         };

//         setData(performanceData);
//         console.log(performanceData);
        
//       })
//       .catch((error) => {
//         console.error("Error fetching PageSpeed data:", error);
//         setError("Failed to analyze website. Please check the URL and try again.");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [url]);

//   return (
//     <PageSpeedContext.Provider value={{ data, loading, error }}>
//       {children}
//     </PageSpeedContext.Provider>
//   );
// };

// PageSpeedProvider.propTypes = {
//   children: PropTypes.node.isRequired,
//   url: PropTypes.string
// };

// export default PageSpeedProvider;



import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const PageSpeedContext = createContext();

export const PageSpeedProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeUrl = async (url) => {
    if (!url) {
      setError("Please enter a valid URL");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=performance&category=accessibility&category=best-practices&category=seo`;
      console.log("Fetching data for URL:", apiUrl); // Log the URL

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data from PageSpeed API");
      }

      const responseData = await response.json();
      console.log("Received data:", responseData); // Log the raw data

      const performanceData = {
        performanceScore: Math.round((responseData.lighthouseResult?.categories?.performance?.score || 0) * 100),
        accessibilityScore: Math.round((responseData.lighthouseResult?.categories?.accessibility?.score || 0) * 100),
        bestPracticesScore: Math.round((responseData.lighthouseResult?.categories?.["best-practices"]?.score || 0) * 100),
        seoScore: Math.round((responseData.lighthouseResult?.categories?.seo?.score || 0) * 100),
        imageUrl: responseData.lighthouseResult?.audits["final-screenshot"]?.details?.data,
        metrics: {
          firstContentfulPaint: responseData.lighthouseResult?.audits["first-contentful-paint"]?.displayValue,
          speedIndex: responseData.lighthouseResult?.audits["speed-index"]?.displayValue,
          largestContentfulPaint: responseData.lighthouseResult?.audits["largest-contentful-paint"]?.displayValue,
          timeToInteractive: responseData.lighthouseResult?.audits["interactive"]?.displayValue,
          totalBlockingTime: responseData.lighthouseResult?.audits["total-blocking-time"]?.displayValue,
          cumulativeLayoutShift: responseData.lighthouseResult?.audits["cumulative-layout-shift"]?.displayValue,
        }
      };

      setData(performanceData);
      console.log(performanceData); // Log the processed data
    } catch (err) {
      setError(err.message || "Failed to analyze website. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageSpeedContext.Provider value={{ data, loading, error, analyzeUrl }}>
      {children}
    </PageSpeedContext.Provider>
  );
};

PageSpeedProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageSpeedProvider;