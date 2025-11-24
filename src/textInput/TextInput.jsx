import { useState } from 'react';

export const TextInput = () => {
    const [text, setText] = useState('hello!')
    return <div className='bg-gray-600 h-screen flex flex-col justify-center items-center'>
        <div className='text-3xl m-8'>{text}</div>
        <input 
            type='text'
            value={text}
            onChange={(e)=> {
                setText(e.target.value);
            }}
        />
    </div>
}