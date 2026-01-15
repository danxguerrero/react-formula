export const PageButton = ({ onClick, pageNum }) => {
    console.log()
    return (
        <button className="m-1 bg-gray-400 p-2 text-white active:bg-gray-500" onClick={onClick}>{pageNum + 1}</button>
    )
}