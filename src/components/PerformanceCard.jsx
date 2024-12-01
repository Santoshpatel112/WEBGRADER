// import React from 'react';

// const PerformanceCard = ({imageUrl, pageSize,pageRequests,pageSpeed,performanceScore}) => {
//   console.log("PerformanceCard props:", { imageUrl, pageSize, pageRequests, pageSpeed, performanceScore });
//   return (
//     <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-xl mx-auto" id='performance'>
//       {/* Image Section */}
//       {imageUrl && (
//         <img src={imageUrl} alt="Performance illustration" className="w-24 h-24 mb-4" />
//       )}

//       {/* Main Performance Section */}  
//       <div className="text-center mb-6">
//         <div className="text-4xl font-bold text-red-500">
//           {performanceScore}<span className="text-gray-500">/25</span>
//         </div>
//         <h2 className="text-xl font-semibold mb-2">Performance</h2>
//         <p className="text-gray-600 text-sm mb-3">
//           Optimizing your website's performance is crucial to increasing traffic, improving conversion rates, generating more leads, and increasing revenue.
//         </p>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-blue-600">
//           Improve your website performance with a free 15-minute lesson
//         </button>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
//         {/* Page Size */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Size</h3>
//           <div className="text-2xl font-bold text-green-500 mt-2">{pageSize} MB</div>
//           <p className="text-xs text-gray-500">So fast! So light!</p>
//           <p className="text-gray-600 text-sm mt-1">
//             The heavier the site page, the slower the load. For optimal performance, try to keep page size below 3MB.
//           </p>
//         </div>

//         {/* Page Requests */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Requests</h3>
//           <div className="text-2xl font-bold text-red-500 mt-2">{pageRequests}</div>
//           <p className="text-xs text-gray-500">Now that's a lot of requests.</p>
//           <p className="text-gray-600 text-sm mt-1">
//             The more HTTP requests your website makes, the slower it becomes. Try reducing the number of files your site loads.
//           </p>
//         </div>

//         {/* Page Speed */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Speed</h3>
//           <div className="text-2xl font-bold text-red-500 mt-2">{pageSpeed} SEC</div>
//           <p className="text-xs text-gray-500">We need to talk.</p>
//           <p className="text-gray-600 text-sm mt-1">
//             Best-in-class webpages should become interactive within 5.3 seconds. Any slower and visitors will abandon your site, reducing conversions and sales.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PerformanceCard;

// 🧨🧨🧨🧨🧨🧨🧨🧨
//  Update 😀😀😀😀😀 19/11/24
// import React from "react";
// import PropTypes from "prop-types"; // Added PropTypes for validation

// const PerformanceCard = ({
//   imageUrl,
//   pageSize,
//   pageRequests,
//   pageSpeed,
//   performanceScore,
// }) => {
//   console.log("PerformanceCard props:", {
//     imageUrl,
//     pageSize,
//     pageRequests,
//     pageSpeed,
//     performanceScore,
//   }); // Debug log

//   return (
//     <div
//       className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-xl mx-auto"
//       id="performance"
//     >
//       {/* Image Section */}
//       {imageUrl && (
//         <img
//           src={imageUrl}
//           alt="Performance illustration"
//           className="w-24 h-24 mb-4"
//         />
//       )}

//       {/* Main Performance Section */}
//       <div className="text-center mb-6">
//         <div className="text-4xl font-bold text-red-500">
//           {performanceScore}
//           <span className="text-gray-500">/25</span>
//         </div>
//         <h2 className="text-xl font-semibold mb-2">Performance</h2>
//         <p className="text-gray-600 text-sm mb-3">
//           Optimizing your website performance is crucial to increasing
//           traffic, improving conversion rates, generating more leads, and
//           increasing revenue.
//         </p>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-blue-600">
//           Improve your website performance with a free 15-minute lesson
//         </button>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
//         {/* Page Size */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Size</h3>
//           <div className="text-2xl font-bold text-green-500 mt-2">
//             {pageSize} MB
//           </div>
//           <p className="text-xs text-gray-500">So fast! So light!</p>
//           <p className="text-gray-600 text-sm mt-1">
//             The heavier the site page, the slower the load. For optimal
//             performance, try to keep page size below 3MB.
//           </p>
//         </div>

//         {/* Page Requests */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Requests</h3>
//           <div className="text-2xl font-bold text-red-500 mt-2">
//             {pageRequests}
//           </div>
//           <p className="text-xs text-gray-500">Now that a lot of requests.</p>
//           <p className="text-gray-600 text-sm mt-1">
//             The more HTTP requests your website makes, the slower it becomes.
//             Try reducing the number of files your site loads.
//           </p>
//         </div>

//         {/* Page Speed */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Speed</h3>
//           <div className="text-2xl font-bold text-red-500 mt-2">
//             {pageSpeed} SEC
//           </div>
//           <p className="text-xs text-gray-500">We need to talk.</p>
//           <p className="text-gray-600 text-sm mt-1">
//             Best-in-class webpages should become interactive within 5.3
//             seconds. Any slower and visitors will abandon your site, reducing
//             conversions and sales.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Added PropTypes to validate props
// PerformanceCard.propTypes = {
//   imageUrl: PropTypes.string.isRequired,
//   pageSize: PropTypes.string.isRequired,
//   pageRequests: PropTypes.number.isRequired,
//   pageSpeed: PropTypes.string.isRequired,
//   performanceScore: PropTypes.number.isRequired,
// };

// export default PerformanceCard;


//  Update part 2 ✈️✈️✈️ 

import React from "react";
import PropTypes from "prop-types";

