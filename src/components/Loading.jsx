import React from 'react';
import loadingGif from './loading_portal.gif';

const LoadingComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default LoadingComponent;
