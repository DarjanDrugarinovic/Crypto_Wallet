import React, { createContext, useContext, useState } from "react";

const testAddress = "0xB6bAfDcfca211cCAcf4B2D7d0Df63Ee268ea1c2d";

const GlobalProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  const setTestWalletAddress = (address) => {
    if (address) {
      setWalletAddress(testAddress);
    } else {
      setWalletAddress(null);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        walletAddress,
        setWalletAddress: setTestWalletAddress,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;

function globalProviderProps({ walletAddress, setWalletAddress }) {
  return {
    walletAddress,
    setWalletAddress,
  };
}

const GlobalContext = createContext();
export const useGlobalContext = () =>
  globalProviderProps(useContext(GlobalContext));
