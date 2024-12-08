/* eslint-disable react/prop-types */
import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd", 
}) {
   
    const id = useId();
    
    return ( 
        <div className="inputbox_container">
            <label className="label" htmlFor={id}>{label}</label>
            <div className="inputs_wrapper">
                <input type="number" name="" id={id}  value={amount} onInput={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}/>
                <select className="dropdown" name="" id="" value={selectedCurrency} onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}>
                    {
                        currencyOptions.map((currency)=>(
                            <option key={currency}>{currency}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;