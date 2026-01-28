export const NavBar = () => {
    return (
        <nav className="flex justify-center py-2 px-4 bg-violet-50 shadow-md">
            <div className="w-full max-w-6xl text-violet-800 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="https://static-task-assets.react-formula.com/899963.png" className="h-24" />
                    <h1 className="text-4xl font-ubuntu m-3">hasher</h1>
                </div>
                <div className="text-xl font-medium hidden md:flex">
                    <button className="m-4">Home</button>
                    <button className="m-4">About</button>
                    <button className="m-4">Contact</button>
                    <button className="ml-8 text-red-600 text-2xll"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </nav>
    )
}