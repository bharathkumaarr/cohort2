
import React from 'react'
import { useState } from 'react';

function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
  return (
    <div>
        <input style={{
            height: '2rem',
            margin: '1rem',
            borderRadius: '0.5rem',
            border: 'solid 1px',
            padding: '0.25rem'
            }} onChange={function(e) {
                const value = e.target.value;
                setTitle(e.target.value)
            }}
            type="text" placeholder='title'/> <br />
        <input style={{
            height: '2rem',
            margin: '1rem',
            width: '20rem',
            borderRadius: '0.5rem',
            border: 'solid 1px',
            padding: '0.25rem'

            }}  onChange={function(e) {
                const value = e.target.value;
                setDescription(e.target.value)
            }}
        type="text" placeholder='description'/> <br />
        <button style={{
            height: '2.5rem',
            margin: '1rem',
            width: '10rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            background: 'royalBlue',
            color: 'white'
            }} onClick={()=>{
                fetch("http://localhost:3000/todo", {
                    method: "POST", 
                    body: JSON.stringify({
                        title: title,
                        description: description,

                    }), 
                    headers: {
                        "content-type": "application/json"
                    }
                })
                .then(async function(res) {
                    const json = await res.json()
                    alert('todo added')
                } )
            }}
            >add a todo</button>
      
    </div>
  )
}

export default CreateTodo
