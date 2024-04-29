import { StyleSheet, Text, View, Pressable } from "react-native";
import { registerRootComponent } from "expo";

import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";

// -------------TUTORIAL-------------
// https://docs.walletconnect.com/advanced/walletconnectmodal/about?platform=react-native

// 1. npx expo install @walletconnect/modal-react-native
// 2. npx expo install @react-native-async-storage/async-storage react-native-get-random-values react-native-modal react-native-svg @react-native-community/netinfo @walletconnect/react-native-compat

// TODO: Insert the ProjectID
const projectId = "bc9d141e092f94f9b6dea909a091a08c";

const providerMetadata = {
  name: "YOUR_PROJECT_NAME",
  description: "YOUR_PROJECT_DESCRIPTION",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

export default function App() {
  // Add in the useWalletConnectModal hook + props
  const { open, isConnected, address, provider } = useWalletConnectModal();

  // Function to handle the
  const handleButtonPress = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  };

  // Main UI Render
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WalletConnect Modal RN Tutorial</Text>
      <Text>{isConnected ? address : "Status: Not Connected"}</Text>
      <Pressable onPress={handleButtonPress} style={styles.pressableMargin}>
        <Text>{isConnected ? "Disconnect" : "Connect"}</Text>
      </Pressable>

      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  pressableMargin: {
    marginTop: 16,
  },
});

registerRootComponent(App);
