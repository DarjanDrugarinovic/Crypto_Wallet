import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import "react-native-url-polyfill/auto";

import { useAppFonts } from "../constants/fonts";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const useAppConfig = () => {
  const [fontsLoaded, error] = useAppFonts();

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  return { loaded: fontsLoaded };
};

export default useAppConfig;
