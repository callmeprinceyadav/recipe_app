// src/components/LoadingSkeleton.js
import React from 'react';

function LoadingSkeleton() {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
    </div>
  );
}

export default LoadingSkeleton;
