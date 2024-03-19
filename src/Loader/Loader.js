import React from 'react';

const Loader = ({ percents }) => {
  const loadingStyle = percents < 100 ? { width: `${percents}%` } : null;
  return (
    <div className="loader-box">
      <div className="loader-line" style={loadingStyle}></div>
    </div>
  );
};

export default Loader;
