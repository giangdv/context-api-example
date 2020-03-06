import React from 'react';
import Screen1 from './ui/Screen1';
import AppProvider from './contexts/providers/AppProvider';

const App = () => {
  return (
      <AppProvider>
        <Screen1 />
        <Screen2 />
      </AppProvider>
  );
};

export default App;
