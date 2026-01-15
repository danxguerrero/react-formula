import { useState, useEffect } from 'react'

import { ProfileCard } from './components/ProfileCard'

export const TeammatesProject = () => {
    const [profiles, setProfiles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchProfiles = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://api.react-formula.com/learning-api/demos/teammates-project/profiles')
            if (!response.ok) {
                throw new Error(`HTTP Error! status: ${response.status}`)
            }

            const profileData = await response.json()

            setProfiles(profileData)

        } catch (err) {
            console.error("There was an error fetching profiles: ", err)
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchProfiles()
    }, [])

    const ProfileCards = profiles.map((profile, idx) => <ProfileCard key={idx} profile={profile} />)

    return (
        <div className="bg-gray-100 w-full min-h-screen flex flex-col items-center justify-center">
            {isLoading ? <i className="fa-solid fa-spinner text-2xl text-teal-500 animate-spin"></i> : ProfileCards}
        </div>
    )
}