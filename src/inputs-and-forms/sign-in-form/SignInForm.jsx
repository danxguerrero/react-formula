import { useState } from 'react'

export const SignInForm = () => {
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    return (
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={(e) =>{
                    e.preventDefault()
                    console.log(usernameInput, passwordInput)
                }}>
            <div 
                className="border rounded-t-lg w-full max-w-96 flex flex-col items-center justify-center mt-12 p-6 shadow-md"
            >
                <div className="text-3xl m-3">Sign-In</div>
                <input 
                    className="shadow-md rounded-lg border m-3 w-full p-2" 
                    placeholder="enter username" 
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                />
                <input 
                    className="shadow-md rounded-lg border m-3 w-full p-2" 
                    placeholder="enter password" 
                    value={passwordInput}
                    onChange={(e)=> setPasswordInput(e.target.value)}    
                />
            </div>
            <button className="bg-blue-400 w-full max-w-96 rounded-b-lg p-3 text-white shadow-md">submit</button>
            </form>
        </div>
    )
}