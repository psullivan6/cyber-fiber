import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export function usePage() {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error('usePage must be used within a PageProvider');
  }

  return context;
}

export function PageProvider(props) {
  const [debugData, setDebugData] = useState({});

  const value = {
    debugData,
    setDebugData
  };

  return <PageContext.Provider value={value} {...props} />;
}

export default {
  PageProvider,
  usePage
};
