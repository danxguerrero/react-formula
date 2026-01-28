import { useState } from 'react'

export const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMunuOpen] = useState(false);
    return (
        <>
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
                    <button
                        className="md:hidden flex text-4xl"
                        onClick={() => setIsMobileMunuOpen(true)}
                    >
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>
            {isMobileMenuOpen && <div className="fixed top-0 right-0 flex flex-col bg-violet-900 pt-12 pb-4 rounded-bl-lg">
                <button className="text-2xl text-violet-200 pl-4 pr-20 py-4 flex">Home</button>
                <button className="text-2xl text-violet-200 pl-4 pr-20 py-4 flex">About</button>
                <button className="text-2xl text-violet-200 pl-4 pr-20 py-4 flex">Contact</button>
                <button onClick={() => setIsMobileMunuOpen(false)}>
                    <i class="fa-solid fa-circle-xmark text-violet-400 fixed top-0 right-0 p-2 text-4xl"></i>
                </button>
            </div>}
        </>
    )
}