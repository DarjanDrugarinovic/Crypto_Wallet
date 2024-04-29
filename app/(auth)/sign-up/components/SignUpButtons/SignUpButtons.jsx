import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Web3Modal } from "@web3modal/wagmi-react-native";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";
import { useAccount } from "wagmi";
import { Text, FlatList, Image } from "react-native";

import { images } from "../../../../../constants";
import { useGlobalContext } from "../../../../../context/GlobalProvider";

const options = {
  coinbaseWallet: {
    id: 1,
    name: "Coinbase Wallet",
    image: images.coinbaseWallet,
  },
  metaMask: {
    id: 2,
    name: "MetaMask",
    image: images.metaMask,
  },
  walletConnect: {
    id: 3,
    name: "WalletConnect",
    image: images.walletConnect,
  },
};

const SignUpButtons = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { setWalletAddress } = useGlobalContext();
  const { open, close } = useWeb3Modal();

  useEffect(() => {
    if (address) {
      setWalletAddress(address);
    }
  }, [address]);

  return (
    <>
      <SignUpFlatList
        data={Object.values(options)}
        keyExtractor={(option) => option.id}
        renderItem={({ item: { id, name, image } }) => {
          return (
            <SignUpTouchableOpacity onPress={() => open()} activeOpacity={0.7}>
              <Image source={image} resizeMode="contain" alt={name} />
              <Text>{name}</Text>
            </SignUpTouchableOpacity>
          );
        }}
        contentContainerStyle={{ gap: 12 }}
      />
      <Web3Modal />
    </>
  );
};

export default SignUpButtons;

const SignUpFlatList = styled.FlatList`
  flex-grow: 0;
  margin-bottom: 24px;
`;

const SignUpTouchableOpacity = styled.TouchableOpacity`
  border: 1px solid #d9d9d9;
  height: 62px;
  padding: 13px 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;
  border-radius: 10px;
`;
