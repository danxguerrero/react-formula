export const HeroSection = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-6xl border border-red-500 flex flex-col-reverse md:flex-row items-center justify-center py-32 p-4">
                <div className="text-violet-800 text-4xl md:text-5xl font-ubuntu font-medium max-w-[450px]">
                    <div>Something <span className="text-yellow-500">Catchy</span> and <span className="text-red-600">Technological</span></div>
                    <button className="border-4 border-violet-800 text-xl font-medium px-10 py-3 mt-4">Learn More</button>
                </div>
                <img
                    src="https://static-task-assets.react-formula.com/963190.png"
                    className="md:w-[450px] my-16"
                />
            </div>
        </div>
    )
}