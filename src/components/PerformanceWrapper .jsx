// import React, { useEffect, useState } from 'react';
// import PerformanceCard from './PerformanceCard';

// const PerformanceWrapper = () => {
  
//   const [data, setData] = useState({
//     pageSize: 0,
//     pageRequests: 0,
//     pageSpeed: 0,
//     performanceScore: 0,
//     imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.CiEuf1HX22kZ-EC5CVi6vgHaEG&pid=Api&P=0&h=180', // Add image URL here
//   });

//   // Mock fetch function to simulate API call
//   const fetchPerformanceData = async () => {
//     // Simulate backend response
//     const response = {
//       pageSize: 2.3,
//       pageRequests: 119,
//       pageSpeed: 9.4,
//       performanceScore: 15,
//       imageUrl: 'https://example.com/performance-image.png', // Replace with your actual image URL
//     };

//     // Mimic async behavior
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     setData(response);
//   };

//   useEffect(() => {
//     fetchPerformanceData();
//   }, []); 

//   return (
//     <PerformanceCard
//       imageUrl={data.imageUrl}
//       pageSize={data.pageSize}
//       pageRequests={data.pageRequests}
//       pageSpeed={data.pageSpeed}
//       performanceScore={data.performanceScore}
//     />
//   );
// };

// export default PerformanceWrapper;




// import React, { useContext } from 'react';
// import PerformanceCard from './PerformanceCard';
// import { PageSpeedContext } from '../Context/context'; // Adjust the import path as needed

// const PerformanceWrapper = () => {
//   const { data, loading, error } = useContext(PageSpeedContext);
//   console.log(useContext(PageSpeedContext));
  

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <PerformanceCard
//       imageUrl={data.imageUrl}
//       pageSize={data.pageSize}
//       pageRequests={data.pageRequests}
//       pageSpeed={data.pageSpeed}
//       performanceScore={data.performanceScore}
//     />
//   );
// };

// export default PerformanceWrapper;

// import  {React , useContext } from 'react';
// import PerformanceCard from './PerformanceCard';
// import { PageSpeedContext } from '../Context/context';

// const PerformanceWrapper = () => {
//   const { data, loading, error } = useContext(PageSpeedContext);

//   console.log("Context data:", data);
//   console.log("Loading status:", loading);
//   console.log("Error status:", error);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <PerformanceCard
//       imageUrl={data.imageUrl}
//       pageSize={data.pageSize}
//       pageRequests={data.pageRequests}
//       pageSpeed={data.pageSpeed}
//       performanceScore={data.performanceScore}
//     />
//   );
// };

// export default PerformanceWrapper;




//  Old 19/11/24
// import  {React , useContext } from 'react';
// import PerformanceCard from './PerformanceCard';
// import { PageSpeedContext } from '../Context/context';
// const PerformanceWrapper = () => {
//   const { data, loading, error } = useContext(PageSpeedContext);
//   console.log("Context data in PerformanceWrapper:", data);
//   console.log("Loading status:", loading);
//   console.log("Error status:", error);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <PerformanceCard
//       imageUrl={data.imageUrl}
//       pageSize={data.pageSize}
//       pageRequests={data.pageRequests}
//       pageSpeed={data.pageSpeed}
//       performanceScore={data.performanceScore}
//     />
//   );
// };

// export default PerformanceWrapper;





//  Update 19/11/24 ✈️✈️ 
// import React, { useContext } from "react";
// import PerformanceCard from "./PerformanceCard";
// import { PageSpeedContext } from "../Context/context";

// const PerformanceWrapper = () => {
//   const { data, loading, error } = useContext(PageSpeedContext);

//   console.log("Context data in PerformanceWrapper:", data); // Debug log
//   console.log("Loading status:", loading); // Debug log
//   console.log("Error status:", error); // Debug log

//   if (loading) return <div>Loading...</div>;
//   if (error)
//     return (
//       <div className="text-red-500">
//         Error: {error.message || "Failed to fetch data. Please try again later."}
//       </div>
//     );

//   // Added fallback defaults for props in case `data` is incomplete
//   return (
//     <PerformanceCard
//       imageUrl={data?.imageUrl || "default_image_url_here"}
//       pageSize={data?.pageSize || "0"}
//       pageRequests={data?.pageRequests || 0}
//       pageSpeed={data?.pageSpeed || "0"}
//       performanceScore={data?.performanceScore || 0}
//     />
//   );
// };

// export default PerformanceWrapper;


// Update 19/11/24 (2)
// components/PerformanceWrapper.js
import React, { useContext } from "react";
import PerformanceCard from "./PerformanceCard";
import { PageSpeedContext } from "../Context/context";

const PerformanceWrapper = () => {
  const { data, loading, error } = useContext(PageSpeedContext);
  console.log("Context data in Wrapper:", { data, loading, error });

  console.log("PerformanceWrapper component is rendering");

  // console.log("Context data in PerformanceWrapper:", data);  // Debugging

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No performance data available.</div>;

  // Ensure we're passing the correct data to PerformanceCard
  console.log("Data passed to PerformanceCard:", {
    imageUrl: data.imageUrl,
    pageSize: data.pageSize,
    pageRequests: data.pageRequests,
    pageSpeed: data.pageSpeed,
    performanceScore: data.performanceScore,
  });

  return (
    <PerformanceCard
      imageUrl={data.imageUrl}
      pageSize={data.pageSize}
      pageRequests={data.pageRequests}
      pageSpeed={data.pageSpeed}
      performanceScore={data.performanceScore}
    />
  );
};

export default PerformanceWrapper;
