// -----------------ETHERS WITH REACT NATIVE-----------------
// https://docs.ethers.org/v5/cookbook/react-native/#cookbook-reactnative-shims

// npm i react-native-get-random-values
// "react-native-get-random-values": "~1.8.0",

// npm i @ethersproject/shims
// "@ethersproject/shims": "^5.7.0",

// npm i ethers
// "ethers": "^5.7.2",

import "react-native-get-random-values";
import "@ethersproject/shims";
import { ethers } from "ethers";
import { useEffect } from "react";
import { View, Text } from "react-native";

const apiKey = "DZE7MU6K1Z2M8GW4HJ7K4RHCKE9ASIJEPB";
const address = "0xB6bAfDcfca211cCAcf4B2D7d0Df63Ee268ea1c2d";

const provider = new ethers.providers.EtherscanProvider(undefined, apiKey);

export default function App() {
  useEffect(() => {
    async function getTransactionHistory(address) {
      const transactionHistory = await provider.getHistory(address);
      transactionHistory.forEach((tx) => {
        console.log(tx);
      });

      // console.info(transactionHistory);
    }

    getTransactionHistory(address);
  }, []);

  return (
    <View>
      <Text>Rest of your app...</Text>
    </View>
  );
}

// -----------------API ENDPOINTS-----------------
// https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-internal-transactions-by-address

// example: Get Ether Balance for a Single Address
// https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=YourApiKeyToken

// example: Get a list of 'Internal' Transactions by Address
// https://api.etherscan.io/api?module=account&action=txlistinternal&address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=YourApiKeyToken

// -----------------Creating an Account-----------------
// https://docs.etherscan.io/getting-started/creating-an-account

// -----------------Creating an Account-----------------
// https://docs.etherscan.io/getting-started/viewing-api-usage-statistics

// -----------------MY API KEY-----------------
// https://etherscan.io/myapikey
