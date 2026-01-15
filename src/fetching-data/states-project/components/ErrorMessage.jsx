export const ErrorMessage = ({error}) => {
    return (
        <div className="flex items-center">
            <i class="fa-solid fa-triangle-exclamation text-3xl text-yellow-500 m-3"></i>
            <div className="text-slate-600">{error}</div>
        </div>)
}