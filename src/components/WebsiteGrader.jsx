// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import for navigation

// const WebsiteGrader = () => {
//   const [url, setUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // Navigation hook

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
//         url
//       )}`;
//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       const lighthouseResult = data?.lighthouseResult;
//       if (!lighthouseResult) {
//         throw new Error(
//           "Lighthouse data is not available in the API response."
//         );
//       }

//       const performanceScore =
//         lighthouseResult.categories?.performance?.score * 100 || 0;
//       const accessibilityScore =
//         lighthouseResult.categories?.accessibility?.score * 100 || 0;
//       const bestPracticesScore =
//         lighthouseResult.categories?.["best-practices"]?.score * 100 || 0;
//       const seoScore = lighthouseResult.categories?.seo?.score * 100 || 0;

//       const resultData = {
//         url,
//         scores: {
//           aggregate:
//             (performanceScore +
//               accessibilityScore +
//               bestPracticesScore +
//               seoScore) /
//             4,
//           details: [
//             {
//               label: "Performance",
//               score: performanceScore,
//               maxScore: 100,
//               color: "red",
//             },
//             {
//               label: "Accessibility",
//               score: accessibilityScore,
//               maxScore: 100,
//               color: "orange",
//             },
//             {
//               label: "Best Practices",
//               score: bestPracticesScore,
//               maxScore: 100,
//               color: "blue",
//             },
//             { label: "SEO", score: seoScore, maxScore: 100, color: "green" },
//           ],
//         },
//       };

//       // Navigate to Lighthouse component and pass resultData as state
//       navigate("/lighthouse", { state: { analysisData: resultData } });
//     } catch (error) {
//       setError(`Failed to fetch performance data: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "600px",
//         margin: "0 auto",
//         padding: "20px",
//         textAlign: "center",
//       }}
//     >
//       <h1>Website Grader</h1>
//       <p>Enter a URL to check its performance and SEO metrics:</p>
//       <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="https://example.com"
//           style={{
//             padding: "10px",
//             width: "80%",
//             marginBottom: "10px",
//             fontSize: "16px",
//           }}
//         />
//         <button
//           type="submit"
//           style={{ padding: "10px 20px", fontSize: "16px" }}
//         >
//           Analyze
//         </button>
//       </form>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default WebsiteGrader;

// 👆👆👆👆👆 First 






// ✅✅✅✅✅✅✅

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import for navigation
// // import { Speedcontext } from "../Context/context";


// const WebsiteGrader = () => {
// const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [url, setUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // Navigation hook
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);
    
//     try {
//       // const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
//       //   url
//       // )}`;
//       const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=performance&category=accessibility&category=seo&category=best-practices`;

//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       const lighthouseResult = data?.lighthouseResult;
//       if (!lighthouseResult) {
//         throw new Error(
//           "Lighthouse data is not available in the API response."
//         );
//       }

//      const performanceScore =
//   parseFloat((lighthouseResult.categories?.performance?.score * 100 || 0).toFixed(2));
// const accessibilityScore =
//   parseFloat((lighthouseResult.categories?.accessibility?.score * 100 || 0).toFixed(2));
// const bestPracticesScore =
//   parseFloat((lighthouseResult.categories?.["best-practices"]?.score * 100 || 0).toFixed(2));
// const seoScore =
//   parseFloat((lighthouseResult.categories?.seo?.score * 100 || 0).toFixed(2));



//       const resultData = {
//         url,
//         scores: {
//           aggregate:
//             (performanceScore +
//               accessibilityScore +
//               bestPracticesScore +
//               seoScore) /
//             4,
//           details: [
//             {
//               label: "Performance",
//               score: performanceScore,
//               maxScore: 100,
//               color: "red",
//             },
//             {
//               label: "Accessibility",
//               score: accessibilityScore,
//               maxScore: 100,
//               color: "orange",
//             },
//             {
//               label: "Best Practices",
//               score: bestPracticesScore,
//               maxScore: 100,
//               color: "blue",
//             },
//             { label: "SEO", score: seoScore, maxScore: 100, color: "green" },
//           ],
//         },
//       };

//       console.log('accessibilityScore',accessibilityScore);
//       console.log('bestPracticesScore',bestPracticesScore);
//       console.log('seoScore',seoScore);
//       console.log(performanceScore)
//       console.log(lighthouseResult.categories);

//       if (!lighthouseResult.categories?.seo) {
//   console.error("SEO data is missing!");
// }
// console.log(lighthouseResult.categories);
// if (!lighthouseResult.categories?.performance) {
//   console.error("Performance data is missing from the API response");
// }

