const _layoutRoutes = {
  index: {
    _layout: "index",
  },
  auth: {
    _layout: "(auth)",
    signIn: "(auth)/sign-in",
    signUp: "(auth)/sign-up/",
  },
  tabs: {
    _layout: "(tabs)",
    myWallet: "(tabs)/MyWallet",
    myTransactions: "(tabs)/MyTransactions",
  },
  termsOfService: "terms-of-service",
  privacyPolicy: "Privacy Policy",
};

export default _layoutRoutes;
