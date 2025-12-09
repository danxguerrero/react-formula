import { useState } from "react";
import CatItem from "./components/CatItem";
import initialCats from "./data/initial-cats";

const CatDirectory = () => {
    const [cats, setCats] = useState(initialCats);

    const catItems = cats.map((cat, idx) => <CatItem key={idx} cat={cat} />);

    const [name, setName] = useState("");
    const [age, setAge] = useState(1);
    const [imageUrl, setImageUrl] = useState("");
    const [interests, setInterests] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        newCat = {
            name: name,
            imageUrl: imageUrl,
            interests: interests,
            age: age,
        }
        setCats([...cats, newCat])
        setName("")
        setAge(1);
        setImageUrl("")
        setInterests("")
    }

    return (
        <div className="flex flex-col items-center justify-center py-10 bg-indigo-50">
            <div className='bg-violet-700 text-center text-white text-2xl p-8 rounded-t-lg w-full max-w-md'>Create a Cat Profle</div>
            <form
                className='shadow-md w-full max-w-md p-3 bg-neutral-50'
                onSubmit={(e) => {
                    e.preventDefault()
                    const newCat = {
                        name: name,
                        imageUrl: imageUrl,
                        interests: interests,
                        age: age,
                    }
                    setCats([...cats, newCat])
                    setName("")
                    setAge(1);
                    setImageUrl("")
                    setInterests("")
                }}
            >
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            className='border rounded-lg p-1'
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex w-full'>
                        <div className='flex flex-col m-1'>
                            <label htmlFor='age'>Age</label>
                            <input
                                type='number'
                                id='age'
                                value={age}
                                min={1}
                                className='border rounded-lg p-1 w-12'
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>
                        <div className='flex flex-col w-full m-1'>
                            <label htmlFor='image-url'>Image URL</label>
                            <input
                                type='text'
                                id='image-url'
                                value={imageUrl}
                                placeholder='url for an image'
                                className='border rounded-lg p-1 w-full'
                                onChange={(e) => setImageUrl(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='flex flex-col m-1'>
                        <label htmlFor='interests'>Interests</label>
                        <textarea
                            id='interests'
                            rows={3}
                            className='border rounded-lg p-1'
                            value={interests}
                            placeholder="What are your cat's hobbys and interests?"
                            onChange={(e) => setInterests(e.target.value)}
                            required
                        />
                    </div>
                    <button className='bg-rose-300 rounded-lg p-2 text-violet-700 text-xl my-3'>Create</button>
                </div>

            </form>
            <div className="flex flex-col items-center w-full max-w-2xl">
                {catItems}
            </div>
        </div>
    );
};

export default CatDirectory;