//       // Navigate to Lighthouse component and pass resultData as state
//       navigate("/lighthouse", { state: { analysisData: resultData } });
//     } catch (error) {
//       setError(`Failed to fetch performance data: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//     <div style={{height:"100%",width:"100%"}}>
//       <br />
// <div className="absolute top-4 right-4 flex items-end space-x-4 mb-5">
//         <div className="relative">
//           <button
//             className="flex items-center space-x-2 text-black rounded-3xl" style={{border:"2px solid grey"}}
//             onClick={() => setShowLanguageOptions(!showLanguageOptions)}
//           >
//             English <span className="icon icon-angle-down"></span>
//           </button>
//           {showLanguageOptions && (
//             <ul className="absolute bg-white border rounded-md mt-2 w-40">
//               <li className="p-2">
//                 <a href="https://website.grader.com/de/" className="text-black">Deutsch</a>
//               </li>
//               <li className="p-2 hover:bg-gray-100">
//                 <a href="https://website.grader.com/">
//                   <span className="icon icon-check"></span> <div className="text-black">English</div>
//                 </a>
//               </li>
//               <li className="p-2 hover:bg-gray-100">
//                 <a href="https://website.grader.com/es/" className="text-black">Español</a>
//               </li>
//               <li className="p-2 hover:bg-gray-100">
//                 <a href="https://website.grader.com/fr/" className="text-black">Français</a>
//               </li>
//               <li className="p-2 hover:bg-gray-100">
//                 <a href="https://website.grader.com/ja/" className="text-black">日本語</a>
//               </li>
//               <li className="p-2 hover:bg-gray-100">
//                 <a href="https://website.grader.com/pt/" className="text-black">Português</a>
//               </li>
//             </ul>
//           )}
//         </div>
//         {/* Toggle FAQ section */}
       
//       </div>



//     <div style={{display:"flex",alignContent:"center",alignItems:"center", flexDirection:"column" ,width:"100vw", boxSizing:"border-box",height:"40vw"}}>
//    <div
//   style={{
//     minHeight: "100vh", // Full screen height
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#2d3748",
//     color: "#fff",
//     paddingTop:"5vh",
//     padding: "30vh",
//     boxSizing: "border-box",
//   }}
// >
//   <div
//     style={{
//       maxWidth: "700px",
//       width: "100%",
//       padding: "30px",
//       background: "#2d3748",
//       borderRadius: "10px",
//       color: "#fff",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       textAlign: "center",
//     }}
//   >

//  <div className="flex justify-center mb-4">
//             <img
//               width="151px"
//               alt="Mycto Tools logo"
//               src="https://i.ibb.co/ww9TGKX/f7f777c2e968.png"
//             />
//           </div>
          

//     <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
//       Website Grader <sup>®</sup>
//     </h1>
//     <p style={{ fontSize: "18px", marginBottom: "30px" }}>
//       Grade your website in seconds. Then learn how to improve it for free.
//     </p>

//     <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
//       <div style={{ marginBottom: "15px" }}>
//         <input
//           type="text"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="https://example.com"
//           style={{
//             padding: "12px",
//             width: "100%",
//             fontSize: "20px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             backgroundColor: "#2d3748",
//             color: "#fff",
//             outline: "none",
//             boxSizing: "border-box",
//             textAlign:"center"
//           }}
//         />
//       </div>

//        <p className="text-sm text-white mt-2">
//                 We're committed to your privacy. Mycto uses the information
//                 you provide to us to contact you about our relevant content,
//                 products, and services. You may unsubscribe from these
//                 communications at any time. For more information, check out our{" "}
//                 <a
//                   href=""
//                   className="text-blue-500 underline"
//                 >
//                   Privacy Policy
//                 </a>.
//               </p>
//               <br />
//       <button
//         type="submit"
//         className="py-3 px-8 bg-orange-600 text-white rounded-md hover:bg-orange-300 transition"
//         style={{
//           width: "100%",
//           padding: "12px 25px",
//           fontSize: "18px",
//           borderRadius: "8px",
//           color: "#fff",
//           border: "none",
//           cursor: "pointer",
//           transition: "background-color 0.3s",
//         }}
//       >
//         Get your score
//       </button>
//     </form>

//     {loading && (
//       <div
//         style={{
//           color: "#fff",
//           fontSize: "18px",
//           marginTop: "20px",
//         }}
//       >
//         {/* Loading... */}
//           <div className="loader flex justify-center items-center space-x-1">
//       {Array.from({ length: 15 }).map((_, index) => (
//         <span
//           key={index}
//           className="w-3.5 h-3.5 bg-blue-600 rounded-full animate-bounce"
//           style={{ animationDelay: `${index * 0.1}s` }}
//         ></span>
//       ))}
//     </div>
//       </div>
//     )}

