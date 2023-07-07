import React, { useState } from 'react'

export default function TodoItems(props) {
    const [complete , setComplete] = useState(false)
    return (
        <div className='item'>
            <li style={{ textDecoration:complete ?"line-through" : "none"}}>{props.inputText}</li>
            <button onClick={() => {
                setComplete(true)
                setTimeout(() => {
                    props.onChecked(props.id)
                    setComplete(false)
                }, 600);
               
            }}>Complete</button>
        </div>
    )
}
