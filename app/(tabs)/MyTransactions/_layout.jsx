import React from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./components/Header";
import Transactions from "./components/Transactions/Transactions";

const MyTransactions = () => {
  return (
    <MyTransactionsSafeAreaView>
      <Header />
      <Transactions />
    </MyTransactionsSafeAreaView>
  );
};

export default MyTransactions;

const MyTransactionsSafeAreaView = styled(SafeAreaView)`
  height: 100%;
  background-color: #4450ab;
  padding-top: 25px;
`;
