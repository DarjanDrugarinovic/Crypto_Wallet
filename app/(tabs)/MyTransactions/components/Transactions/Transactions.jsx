import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import Transaction from "./component/Transaction";
import ErrorDialog from "../../../../../components/ErrorDialog";
import Loader from "../../../../../components/Loader";
import { useGlobalContext } from "../../../../../context/GlobalProvider";
import { useFetchOnLoad } from "../../../../../api/useFetch";
import { getTransactionHistory } from "../../../../../api/Ethers/Ethers";

const Transactions = () => {
  const { walletAddress } = useGlobalContext();
  const { data, error, isLoading } = useFetchOnLoad(() =>
    getTransactionHistory(walletAddress)
  );
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (data) {
      setTransactions(data);
    }
  }, [data]);

  if (error) {
    return <ErrorDialog error={error} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <TransactionsView>
      <TransactionsFlatList
        data={transactions}
        keyExtractor={(transaction, index) => index}
        renderItem={({ item }) => {
          return <Transaction data={item} />;
        }}
        contentContainerStyle={{ gap: 12 }}
      />
    </TransactionsView>
  );
};

export default Transactions;

const TransactionsFlatList = styled.FlatList`
  flex-grow: 0;
  margin-bottom: 24px;
`;

const TransactionsView = styled.View`
  background-color: #f8f9fd;
  flex: 1;
  border-radius: 10px 10px 0px 0px;
  padding: 24px;
`;
