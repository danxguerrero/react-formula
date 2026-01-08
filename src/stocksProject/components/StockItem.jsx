import clsx from 'clsx'

export const StockItem = ({stock}) => {

    const calculateStockChangePercentage = (originalPrice, currentPrice) => {
        if (originalPrice == 0) {
            return 0
        }

        const change = currentPrice - originalPrice
        const percentChange = (change / originalPrice) * 100

        return percentChange.toFixed(2)
    }

    const stockPercentChange = calculateStockChangePercentage(stock.previous_price, stock.current_price)

    return (
        <div className="border border-slate-300 m-3 flex justify-between w-[350px] p-3 bg-white">
            <div>
                <div className="text-slate-400">{stock.name}</div>
                <div className="text-blue-500 text-2xl">{stock.symbol}</div>
            </div>
            <div className="flex flex-col items-end">
                <div className={clsx("rounded-full px-2 text-xs", stockPercentChange >= 0 ? "bg-green-200 text-green-600" : "bg-red-200 text-red-600")}>{stockPercentChange}%</div>
                <div className="text-slate-700 text-2xl">${Math.trunc(stock.current_price) / 100}</div>
            </div>
        </div>
    )
}