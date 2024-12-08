import { useState } from "react";
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  // const [amount, setAmount] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState("usd");
  const [currencyTo, setCurrencyTo] = useState("mad");
  const [amountFrom, setAmountFrom] = useState(0);
  const [amountTo, setAmountTo] = useState(0);
  const dataFrom = useCurrencyInfo(currencyFrom);
  const dataTo = useCurrencyInfo(currencyTo);
  const currencyOptions = Object.keys(dataFrom);

  const swap = ()=>{
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
  }

  return (
    <div className="container">
      <InputBox 
        label="From" 
        amount={amountFrom} 
        currencyOptions={currencyOptions} 
        onAmountChange={(amountFrom)=>{
          setAmountFrom(amountFrom);
          setAmountTo(amountFrom*dataFrom[currencyTo]);
        }} 
        onCurrencyChange={(currencyFrom)=>{
          setCurrencyFrom(currencyFrom);
          setAmountTo(amountFrom*dataFrom[currencyTo]);
        }} 
        selectedCurrency={currencyFrom}/>
      <button className="swap_btn" onClick={swap}>
        <img className="icon" src="/images/swap_icon.svg" alt="swap icon"/>
      </button>
      <InputBox 
        label="To" 
        amount={amountTo} 
        currencyOptions={currencyOptions} 
        onAmountChange={(amountTo)=>{
          setAmountTo(amountTo);
          setAmountFrom(amountTo*dataTo[currencyFrom]);
        }} 
        onCurrencyChange={(currencyTo)=>{
          setCurrencyTo(currencyTo);
          setAmountFrom(amountTo*dataTo[currencyFrom]);
        }} 
        selectedCurrency={currencyTo}/>
    </div>
  )
}

export default App
