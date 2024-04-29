import { useFonts } from "expo-font";

// GOOGLE FONTS
// https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap

export const FONTS = {
  PoppinsBlack: "Poppins-Black",
  InterRegular: "Inter-Regular",
  InterBold: "Inter-Bold",
  InterBlack: "Inter-Black",
  InterSemiBold: "Inter-SemiBold",
  InterMedium: "Inter-Medium",
};

export const useAppFonts = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
  });

  return [fontsLoaded, error];
};
