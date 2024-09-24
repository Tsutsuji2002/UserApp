import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';
import AppNavigator from './navigation/AppNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4A90E2',
    accent: '#F2C94C',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#333333',
  },
};

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;