//     {error && (
//       <div
//         style={{
//           color: "red",
//           fontSize: "16px",
//           marginTop: "20px",
//         }}
//       >
//         {error}
//       </div>
//     )}
//   </div>
// </div>

// <br />
//  <section className="BottomFaq__OverviewSection flex items-center mb-6 ml-20">
//         <div className="overview flex-1">
//           <h2 className="overview-title text-2xl font-bold mb-2 text-gray-700">Get Your Website Rating in Seconds</h2>
//           <p className="overview-description text-gray-700">
//             Mycto tools free website grader makes understanding website performance easy. The hardest part of building a site is often the guesswork. Which changes are important, and which aren’t? It can sometimes feel impossible to tell. Our online grader demystifies the whole process. Learn about your page performance, security, search engine optimization (SEO), and mobile experience. Discover what makes your site strong and uncover new opportunities for the future.
//           </p>
//         </div>
//         <div className="overview-img flex-1 text-center pl-10 ">
//           <img
//             loading="lazy"
//             height="462"
//             width="470"
//             src="//static.hsappstatic.net/website-grader-ui/static-1.3755/img/website-performance-rating.jpg"
//             alt="Webpage score after performing a free test with the Website Grader"
//             className="max-w-full h-auto" // Ensure responsiveness
//           />
//         </div>
//       </section>




//     <div className="relative w-full max-w-2xl p-6 shadow-md rounded-md bg-white">
//   {/* Back Button */}
//   <button
//     className="mb-4 text-white bg-transparent border-none hover:bg-gray-700 p-2 rounded-md transition-colors"
//     onClick={() => setShowFAQ(false)} // Go back to main page
//   >
//     &larr; Back
//   </button>

//   {/* FAQ Section */}
//   <h2 className="text-2xl font-bold mb-4 ">FAQ</h2>
//   <div className="space-y-4  pl-4 mr-20">
//     <details className="p-4 rounded-md border">
//       <summary className="cursor-pointer font-semibold">
//         What does Website Grader do?
//       </summary>
//       <p className="mt-2">
//         Website Grader analyzes your website to discover what it does well and flag areas where improvements can be made to benefit more from search traffic.
//       </p>
//     </details>

//     <details className="p-4 rounded-md border">
//       <summary className="cursor-pointer font-semibold">
//         How does Website Grader work?
//       </summary>
//       <ol className="list-decimal mt-2 pl-6">
//         <li>Enter your website URL in the "Website" field.</li>
//         <li>Add your email address in the "Email" field.</li>
//         <li>Click "Get Your Score".</li>
//         <li>Wait a few seconds and review your grade.</li>
//       </ol>
//     </details>

//     <details className="p-4 rounded-md border">
//       <summary className="cursor-pointer font-semibold">
//         Is Website Grader a free SEO Checker?
//       </summary>
//       <p className="mt-2">Yes, Website Grader is free to use.</p>
//     </details>

//     <details className="p-4 rounded-md border">
//       <summary className="cursor-pointer font-semibold">
//         Who is HubSpot?
//       </summary>
//       <p className="mt-2">
//         HubSpot is a leading growth platform that helps businesses attract, engage, and delight customers.
//       </p>
//     </details>
//   </div>
// </div>
// </div>
// </div>
//     </>
    
//   );
// };

// export default WebsiteGrader;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import LoadingPage from "./LoadingPage";
// import PageSpeedProvider from '../Context/context';

// const WebsiteGrader = () => {
//   const [showLanguageOptions, setShowLanguageOptions] = useState(false);
//   const [url, setUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=performance&category=accessibility&category=seo&category=best-practices`;
      
//       const response = await fetch(apiUrl);

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       const lighthouseResult = data?.lighthouseResult;
//       if (!lighthouseResult) {
//         throw new Error("Lighthouse data is not available in the API response.");
//       }

//       const performanceScore = parseFloat((lighthouseResult.categories?.performance?.score * 30 || 0).toFixed(2));
//       const accessibilityScore = parseFloat((lighthouseResult.categories?.accessibility?.score * 30 || 0).toFixed(2));
//       const bestPracticesScore = parseFloat((lighthouseResult.categories?.["best-practices"]?.score * 30 || 0).toFixed(2));
//       const seoScore = parseFloat((lighthouseResult.categories?.seo?.score * 30 || 0).toFixed(2));

