import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../../context/GlobalProvider";
import _layoutRoutes from "../_layoutRoutes";

const AuthLayout = () => {
  const { walletAddress } = useGlobalContext();

  if (walletAddress) {
    return <Redirect href={_layoutRoutes.tabs.myWallet} />;
  }

  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
