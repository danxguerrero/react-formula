export const ProfileCard = ({ profile }) => {
    return (
        <div className="flex shadow-md w-[450px] m-5">
            <div className="bg-emerald-500 p-3 rounded-l-lg">
                <img className="h-32 w-48 object-cover rounded-full border-[5px] border-emerald-600" src={profile.image} />
            </div>
            <div className="p-3 bg-white w-full rounded-l-lg flex flex-col justify-center">
                <p className="text-slate-500 text-xl">{profile.name}</p>
                <p className="text-emerald-600 text-lg">{profile.title}</p>
                <p className="text-slate-500">{profile.email}</p>
            </div>
        </div>
    )
}