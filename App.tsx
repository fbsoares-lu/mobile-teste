import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import themes from './src/styles/themes';
import { SignUp } from './src/screens/Signup';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_600SemiBold, 
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={themes}>
      <SignUp />
    </ThemeProvider>
  );
}
