import React from "react";
import styled from "styled-components/native";

import { FONTS } from "../../../../../constants";
import Card from "./components/Card";
import { Loader } from "../../../../../components/Loader";
import ErrorDialog from "../../../../../components/ErrorDialog";
import { useFetchOnLoad } from "../../../../../api/useFetch";
import { getChainBalancesInUsd } from "../../../../../api/Moralis/useWalletData";
import { useGlobalContext } from "../../../../../context/GlobalProvider";

const CryptoWallet = () => {
  const { walletAddress } = useGlobalContext();
  const { data, error, isLoading } = useFetchOnLoad(() =>
    getChainBalancesInUsd(walletAddress)
  );

  if (error) {
    return <ErrorDialog error={error} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <CryptoWalletView>
      <CryptoWalletText>Crypto Wallet</CryptoWalletText>
      <CardsFlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return <Card data={item} />;
        }}
        contentContainerStyle={{ gap: 12 }}
      />
    </CryptoWalletView>
  );
};

export default CryptoWallet;

const CardsFlatList = styled.FlatList`
  gap: 12px;
`;

const CryptoWalletText = styled.Text`
  font-family: ${FONTS.InterSemiBold};
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 24px;

  margin-bottom: 20px;
`;

const CryptoWalletView = styled.View`
  background-color: #f8f9fd;
  flex: 1;
  border-radius: 30px 30px 0px 0px;
  padding: 24px;
`;
