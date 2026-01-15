import clsx from 'clsx'

export const PageButton = ({pageNum, onClick, startIndex}) => {
    return (
        <button className={clsx('px-2 m-1 rounded-sm bg-stone-300 text-stone-600', pageNum == startIndex + 1 && 'bg-rose-300 text-red-500 border border-rose-500')} onClick={onClick}>{pageNum}</button>
    )
}