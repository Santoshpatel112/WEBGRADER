import React, { useContext } from "react";
import PerformanceCard from "./PerformanceCard";
import { PageSpeedContext } from "../Context/context";

const PerformanceWrapper = () => {
  const { data, loading, error } = useContext(PageSpeedContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-gray-500 text-center p-4">
        No performance data available. Please enter a URL to analyze.
      </div>
    );
  }

  // Extract metrics from data
  const pageSize = data.metrics?.totalByteWeight || "0 MB";
  const pageRequests = data.metrics?.requests || 0;
  const pageSpeed = data.metrics?.timeToInteractive || "0s";

  return (
    <div className="p-4">
      <PerformanceCard
        imageUrl={data.imageUrl}
        pageSize={pageSize}
        pageRequests={pageRequests}
        pageSpeed={pageSpeed}
        performanceScore={data.performanceScore}
      />
      
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold">Detailed Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MetricItem
            label="First Contentful Paint"
            value={data.metrics.firstContentfulPaint}
          />
          <MetricItem
            label="Speed Index"
            value={data.metrics.speedIndex}
          />
          <MetricItem
            label="Largest Contentful Paint"
            value={data.metrics.largestContentfulPaint}
          />
          <MetricItem
            label="Time to Interactive"
            value={data.metrics.timeToInteractive}
          />
        </div>
      </div>
    </div>
  );
};

const MetricItem = ({ label, value }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="text-sm text-gray-600">{label}</div>
    <div className="text-lg font-semibold">{value}</div>
  </div>
);

export default PerformanceWrapper;
