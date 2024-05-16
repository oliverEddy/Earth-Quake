import React from 'react';
import FormattedTitle from './FormattedTitle';

const EarthquakeItem = ({ quake }) => {
  const { locality, magnitude, time, depth } = quake.properties;

  return (
    <li className="bg-white shadow rounded-lg p-4 mb-4 mx-auto w-full max-w-md">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 text-center">
          <FormattedTitle locality={locality} magnitude={magnitude} />
        </div>
        <div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Time:</span> {new Date(time).toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Magnitude:</span> {magnitude.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Depth:</span> {depth} km
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Location:</span> {locality}
          </p>
        </div>
      </div>
    </li>
  );
};

export default EarthquakeItem;
