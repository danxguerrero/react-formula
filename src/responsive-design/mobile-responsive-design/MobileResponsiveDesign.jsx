import { HeroSection } from './components/HeroSection'
import { FeatureSection } from './components/FeatureSection'
import { NavBar } from './components/NavBar'

const MobileResponsiveDesign = () => {
    return (
        <div className="font-roboto">
                <NavBar />
                <HeroSection />
                <FeatureSection />
        </div>
    )
}

export default MobileResponsiveDesign;