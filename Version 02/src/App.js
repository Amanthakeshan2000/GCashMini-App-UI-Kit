import React from "react";
import WalletPage from "./components/WalletPage";
import MyWallet from "./components/MyWallet";
import PaymentSuccess from "./components/PaymentSuccess";
import Payment from "./components/Payment";
import NoticePage from "./components/NoticePage";
import CustomerServiceScreen from "./components/CustomerServiceScreen";
import MaintenancePage from "./components/MaintenancePage";
import UserConceptPage from "./components/UserConceptPage";
import FAQScreen from "./components/FAQScreen";


const App = () => {
  return (
    <div className="font-sans">
      <WalletPage />
      <MyWallet />
      <PaymentSuccess />
      <Payment />
      <NoticePage />
      <CustomerServiceScreen /> 
      <MaintenancePage /> 
      <UserConceptPage /> 
      <FAQScreen /> 
    </div>
  );
};

export default App;
