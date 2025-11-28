import { useState } from 'react'

import { MessageItem } from './components/MessageItem'

export const MessageProject = () => {
    const [inputText, setInputText] = useState('')
    const [messages, setMessages] = useState([])

    const messageItems = messages.map((msg, idx) => <MessageItem message={msg} key={idx} />)


    const handleSubmit = (e) => {
        e.preventDefault()
        setMessages([...messages, inputText])
        setInputText('')
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center m-5 w-full max-w-2xl'>
                <form 
                    className='flex m-5 w-full justify-center items-center max-w-md'
                    onSubmit={handleSubmit}
                >
                    <input 
                        type='text'
                        className='m-3 border border-gray-400 p-2 rounded-lg w-full'
                        onChange={(e) => setInputText(e.target.value)}
                        value={inputText}
                    />
                    <button className='bg-indigo-300 text-indigo-500 rounded-lg px-4 py-2'>submit</button>
                </form>
                {messageItems}
            </div>
        </div>
    )
}