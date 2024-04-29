import "@walletconnect/react-native-compat";
import { WagmiConfig } from "wagmi";
import { mainnet, polygon, arbitrum } from "viem/chains";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
  W3mButton,
} from "@web3modal/wagmi-react-native";
import { Text } from "react-native";
import { useAccount } from "wagmi";

// -------------TUTORIAL-------------
// https://docs.walletconnect.com/web3modal/react-native/about

// 1. npx expo install @web3modal/wagmi-react-native wagmi@1.4.13 viem@1.21.4
// 2. npx expo install @react-native-async-storage/async-storage react-native-get-random-values react-native-svg react-native-modal @react-native-community/netinfo @walletconnect/react-native-compat expo-application

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "bc9d141e092f94f9b6dea909a091a08c";

// 2. Create config
const metadata = {
  name: "Web3Modal RN",
  description: "Web3Modal RN Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [mainnet, polygon, arbitrum];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

const Demo = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  console.log(address);

  return <Text>lele</Text>;
};

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Text>Rest of your app...</Text>
      <W3mButton />
      <Web3Modal />
      <Demo />
    </WagmiConfig>
  );
}
