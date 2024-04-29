import React, { useEffect } from "react";
import styled from "styled-components/native";
import { router } from "expo-router";
import { Web3Modal, useWeb3Modal } from "@web3modal/wagmi-react-native";
import { useAccount } from "wagmi";
import { useGlobalContext } from "../context/GlobalProvider";
import WagmiProvider from "./WagmiProvider";
import _layoutRoutes from "../app/_layoutRoutes";

const SignOut = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { setWalletAddress } = useGlobalContext();
  const { open, close } = useWeb3Modal();

  useEffect(() => {
    if (!address) {
      setWalletAddress(null);
      router.push(_layoutRoutes.auth.signUp);
    }
  }, [address]);

  const handlePress = () => {
    open();
  };

  return (
    <>
      <SignOutTouchableOpacity onPress={handlePress}>
        <SignOutText>Logout...</SignOutText>
      </SignOutTouchableOpacity>
      <Web3Modal />
    </>
  );
};

const WagmiSignOut = () => {
  return (
    <SignOutView>
      <WagmiProvider>
        <SignOut />
      </WagmiProvider>
    </SignOutView>
  );
};

export default WagmiSignOut;

const SignOutText = styled.Text`
  color: white;
`;

const SignOutView = styled.View`
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
`;

const SignOutTouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  background-color: #4450ab;
`;
