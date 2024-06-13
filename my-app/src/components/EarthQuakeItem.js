import React from 'react';
import FormattedTitle from './FormattedTitle';
import FormattedTime from './FormattedTime';

const EarthquakeItem = ({ quake }) => {
  const { locality, magnitude, time, depth } = quake.properties;

  return (
    <li className="bg-background shadow-lg rounded-lg p-6 mb-6 mx-auto w-full max-w-md border border-gray-300 hover:shadow-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 text-center text-darkGray">
          <FormattedTitle locality={locality} magnitude={magnitude} />
        </div>
        <div>
          <p className="text-sm text-textGray">
            <span className="font-semibold">Time:</span> <FormattedTime timeString={time} />
          </p>
        </div>
        <div>
          <p className="text-sm text-textGray">
            <span className="font-semibold">Magnitude:</span> {magnitude}
          </p>
        </div>
        <div>
          <p className="text-sm text-textGray">
            <span className="font-semibold">Depth:</span> {depth} km
          </p>
        </div>
        <div>
          <p className="text-sm text-textGray">
            <span className="font-semibold">Location:</span> {locality}
          </p>
        </div>
      </div>
    </li>
  );
};

export default EarthquakeItem;