const PerformanceCard = ({
  imageUrl,
  pageSize,
  pageRequests,
  pageSpeed,
  performanceScore,
}) => {
  console.log("PerformanceCard props data:", {
    imageUrl,
    pageSize,
    pageRequests,
    pageSpeed,
    performanceScore,
  });

  console.log("ImageUrl :: ",imageUrl);
  console.log("PageSize :: ",pageSize);
  console.log("PageRequests :: ",pageRequests);
  console.log("PageSpeed :: ",pageSpeed);
  console.log("PerformanceScore :: ",performanceScore);
  
  
  
  return (
    <div
      className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-xl mx-auto"
      id="performance"
    >
      {/* Image Section */}
      {imageUrl ? (
        <img src={imageUrl} alt="Performance illustration" className="w-24 h-24 mb-4" />
      ) : (
        <div className="w-24 h-24 mb-4 bg-gray-200 flex items-center justify-center rounded-full">
          <span className="text-gray-500">No Image</span>
        </div>
      )}

      {/* Main Performance Section */}
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-red-500">
          {performanceScore}
          <span className="text-gray-500">/25</span>
        </div>
        <h2 className="text-xl font-semibold mb-2">Performance</h2>
        <p className="text-gray-600 text-sm mb-3">
          Optimizing your website performance is crucial to increasing traffic, improving conversion rates, generating more leads, and increasing revenue.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-blue-600">
          Improve your website performance with a free 15-minute lesson
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {/* Page Size */}
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-gray-700 font-semibold">Page Size</h3>
          <div className="text-2xl font-bold text-green-500 mt-2">{pageSize} MB</div>
        </div>

        {/* Page Requests */}
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-gray-700 font-semibold">Page Requests</h3>
          <div className="text-2xl font-bold text-red-500 mt-2">{pageRequests}</div>
        </div>

        {/* Page Speed */}
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-gray-700 font-semibold">Page Speed</h3>
          <div className="text-2xl font-bold text-red-500 mt-2">{pageSpeed} SEC</div>
        </div>
      </div>
    </div>
  );
};

PerformanceCard.propTypes = {
  imageUrl: PropTypes.string,
  pageSize: PropTypes.string,
  pageRequests: PropTypes.number,
  pageSpeed: PropTypes.string,
  performanceScore: PropTypes.number,
};

export default PerformanceCard;








//  old✅✅✅
// import React from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes for type checking

// const PerformanceCard = ({ imageUrl, pageSize, pageRequests, pageSpeed, performanceScore }) => {
//   console.log("PerformanceCard props:", { imageUrl, pageSize, pageRequests, pageSpeed, performanceScore });

//   return (
//     <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-xl mx-auto" id='performance'>
//       {/* Image Section */}
//       {imageUrl && (
//         <img src={imageUrl} alt="Performance illustration" className="w-24 h-24 mb-4" />
//       )}

//       {/* Main Performance Section */}
//       <div className="text-center mb-6">
//         <div className="text-4xl font-bold text-red-500">
//           {performanceScore}<span className="text-gray-500">/25</span>
//         </div>
//         <h2 className="text-xl font-semibold mb-2">Performance</h2>
//         <p className="text-gray-600 text-sm mb-3">
//           Optimizing your website's performance is crucial to increasing traffic, improving conversion rates, generating more leads, and increasing revenue.
//         </p>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-blue-600">
//           Improve your website performance with a free 15-minute lesson
//         </button>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
//         {/* Page Size */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Size</h3>
//           <div className="text-2xl font-bold text-green-500 mt-2">{pageSize} MB</div>
//           <p className="text-xs text-gray-500">So fast! So light!</p>
//           <p className="text-gray-600 text-sm mt-1">
//             The heavier the site page, the slower the load. For optimal performance, try to keep page size below 3MB.
//           </p>
//         </div>

//         {/* Page Requests */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Requests</h3>
//           <div className="text-2xl font-bold text-red-500 mt-2">{pageRequests}</div>
//           <p className="text-xs text-gray-500">Now that's a lot of requests.</p>
//           <p className="text-gray-600 text-sm mt-1">
//             The more HTTP requests your website makes, the slower it becomes. Try reducing the number of files your site loads.
//           </p>
//         </div>

//         {/* Page Speed */}
//         <div className="bg-white p-4 rounded-lg shadow text-center">
//           <h3 className="text-gray-700 font-semibold">Page Speed</h3>
//           <div className="text-2xl font-bold text-red-500 mt-2">{pageSpeed} SEC</div>
//           <p className="text-xs text-gray-500">We need to talk.</p>
//           <p className="text-gray-600 text-sm mt-1">
//             Best-in-class webpages should become interactive within 5.3 seconds. Any slower and visitors will abandon your site, reducing conversions and sales.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Define PropTypes to enforce the expected types for each prop
// PerformanceCard.propTypes = {
//   imageUrl: PropTypes.string, // imageUrl should be a string
//   pageSize: PropTypes.number.isRequired, // pageSize should be a number and is required
//   pageRequests: PropTypes.number.isRequired, // pageRequests should be a number and is required
//   pageSpeed: PropTypes.number.isRequired, // pageSpeed should be a number and is required
//   performanceScore: PropTypes.number.isRequired, // performanceScore should be a number and is required
// };

// // Define default values for the props
// PerformanceCard.defaultProps = {
//   imageUrl: 'https://via.placeholder.com/150', // Default image if none is provided
//   pageSize: 0, // Default value for page size
//   pageRequests: 0, // Default value for page requests
//   pageSpeed: 0, // Default value for page speed
//   performanceScore: 0, // Default value for performance score
// };

// export default PerformanceCard;
