"use client"

import { Trash2 } from "lucide-react"

const DeleteBtn = ({id, setChangeDetected}) => {
  return (
   <button onClick={() => {
    setChangeDetected(prev => !prev)
    fetch(`http://localhost:3000/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
   }}>
     <Trash2 className="hover:cursor-pointer" size={18}/>
   </button>
  )
}

export default DeleteBtn