import React from 'react';
import FormattedTitle from './FormattedTitle';
import FormattedTime from './FormattedTime';

const EarthquakeItem = ({ quake }) => {
  const { locality, magnitude, time, depth } = quake.properties;

  return (
    <li className="bg-background shadow-lg mt-5 rounded-lg p-6 mb-6 mx-auto w-full max-w-md border border-gray-300 hover:shadow-2xl">
      <div className="grid grid-cols-1 gap-4 text-darkGray text-center">
        <div className="col-span-1">
          <FormattedTitle locality={locality} magnitude={magnitude} />
        </div>
        <div className="col-span-1">
          <p className="text-sm text-textGray">
            <span className="font-semibold">Time:</span> <FormattedTime timeString={time} />
          </p>
        </div>
        <div className="col-span-1">
          <p className="text-sm text-textGray">
            <span className="font-semibold">Depth:</span> {depth.toFixed(1)} km
          </p>
        </div>
        <div className="col-span-1">
          <p className="text-sm text-textGray">
            <span className="font-semibold">Location:</span> {locality}
          </p>
        </div>
      </div>
    </li>
  );
};

export default EarthquakeItem;
