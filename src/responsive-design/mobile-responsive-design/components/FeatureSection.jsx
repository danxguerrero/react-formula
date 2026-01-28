import features from '../data/features'
import {FeatureItem} from './FeatureItem'

export const FeatureSection = () => {

    const featureItems = features.map((feature, idx) => <FeatureItem feature={feature} key={idx} />)
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-6xl flex flex-col text-violet-800 justify-center items-center">
                <div className="text-3xl mb-8 px-2 text-center font-ubuntu">Proudly Disappointing Users, since 2016</div>
                <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
                    {featureItems}
                </div>
            </div>
        </div>
    )
}