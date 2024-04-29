import { Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

import { FONTS } from "../../../../../../constants";

const formatValue = (value) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

const formatChange = (value) => {
  const sign = value > 0 && "+";
  const val = value.toFixed(2);
  return `${sign}${val}%`;
};

const formatAmout = (amount) =>
  amount.toFixed(Math.round(Math.random()) * 5 + 1);

const Card = ({
  data: {
    name,
    amount,
    price: { value, change },
    worth,
    icon,
  },
}) => {
  return (
    <CardView>
      <Image source={icon} resizeMode="contain" />
      <CurrencyView>
        <CurrencyInfoView>
          <CurrencyInfoText>{name}</CurrencyInfoText>
          <CurrencyInfoText>
            {formatAmout(amount)} {name}
          </CurrencyInfoText>
        </CurrencyInfoView>
        <CurrencyWorthView>
          <CurrencyValueText>{formatValue(value)}</CurrencyValueText>
          <CurrencyChangeText $value={change}>
            {formatChange(change)}
          </CurrencyChangeText>
          <CurrencyValueText>{formatValue(worth)}</CurrencyValueText>
        </CurrencyWorthView>
      </CurrencyView>
    </CardView>
  );
};

const CurrencyChangeText = styled.Text`
  color: ${({ $value }) => ($value > 0 ? "#18C573" : "red")};
  margin: 0px 6px;
  flex: 1;

  font-family: ${FONTS.InterMedium};
  font-size: 12px;
`;

const CurrencyValueText = styled.Text`
  font-family: ${FONTS.InterRegular};
  font-size: 14px;
  color: #727374;
`;

const CurrencyWorthView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CurrencyInfoText = styled.Text`
  font-family: ${FONTS.InterSemiBold};
  font-size: 14px;
`;

const CurrencyInfoView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CurrencyView = styled.View`
  display: flex;
  flex: 1;
`;

const CardView = styled.View`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 12px;
  gap: 12px;

  background: #ffffff;
  elevation: 2;
  border-radius: 12px;
`;

export default Card;
