import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const TabLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="MyWallet"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MyTransactions"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#4450AB" style="light" />
    </>
  );
};

export default TabLayout;
