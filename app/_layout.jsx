import React from "react";
import { Stack } from "expo-router";

import GlobalProvider from "../context/GlobalProvider";
import _layoutRoutes from "./_layoutRoutes";

const RootLayout = () => {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen
          name={_layoutRoutes.index._layout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={_layoutRoutes.tabs._layout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={_layoutRoutes.auth._layout}
          options={{ headerShown: false }}
        />
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;
