import { useState } from 'react'
import clsx from 'clsx'

export const CheckboxInput = () => {
    const [checked, setChecked] = useState(false)

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <i class={clsx("fa-regular fa-game-console-handheld text-5xl", checked ? 'animate-bounce' : '')}></i>
            <div className='flex'>
                <input 
                    id='bounce-checkbox'
                    type='checkbox'
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)} 
                    className='m-1'   
                />
                <label htmlfor='bounce-checkbox'>bounce</label>
            </div>
        </div>
    )
}