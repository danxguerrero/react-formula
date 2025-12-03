import { useState } from 'react'

export const NumberInput = () => {
    const [age, setAge] = useState(30)
    const [error, setError] = useState('')
    return (
        <div className='flex justify-center items-center h-screen bg-gray-50'>
            <div className='flex flex-col items-center bg-white w-full max-w-sm rounded-lg border p-6 m-4'>
                <label htmlfor='age' className='m-2'>age</label>
                <input
                    id='age' 
                    type='number'
                    value={age}
                    min={18}
                    className='bg-gray-100 w-14 rounded-lg p-1 border m-2'
                    onChange={(e) => {
                        const newNum = Number(e.target.value)
                        if (newNum < 18) {
                            setError("age cannot be less than 18")
                        } else {
                            setError('')
                        }
                        setAge(newNum)
                    }}
                />
                <div className='text-red-700 h-8'>{error}</div>
            </div>
        </div>
    )
}