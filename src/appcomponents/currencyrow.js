function Currencyrow({CurrencyOptions ,
    SelectedCurrrency , OnchangeCurrency,
    Amount, OnchangeValue}) {

    return (
        <div className="first-input mt-5">
            <h6 className="d-block">value</h6>
            <input type="number" className="mx-4" value={Amount} onChange={OnchangeValue}/>
            <select value={SelectedCurrrency} onChange={OnchangeCurrency}>
                {CurrencyOptions.map((curreny_name, index) =>{
                    return(<option key={index} value={curreny_name}>{curreny_name}</option>)
                })}
            </select>
        </div>
    )
}

export default Currencyrow