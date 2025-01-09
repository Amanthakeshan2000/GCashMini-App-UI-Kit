import React from "react";
import WalletPage from "./components/WalletPage";
import MyWallet from "./components/MyWallet";
import PaymentSuccess from "./components/PaymentSuccess";
import Loading from "./components/Loading";

const App = () => {
  return (
    <div className="font-sans">
      <Loading />
      <WalletPage />
      <MyWallet />
      <PaymentSuccess />
    </div>
  );
};

export default App;
