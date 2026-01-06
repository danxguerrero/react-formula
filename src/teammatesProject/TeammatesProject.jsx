import { useState, useEffect } from 'react'

import { ProfileCard } from './components/ProfileCard'

export const TeammatesProject = () => {
    const [profiles, setProfiles] = useState([])

    const fetchProfiles = async () => {
        try {
            const response = await fetch('https://api.react-formula.com/learning-api/demos/teammates-project/profiles')
            if (!response.ok) {
                throw new Error(`HTTP Error! status: ${response.status}`)
            }

            const profileData = await response.json()

            setProfiles(profileData)

        } catch (err) {
            console.error("There was an error fetching profiles: ", err)
        }
    }


    useEffect(() => {
        fetchProfiles()
    }, [])

    const ProfileItems = profiles.map((profile, idx) => <ProfileCard key={idx} profile={profile} />)

    return <div className="bg-gray-100 w-full h-screen flex flex-col items-center justify-center">{ProfileItems}</div>
}