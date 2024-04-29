import { Dimensions } from "react-native";

const useScreenSize = () => {
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;

  return { width, height };
};

export default useScreenSize;
