import React from "react";
import styled from "styled-components/native";

import { transactionStatus } from "../../../../../../api/Ethers/Ethers";
import { FONTS, icons } from "../../../../../../constants";

const statusImages = {
  successful: icons.successful,
  pending: icons.pending,
  rejected: icons.rejected,
};

const statusColors = {
  successful: "#18C573",
  pending: "#F79713",
  rejected: "#F14A20",
};

const statusImage = (status) => {
  if (status === transactionStatus.successful) {
    return statusImages.successful;
  }

  if (status === transactionStatus.pending) {
    return statusImages.pending;
  }

  return statusImages.rejected;
};

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const formatDate = (date) => {
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleString("en-US", options);
};

const Transaction = ({ data: { timestamp, value, status, usd, currency } }) => {
  return (
    <TransactionView>
      <StatusImage source={statusImage(status)} alt="status" />
      <InfoView>
        <InfoHeaderView>
          <StatusText>{capitalizeFirstLetter(status)}</StatusText>
          <CurrencyText $status={status}>
            {value > 0 && "+"}
            {value}
            {currency}
          </CurrencyText>
        </InfoHeaderView>
        <InfoFooterView>
          <DateText>{formatDate(new Date(timestamp))}</DateText>
          <UsdText>{Math.round(usd)}$</UsdText>
        </InfoFooterView>
      </InfoView>
    </TransactionView>
  );
};

export default Transaction;

const UsdText = styled.Text`
  color: #727374;
  font-family: ${FONTS.InterRegular};
  font-size: 14px;
`;

const DateText = styled.Text`
  color: #727374;
  font-family: ${FONTS.InterRegular};
  font-size: 14px;
`;

const CurrencyText = styled.Text`
  font-family: ${FONTS.InterSemiBold};
  font-size: 14px;
  color: ${({ $status }) => statusColors[$status]};
`;

const StatusText = styled.Text`
  font-family: ${FONTS.InterSemiBold};
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 24px;
`;

const InfoFooterView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoHeaderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoView = styled.View`
  flex: 1;
`;

const TransactionView = styled.View`
  display: flex;
  flex-direction: row;
  elevation: 2;
  background: #ffffff;
  padding: 12px;
  gap: 12px;
`;

const StatusImage = styled.Image`
  width: 39px;
  height: 39px;
  border-radius: 19.5px;
  align-self: center;
`;
