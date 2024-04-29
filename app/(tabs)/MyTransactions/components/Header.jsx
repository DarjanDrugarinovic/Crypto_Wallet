import React from "react";
import { router } from "expo-router";
import styled from "styled-components/native";

import { FONTS, icons } from "../../../../constants";

const Header = () => {
  return (
    <HeaderView>
      <BackTouchableOpacity onPress={() => router.push(-1)}>
        <BackImage source={icons.arrowLeft} resizeMode="contain" alt="back" />
      </BackTouchableOpacity>
      <TransactionsText>Transactions</TransactionsText>
    </HeaderView>
  );
};
export default Header;

const BackTouchableOpacity = styled.TouchableOpacity`
  padding: 25px 20px;
`;

const TransactionsText = styled.Text`
  flex: 1;
  text-align: center;
  margin-right: 60px;
  color: white;

  font-family: ${FONTS.InterSemiBold};
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;

const HeaderView = styled.View`
  margin-bottom: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BackImage = styled.Image`
  width: 20px;
  height: 20px;
`;
