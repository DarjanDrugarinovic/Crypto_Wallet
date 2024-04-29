import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { router } from "expo-router";
import { Image } from "react-native";

import { useGlobalContext } from "../../../../context/GlobalProvider";
import { FONTS, icons } from "../../../../constants";
import { getBalance } from "../../../../api/Ethers/Ethers";
import _layoutRoutes from "../../../_layoutRoutes";
import Loader from "../../../../components/Loader";

const formatBalance = (balance) =>
  balance.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

const Balance = () => {
  const { walletAddress } = useGlobalContext();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const getAccountBalance = async () => {
      const balance = await getBalance(walletAddress);
      setBalance(balance);
    };
    getAccountBalance();
  }, []);

  return (
    <BalanceTouchableOpacity
      onPress={() => router.push(_layoutRoutes.tabs.myTransactions)}
    >
      <CurrencyText>USD</CurrencyText>
      <BalanceText>{balance ? formatBalance(balance) : <Loader />}</BalanceText>
      <Image source={icons.arrowDown} resizeMode="contain" alt="showMore" />
    </BalanceTouchableOpacity>
  );
};

export default Balance;

const BalanceText = styled.Text`
  font-family: ${FONTS.InterSemiBold};
  font-size: 32px;
  letter-spacing: -0.5px;
  color: white;
`;

const CurrencyText = styled.Text`
  font-family: ${FONTS.InterRegular};
  font-size: 14px;
  letter-spacing: -0.5px;
  color: white;
`;

const BalanceTouchableOpacity = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 33px;
  padding-bottom: 46px;
  justify-content: center;
  text-align: center;
  gap: 7px;
`;
