import Note from "./components/Note"
import noteService from "./services/notes"
import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {

const hookTheNotes=()=>{
 noteService.getAll()
 .then(intilization=>{
  setNotes(intilization)
 })

}

useEffect(hookTheNotes,[])



const [notes,setNotes]=useState([])
const [newNote,setNewNote]=useState('a new note')
const [showTotal,setShowTotal]=useState(true)

const addNotes=(event)=>{
  event.preventDefault()
  const noteObject={
    content:newNote,
    important:Math.random<0.5,
    id:notes.length+1
  }
 noteService
 .create(noteObject)
 .then(res=>{
  setNotes(notes.concat(res))
 })
  setNewNote("")
}

const handeleNoteChange=(event)=>{
  console.log(event.target.value)
  setNewNote(event.target.value)
  
}

const handelShow=()=>{
setShowTotal(!showTotal)
}

const toggleimportance=(id)=>{
  const url=`http://localhost:3001/notes/${id}`
  const note=notes.find(n=>n.id===id)
  const changeNote={...note,important:!note.important}


noteService.update(id,changeNote).then(res=>{
    setNotes(notes.map(note=>note.id===id?res:note))
  })
}

const notesToShow=showTotal?notes:notes.filter(note=>note.important===true)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note} toggleimportance={()=>toggleimportance(note.id)}/>)}
      </ul>
    <button onClick={handelShow}>
      show {showTotal?'important':'all'}
    </button>
    <form onSubmit={addNotes}>
      <input 
     
       value={newNote}
       onChange={handeleNoteChange}
      />
    <button type="submit">save</button>

    </form>

    </div>
  )
}

export default App