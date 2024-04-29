import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Profile from "./components/Profile";
import CryptoWallet from "./components/CryptoWallet/CryptoWallet";
import Balance from "./components/Balance";
import WagmiSignOut from "../../../components/WagmiSignOut";

const MyWallet = () => {
  return (
    <MyWalletSafeAreaView>
      <Profile />
      <Balance />
      <CryptoWallet />
      <WagmiSignOut />
    </MyWalletSafeAreaView>
  );
};

export default MyWallet;

const MyWalletSafeAreaView = styled(SafeAreaView)`
  height: 100%;
  background-color: #4450ab;
`;
