// LoadMoreButton.js
import React from 'react';

const LoadMoreButton = ({ onClick, hasMore }) => {
  if (!hasMore) return null;

  return (
    <div className="flex justify-center mt-4">
      <button onClick={onClick} className="p-2 bg-blue-500 text-white rounded">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