//       const resultData = {
//         url,
//         scores: {
//           aggregate: (performanceScore + accessibilityScore + bestPracticesScore + seoScore) / 4,
//           details: [
//             { label: "Performance", score: performanceScore, maxScore: 30, color: "red" },
//             { label: "Accessibility", score: accessibilityScore, maxScore: 30, color: "orange" },
//             { label: "Best Practices", score: bestPracticesScore, maxScore: 30, color: "blue" },
//             { label: "SEO", score: seoScore, maxScore: 30, color: "green" },
//           ],
//         },
//       };

//       navigate("/lighthouse", { state: { analysisData: resultData } });
//     } catch (error) {
//       setError(`Failed to fetch performance data: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <PageSpeedProvider url={url}>
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 animate-fadeIn">
//         <div className="absolute top-4 right-4 flex items-end space-x-4 mb-5">
//           <div className="relative">
//             <button
//               className="flex items-center space-x-2 text-black rounded-3xl border-2 border-gray-500 hover:scale-105 transform transition-transform duration-300"
//               onClick={() => setShowLanguageOptions(!showLanguageOptions)}
//             >
//               English <span className="icon icon-angle-down"></span>
//             </button>
//             {showLanguageOptions && (
//               <ul className="absolute bg-white border rounded-md mt-2 w-40">
//                 <li className="p-2">
//                   <a href="https://website.grader.com/de/" className="text-black">Deutsch</a>
//                 </li>
//                 <li className="p-2 hover:bg-gray-100">
//                   <a href="https://website.grader.com/">
//                     <span className="icon icon-check"></span> <div className="text-black">English</div>
//                   </a>
//                 </li>
//                 <li className="p-2 hover:bg-gray-100">
//                   <a href="https://website.grader.com/es/" className="text-black">Español</a>
//                 </li>
//                 <li className="p-2 hover:bg-gray-100">
//                   <a href="https://website.grader.com/fr/" className="text-black">Français</a>
//                 </li>
//                 <li className="p-2 hover:bg-gray-100">
//                   <a href="https://website.grader.com/ja/" className="text-black">日本語</a>
//                 </li>
//                 <li className="p-2 hover:bg-gray-100">
//                   <a href="https://website.grader.com/pt/" className="text-black">Português</a>
//                 </li>
//               </ul>
//             )}
//           </div>
//         </div>
//         <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6" style={{border:"1px solid gray"}}>
//           <div className="flex justify-center mb-4">
//             <img width="151px" alt="Mycto Tools logo" src="https://i.ibb.co/ww9TGKX/f7f777c2e968.png" />
//           </div>
//           <h1 className="text-3xl mb-5 text-center">Website Grader <sup>®</sup></h1>
//           <p className="text-lg mb-8 text-center">
//             Grade your website in seconds. Then learn how to improve it for free.
//           </p>
//           <form onSubmit={handleSubmit} className="mb-8">
//             <div className="mb-4">
//               <input
//                 type="text"
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//                 placeholder="https://example.com"
//                 className="p-3 w-full text-lg rounded-md border border-gray-300 bg-gray-800 text-white text-center focus:outline-none"
//               />
//             </div>
//             <p className="text-sm text-white mt-2 text-center">
//               We're committed to your privacy. Mycto uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our{" "}
//               <a href="" className="text-blue-500 underline">Privacy Policy</a>.
//             </p>
//             <button type="submit" className="py-3 px-8 bg-orange-600 text-white rounded-md hover:bg-orange-300 transition w-full mt-4 hover:scale-105 transform transition-transform duration-300">
//               Get your score
//             </button>
//           </form>
//           {loading && (
//             <div className="text-white text-lg mt-5 flex justify-center items-center">
//               <div className="loader flex justify-center items-center space-x-1">
//                 {Array.from({ length: 15 }).map((_, index) => (
//                   <span key={index} className="w-3.5 h-3.5 bg-white rounded-full animate-bounce" style={{ animationDelay: `${index * 0.15}s` }}></span>
//                 ))}
//               </div>
//             </div>
            
//           )}
//           {error && <div className="text-red-500 text-base mt-5">{error}</div>}
//         </div>
//         <section className="BottomFaq__OverviewSection flex items-center mb-6 mt-10">
//           <div className="overview flex-1">
//             <h2 className="overview-title text-2xl font-bold mb-2 text-gray-300">Get Your Website Rating in Seconds</h2>
//             <p className="overview-description text-gray-300">
//               Mycto tools free website grader makes understanding website performance easy. The hardest part of building a site is often the guesswork. Which changes are important, and which aren’t? It can sometimes feel impossible to tell. Our online grader demystifies the whole process. Learn about your page performance, security, search engine optimization (SEO), and mobile experience. Discover what makes your site strong and uncover new opportunities for the future.
//             </p>
//           </div>
//           <div className="overview-img flex-1 text-center pl-10">
//             <img loading="lazy" height="462" width="470" src="//static.hsappstatic.net/website-grader-ui/static-1.3755/img/website-performance-rating.jpg" alt="Webpage score after performing a free test with the Website Grader" className="max-w-full h-auto rounded-xl" style={{border:"1px solid gray"}} />
//           </div>
//         </section>
//       </div>
//     </PageSpeedProvider>
//   );
// };

