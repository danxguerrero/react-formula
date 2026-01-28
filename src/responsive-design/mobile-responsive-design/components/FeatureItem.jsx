export const FeatureItem = ({feature}) => {
    return (
        <div className="m-8 p-5 max-w-[300px]">
            <img src={feature.image} className="w-32"/>
            <div className="text-2xl font-ubuntu mt-4 mb-2">{feature.title}</div>
            <div className="text-zinc-500">{feature.description}</div>
        </div>
    )
}