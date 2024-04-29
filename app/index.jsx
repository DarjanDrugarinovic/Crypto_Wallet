import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Loader } from "../components/Loader";
import useAppConfig from "../config/useAppConfig";
import _layoutRoutes from "./_layoutRoutes";

const App = () => {
  const { loaded } = useAppConfig();

  if (!loaded) {
    return (
      <SafeAreaView>
        <Loader />
      </SafeAreaView>
    );
  }

  return <Redirect href={_layoutRoutes.auth.signUp} />;
};

export default App;
