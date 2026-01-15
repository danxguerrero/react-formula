import { useState } from 'react'
import clsx from 'clsx'

export const Select = () => {
    const [bgColor, setBgColor] = useState('bg-green-300')

    return (
        <div className={clsx('flex justify-center items-center h-screen', bgColor)}>
            <label
                htmlfor='color-select'
                className='m-3'
            >
                Choose a color:
            </label>
            <select 
                id ='color-select'
                className='p-2 rounded-lg'
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
            >
                <option value='bg-red-300'>red</option>
                <option value='bg-blue-300'>blue</option>
                <option value='bg-green-300'>green</option>
                <option value='bg-orange-300'>orange</option>
                <option value='bg-purple-300'>purple</option>
            </select>
        </div>
    )
}