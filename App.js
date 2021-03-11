import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import MainNavigation from './src/navigation/MainNavigation';


const getFonts = () => Font.loadAsync({
  'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  } else {
    return (
      <MainNavigation />
    )
  }
}


