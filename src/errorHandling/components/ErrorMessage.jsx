export const ErrorMessage = ({error}) => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-2xl">
                <i class="fa-solid fa-triangle-exclamation text-3xl text-yellow-500 m-3"></i> 
                {error}
            </div>
            <div>Try Refreshing?</div>
        </div>)
}