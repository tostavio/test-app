import React from 'react';
import { StatusBar } from 'react-native';
import { theme } from 'shared/theme';

const GenericStatusBar: React.FC = () => {
  return (
    <StatusBar
      barStyle="dark-content"
      backgroundColor={theme.palette.statusBar}
    />
  );
};

export default GenericStatusBar;
