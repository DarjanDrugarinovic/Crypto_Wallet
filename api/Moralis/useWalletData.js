import axios from "axios";
import { icons } from "../../constants";

const currencyChains = {
  Ethereum: {
    name: "ETH",
    moralis: "0x1",
    coingecko: "ethereum1",
    icon: icons.eth,
  },
  BTC: {
    name: "BTC",
    moralis: "0x89",
    coingecko: "btc",
    icon: icons.btc,
  },
  USDT: {
    name: "USDT",
    moralis: "0xa86a",
    coingecko: "usdt",
    icon: icons.usdt,
  },
};

export const getChainBalancesInUsd = async (walletAddress) => {
  // const chains = Object.values(currencyChains);
  // const promises = chains.map((chain) => getChainBalanceInUsd(chain, walletAddress));
  // const data = await Promise.all(promises);

  return mockWalletData();
};

const getChainBalanceInUsd = async (chain, walletAddress) => {
  const balance = getChainBalance(chain.moralis, walletAddress);
  const price = getChainPriceInUsd(chain.coingecko);

  return balance * price;
};

const getChainBalance = async (chainId, walletAddress) => {
  // ---------------MORALIS WORKING------------
  const params = {
    address: walletAddress,
    chain: chainId,
    // toBlock: "myBlock",
  };
  const res = await axios.get(`http://192.168.0.85:3000/balance`, {
    params,
  });
  return (res.data.result.balance / 1e18).toFixed(2);
};

const getChainPriceInUsd = async (chainId) => {
  // --------------COINGECKO NOT WORKING - WRONG ID------------
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${chainId}&vs_currencies=usd`;
  return await axios.get(url);
};

// ------------------MOCK DATA------------------

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min + 1) + min;
};

const currency = (chain) => ({
  name: chain.name,
  amount: getRandomInt(1, 10),
  price: {
    value: getRandomInt(1, 100),
    change: getRandomInt(1, 5),
  },
  worth: getRandomInt(1, 1000),
  icon: chain.icon,
});

const mockWalletData = () => {
  return [
    currency(currencyChains.Ethereum),
    currency(currencyChains.BTC),
    currency(currencyChains.USDT),
    currency(currencyChains.Ethereum),
    currency(currencyChains.BTC),
  ];
};
