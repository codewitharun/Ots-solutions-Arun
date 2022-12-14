import React, { useState } from "react";
import { Dropdown, Icon, Input } from "semantic-ui-react";
import CurrencyComponentContainer from "./CurrencyComponentContainer";
import CurrencySelectorContext from "../contexts/CurrencySelectorContext";
import AmountEnteredContext from "../contexts/AmountEnteredContext";
import PaymentModeSelectorContext from "../contexts/PaymentModeSelectorContext";
import ReactFragmentsComponent from "./ReactFragmentsComponent";

function App() {
  const [currency, setCurrency] = useState("rupee");
  const [amount, setAmount] = useState(0);
  const [paymentMode, setPaymentMode] = useState("Cash");
  console.log(paymentMode);
  const arrayOfStudents = ["Akshay", "Saurabh", "Chetan", "Kaustubh", "Akshay"];
  const options = [
    { key: "1", text: "Cash", value: "Cash" },
    { key: "2", text: "Debit/Credit card", value: "Debit/Credit card" },
    { key: "3", text: "Upi", value: "Upi" },
    { key: "4", text: "Gpay", value: "Gpay" },
    { key: "5", text: "Bitcoin", value: "Bitcoin" },
  ];

  return (
    <div className="ui container">
      <div>
        Select Currency:
        <br />
        <br />
        <Icon
          style={currency === "rupee" ? { color: "red" } : { color: "black" }}
          name="rupee sign"
          onClick={() => setCurrency("rupee")}
        />
        <Icon
          style={currency === "dollar" ? { color: "red" } : { color: "black" }}
          name="dollar sign"
          onClick={() => setCurrency("dollar")}
        />
        <Icon
          style={currency === "euro" ? { color: "red" } : { color: "black" }}
          name="euro sign"
          onClick={() => setCurrency("euro")}
        />
        <Icon
          style={currency === "pound" ? { color: "red" } : { color: "black" }}
          name="pound sign"
          onClick={() => setCurrency("pound")}
        />
        <Icon
          style={currency === "ruble" ? { color: "red" } : { color: "black" }}
          name="ruble sign"
          onClick={() => setCurrency("ruble")}
        />
        <Icon
          style={currency === "yen" ? { color: "red" } : { color: "black" }}
          name="yen sign"
          onClick={() => setCurrency("yen")}
        />
        <br />
        <br />
        Select Amount:
        <br />
        <br />
        <Input
          placeholder="Enter Amount..."
          onChange={(event) => setAmount(event.target.value)}
        />
        <br />
        <br />
        <Dropdown
          placeholder="Payment Mode"
          // selection
          options={options}
          onChange={(e, data) => {
            let drop = data.value;
            setPaymentMode(drop);
          }}
        />
        {/* Payment Mode : {paymentMode} */}
        {/* <Menu compact>
          <Dropdown text="Dropdown" options={options} simple item />
        </Menu> */}
        <br />
        <br />
        <PaymentModeSelectorContext.Provider value={paymentMode}>
          <AmountEnteredContext.Provider value={amount}>
            <CurrencySelectorContext.Provider value={currency}>
              <CurrencyComponentContainer />
            </CurrencySelectorContext.Provider>
          </AmountEnteredContext.Provider>
        </PaymentModeSelectorContext.Provider>
        <br />
        <br />
        {arrayOfStudents.map((student, index) => {
          return (
            <React.Fragment key={index}>
              <ReactFragmentsComponent />
              <span>{index}</span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default App;

/*

State
On the basis of state, we will add the styling



Context System -

Provider -> Which will provide/update the state value
Consumer -> Which will consume/use the state value

*/
