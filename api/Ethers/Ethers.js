import "react-native-get-random-values";
import "@ethersproject/shims";
import { ethers } from "ethers";

const apiKey = "DZE7MU6K1Z2M8GW4HJ7K4RHCKE9ASIJEPB";

const provider = new ethers.providers.EtherscanProvider(undefined, apiKey);

export const transactionStatus = {
  successful: "successful",
  pending: "pending",
  rejected: "rejected",
};

const randomTransactionStatus = () => {
  const statuses = Object.values(transactionStatus);

  return statuses[Math.floor(Math.random() * 10) % statuses.length];
};

export const getTransactionHistory = async (address) => {
  // `{
  //   "accessList": null,
  //   "blockHash": "0x425eca9e711eb10d9f717eec6916cf6e1e365b034120c893eefbe477854cba73",
  //   "blockNumber": 19631545,
  //   "chainId": 0,
  //   "confirmations": 131618,
  //   "creates": null,
  //   "data": "0x",
  //   "from": "0xB6bAfDcfca211cCAcf4B2D7d0Df63Ee268ea1c2d",
  //   "gasLimit": {"hex": "0x5208", "type": "BigNumber"},
  //   "gasPrice": {"hex": "0x0460098170", "type": "BigNumber"},
  //   "hash": "0x551ad34bf8f355854593fdd95da00190f502cf0ff6a356f4b7f67a0894704fb5",
  //   "nonce": 36,
  //   "timestamp": 1712828387,
  //   "to": "0x663eE3060D4ccddf734d90CB00cDC0C955750a5C",
  //   "transactionIndex": 109,
  //   "type": 0,
  //   "value":
  //   {"hex": "0x071afd498d0000", "type": "BigNumber"}
  // }`;

  const transactions = await provider.getHistory(address);
  const etherPriceInUSD = await provider.getEtherPrice();

  return transactions.map(({ timestamp, value }) => ({
    timestamp,
    value: ethers.utils.formatEther(value._hex),
    status: randomTransactionStatus(),
    usd: ethers.utils.formatEther(value._hex) * etherPriceInUSD,
    currency: "ETH",
  }));
};

export const getBalance = async (address) => {
  const balance = await provider.getBalance(address);
  const balanceInEther = ethers.utils.formatEther(balance);
  const etherPriceInUSD = await provider.getEtherPrice();
  return balanceInEther * etherPriceInUSD;
};