// export default WebsiteGrader;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageSpeedProvider from '../Context/context';

const WebsiteGrader = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const lighthouseResult = data?.lighthouseResult;
      if (!lighthouseResult) {
        throw new Error("Lighthouse data is not available in the API response.");
      }

      const performanceScore = lighthouseResult.categories?.performance?.score * 100 || 0;
      const accessibilityScore = lighthouseResult.categories?.accessibility?.score * 100 || 0;
      const bestPracticesScore = lighthouseResult.categories?.["best-practices"]?.score * 100 || 0;
      const seoScore = lighthouseResult.categories?.seo?.score * 100 || 0;

      const resultData = {
        url,
        scores: {
          aggregate: (performanceScore + accessibilityScore + bestPracticesScore + seoScore) / 4,
          details: [
            { label: "Performance", score: performanceScore, maxScore: 100, color: "red" },
            { label: "Accessibility", score: accessibilityScore, maxScore: 100, color: "orange" },
            { label: "Best Practices", score: bestPracticesScore, maxScore: 100, color: "blue" },
            { label: "SEO", score: seoScore, maxScore: 100, color: "green" },
          ],
        },
      };

      navigate("/lighthouse", { state: { analysisData: resultData } });
    } catch (error) {
      setError(`Failed to fetch performance data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {url ? (
        <PageSpeedProvider url={url}>
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 animate-fadeIn">
            <div className="absolute top-4 right-4 flex items-end space-x-4 mb-5">
              <div className="relative">
                <button
                  className="flex items-center space-x-2 text-black rounded-3xl border-2 border-gray-500 hover:scale-105 transform transition-transform duration-300"
                  onClick={() => setShowLanguageOptions(!showLanguageOptions)}
                >
                  English <span className="icon icon-angle-down"></span>
                </button>
                {showLanguageOptions && (
                  <ul className="absolute bg-white border rounded-md mt-2 w-40">
                    <li className="p-2">
                      <a href="https://website.grader.com/de/" className="text-black">Deutsch</a>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <a href="https://website.grader.com/">
                        <span className="icon icon-check"></span> <div className="text-black">English</div>
                      </a>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <a href="https://website.grader.com/es/" className="text-black">Español</a>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <a href="https://website.grader.com/fr/" className="text-black">Français</a>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <a href="https://website.grader.com/ja/" className="text-black">日本語</a>
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                      <a href="https://website.grader.com/pt/" className="text-black">Português</a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-6" style={{border:"1px solid gray"}}>
              <div className="flex justify-center mb-4">
                <img width="151px" alt="Mycto Tools logo" src="https://i.ibb.co/ww9TGKX/f7f777c2e968.png" />
              </div>
              <h1 className="text-3xl mb-5 text-center">Website Grader <sup>®</sup></h1>
              <p className="text-lg mb-8 text-center">
                Grade your website in seconds. Then learn how to improve it for free.
              </p>
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-4">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="p-3 w-full text-lg rounded-md border border-gray-300 bg-gray-800 text-white text-center focus:outline-none"
                  />
                </div>
                <p className="text-sm text-white mt-2 text-center">
                  We're committed to your privacy. Mycto uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our{" "}
                  <a href="" className="text-blue-500 underline">Privacy Policy</a>.
                </p>
                <button type="submit" className="py-3 px-8 bg-orange-600 text-white rounded-md hover:bg-orange-300 transition w-full mt-4 hover:scale-105 transform transition-transform duration-300">
                  Get your score
                </button>
              </form>
              {loading && (
                <div className="text-white text-lg mt-5 flex justify-center items-center">
                  <div className="loader flex justify-center items-center space-x-1">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <span key={index} className="w-3.5 h-3.5 bg-white rounded-full animate-bounce" style={{ animationDelay: `${index * 0.15}s` }}></span>
                    ))}
                  </div>
                </div>
              )}
              {error && <div className="text-red-500 text-base mt-5">{error}</div>}
            </div>
          </div>
        </PageSpeedProvider>
      ) : null}
    </>
  );
};

export default WebsiteGrader;