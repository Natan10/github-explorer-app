import React from 'react';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'; 


import { Routes } from './src/routes';

import theme from './src/global/styles/theme';

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontLoaded){
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}
