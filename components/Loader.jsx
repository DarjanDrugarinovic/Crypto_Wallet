import { View, ActivityIndicator, Platform } from "react-native";

export const Loader = () => {
  const osName = Platform.OS;

  return (
    <View>
      <ActivityIndicator color="#fff" size={osName === "ios" ? "large" : 50} />
    </View>
  );
};

export default Loader;
