import { useEffect,useState } from 'react'
import Currencyrow from './currencyrow'

const Base_url = "https://v6.exchangerate-api.com/v6/6c9dfe7a02a552d1713bfa29/latest/"

function Currency() {
    const [LoadingData, setLoadingData] = useState(true)
    const [LoadingDataError, setLoadingDataError] = useState(false)
    const [CurrencyOptions, setCurrencyOptins] = useState([])
    const [ToCurrency, setToCurrency] = useState()
    const [FromCurrency, setFromCurrency] = useState()
    const [ExchangeRate, setExchangeRate] = useState(1)
    const [Amount , setAmount] = useState(1)
    const [AmountInFRomCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount, fromAmount
    if (AmountInFRomCurrency){
        fromAmount = Amount
        toAmount = Amount * ExchangeRate
    }
    else{
        toAmount = Amount
        fromAmount = Amount / ExchangeRate
    }

    useEffect(() =>{
        setTimeout(() => {
        fetch(Base_url + "EUR")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const options_obj = {...data.conversion_rates}
            options_obj[data.base_code] = 1
            setCurrencyOptins(options_obj)
            setFromCurrency(data.base_Code)
            setToCurrency('RWF')
            setExchangeRate(data.conversion_rates['RWF'])
            setLoadingData(false)
        })
        .catch(()=>{
            setLoadingDataError(true)
        })
        },500); 
    },[])

    const handleFromAmount = (e) =>{
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    } 
    const handleToAmount = (e) =>{
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

    const handleToCurrency = (e) => {
        setToCurrency(e.target.value)
        setExchangeRate(CurrencyOptions[e.target.value])
    }

    const handleFromcurrency = async (e) =>{
        setLoadingData(true)
        try{
            setFromCurrency(e.target.value)
            const response = await fetch(Base_url + e.target.value)
            const data = await response.json()
            console.log(data)
            const options_obj = {...data.conversion_rates}
            options_obj[data.base_code] = 1
            setCurrencyOptins(options_obj)
            setExchangeRate(data.conversion_rates[ToCurrency])
            setLoadingData(false)
        }
        catch (e) {
            setLoadingDataError(true)
          }
    }

    return (
        <>
        { LoadingData ?
        <div id="load">
            {LoadingDataError ?
            <div className="text-center">
                <h4 className="mb-3">Something went wrong</h4>
                <a href="/" className="btn btn-dark">TRY AGAIN</a>
            </div> :
            <div id="load_circle" class="spinner-border text-info" role="status">
                <span class="sr-only"></span>
            </div>
            }
        </div> :
        <div className="container main-div curreny-data my-5">
            <div className="d-flex align-items-center justify-content-center">
                <div className="currency_conversion my-5 text-center">
                    <h2 className="">CONVERT</h2>
                    <div className="data">
                        <Currencyrow SelectedCurrrency={FromCurrency} CurrencyOptions={Object.keys(CurrencyOptions)}
                        OnchangeCurrency={handleFromcurrency} Amount={fromAmount} OnchangeValue={handleFromAmount}/>
                        <Currencyrow SelectedCurrrency={ToCurrency} CurrencyOptions={Object.keys(CurrencyOptions)}
                        OnchangeCurrency={handleToCurrency} Amount={toAmount} OnchangeValue={handleToAmount}/>
                    </div>
                </div>
            </div>   
        </div>
    }
        </>
    )
}

export default Currency