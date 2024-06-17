import React from 'react';

const FormattedTitle = ({ locality, magnitude }) => {
  const formattedLocality = locality.split('of ')[1] || locality;
  const formattedMagnitude = magnitude.toFixed(2);

  return (
    <h2 className="text-xl font-bold text-gray-700">
      Magnitude {formattedMagnitude} at {formattedLocality}
    </h2>
  );
};

export default FormattedTitle;
