import { useState, useEffect } from "react"
import useInputState from "@/hooks/useInputState"

const CurrencyConverter = () => {
    
    console.log()
    const [from, setFrom] = useInputState('')
    const [to, setTo] = useInputState('')
    const [amount, setAmount] = useInputState('')
    const [isAmountValid, setIsAmountValid] = useState(false)
    const [result, setResult] = useState(0)

    useEffect(() => {
        if (amount !=='0' && /^\d+$/.test(amount)) {
            setIsAmountValid(true)
            return
        }
        setIsAmountValid(false)
    }, [amount])

    const convertCurrency = async () => {
        const staticData = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.NEXT_PUBLIC_API_KEY}&symbols=${to}`,
         {
            referrerPolicy: 'unsafe-url',
            method: 'GET'
         })
        let data = ""
        if (staticData) data = await staticData.json()
        setResult(data.rates[to] * amount)
    }

    return (
        <div className="bg-gradient-to-br from-[#01719C] to-[#009BD6] mt-28 py-9 px-10 rounded-3xl">
            <div className="flex flex-col text-white items-center space-y-12">
                <div className="font-bold text-3xl">
                    Currency Conversion
                </div>
                <div className="text-xl font-thin">
                    Convert any currency you wish using the form below:
                </div>
                <div className="space-x-9">
                    <input
                        value={amount}
                        onChange={setAmount}
                        className="py-2.5 px-7 w-64 rounded-3xl text-black"
                        placeholder="Amount"
                    />
                    <select
                        className="py-2.5 px-2 rounded-3xl text-black border-transparent border-r-8 w-48"
                        value={from}
                        onChange={setFrom}
                    >
                        <option value="" disabled selected>From</option>
                        <option value="EUR">EUR 🇪🇺</option>
                    </select>
                    <select
                        className="py-2.5 px-2 rounded-3xl text-black border-transparent border-r-8 w-48"
                        value={to}
                        onChange={setTo}
                    >
                        <option value="" disabled selected>To</option>
                        <option value="IDR">IDR 🇮🇩</option>
                        <option value="GBP">GBP 🇬🇧</option>
                        <option value="USD">USD 🇺🇸</option>
                        <option value="AUD">AUD 🇦🇺</option>
                        <option value="SGD">SGD 🇸🇬</option>
                        <option value="KRW">KRW 🇰🇷</option>
                        <option value="JPY">JPY 🇯🇵</option>
                        <option value="CNY">CNY 🇨🇳</option>
                        <option value="SAR">SAR 🇸🇦</option>
                    </select>
                    <button
                        disabled={!(from && to && amount && isAmountValid)}
                        onClick={convertCurrency}
                        className="text-xl bg-[#00415A] px-9 py-3 text-white w-fit rounded-3xl disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Convert
                    </button>
                </div>
                { result > 0 &&
                    <div className="text-xl">
                        Result: <span className="font-bold">{`${result} ${to}`}</span> 
                    </div>
                }
            </div>
        </div>
    )
}
export default CurrencyConverter