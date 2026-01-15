import { useState, useEffect } from 'react'

import { StockItem } from './components/StockItem.jsx'

export const StocksProject = () => {
    const [stocks, setStocks] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchStocks = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://api.react-formula.com/learning-api/demos/stocks-project/stocks')

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const stocksData = await response.json()

            setStocks(stocksData)

        } catch (err) {
            console.error('There was an error fetching stocks: ', err)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {
        fetchStocks()
    }, [])

    const stockItems = stocks.map((stock, idx) => <StockItem key={idx} stock={stock} />)

    return <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50">{isLoading ? <i className="fa-solid fa-spinner text-2xl text-teal-500 animate-spin"></i> :stockItems}</div>
}