import React from 'react';

const FormattedTime = ({ timeString }) => {
  const formatTime = (timeString) => {
    const date = new Date(timeString);
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedTime = date.toLocaleTimeString([], timeOptions);
    const formattedDate = date.toLocaleDateString([], dateOptions);
    return `${formattedTime}, ${formattedDate}`;
  };

  return <span>{formatTime(timeString)}</span>;
};

export default FormattedTime;
